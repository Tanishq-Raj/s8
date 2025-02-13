import validator from "validator";
import User from "../models/userModel.js";
import { sendEmail } from "../utils/sendEmail.js";
import { sendToken } from "../utils/sendToken.js";
import passport from "passport";
import propertyModel from "../models/PropertiesModel.js";

// User Registration
export const userRegister = async (req, res) => {
  try {
    const { name, email, phone, password, verificationMethod } = req.body; ////////////////////////////////

    if (!name || !email || !phone || !password || !verificationMethod) {
      return res.json({ success: false, message: "Missing Details" });
    }

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    // validating the password format
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    function validatePhoneNumber(phone) {
      const phoneRegex = /^\+91\d{10}$/; /////////////////////////////////////
      return phoneRegex.test(phone);
    }

    if (!validatePhoneNumber(phone)) {
      return res.json({ success: false, message: "Enter valid Phone number" });
    }

    const existingUser = await User.findOne({
      $or: [
        {
          email,
          verified: true,
        },
        {
          phone,
          verified: true,
        },
      ],
    });

    if (existingUser) {
      return res.json({ success: false, message: "User Already exist" });
    }

    // Registration Attempts
    const registrationAttemptsByUser = await User.find({
      $or: [
        { phone, verified: false },
        { email, verified: false },
      ],
    });

    if (registrationAttemptsByUser >= 3) {
      return res.json({
        success: false,
        message:
          "You have exceeded the maximum number of attempts (3). Please try again after an hour.",
      });
    }

    const userData = {
      name,
      email,
      phone,
      password,
    };

    const newUser = new User(userData);
    const verificationCode = await newUser.generateVerificationCode();
    const user = await newUser.save();

    sendVerificationCode(
      verificationMethod,
      verificationCode,
      name,
      phone,
      email,
      res
    );
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

async function sendVerificationCode(
  verificationMethod,
  verificationCode,
  name,
  phone,
  email,
  res
) {
  try {
    if (verificationMethod === "email") {
      const message = generateEmailTemplate(verificationCode);
      await sendEmail({
        email,
        subject: "Your Verification Code from S8",
        message,
      });

      res.status(200).json({
        success: true,
        message: `Verification email successfully sent to ${name}`,
      });
    } else if (verificationMethod === "phone") {
      const verificationCodeWithSpace = verificationCode
        .toString()
        .split("")
        .join(" ");
      // await client.calls.create({
      //   twiml: `<Response><Say>Your verification code is ${verificationCodeWithSpace}. Your verification code is ${verificationCodeWithSpace}.</Say></Response>`,
      //   from: process.env.TWILIO_PHONE_NUMBER,
      //   to: phone,
      // });
      // res.status(200).json({
      //   success: true,
      //   message: `OTP sent.`,
      // });
    } else {
      return res.status(500).json({
        success: false,
        message: "Invalid verification method.",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Verification code failed to send.",
    });
  }
}

// Email Message Template
function generateEmailTemplate(verificationCode) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
      <h2 style="color: #4CAF50; text-align: center;">Verification Code</h2>
      <p style="font-size: 16px; color: #333;">Dear User,</p>
      <p style="font-size: 16px; color: #333;">Your verification code is:</p>
      <div style="text-align: center; margin: 20px 0;">
        <span style="display: inline-block; font-size: 24px; font-weight: bold; color: #4CAF50; padding: 10px 20px; border: 1px solid #4CAF50; border-radius: 5px; background-color: #e8f5e9;">
          ${verificationCode}
        </span>
      </div>
      <p style="font-size: 16px; color: #333;">Please use this code to verify your email address. The code will expire in 5 minutes.</p>
      <p style="font-size: 16px; color: #333;">If you did not request this, please ignore this email.</p>
      <footer style="margin-top: 20px; text-align: center; font-size: 14px; color: #999;">
        <p>Thank you,<br>S8 Team</p>
        <p style="font-size: 12px; color: #aaa;">This is an automated message. Please do not reply to this email.</p>
      </footer>
    </div>
  `;
}

// Verify OTP
export const verifyOTP = async function (req, res) {
  try {
    const { email, phone, otp } = req.body;

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    function validatePhoneNumber(phone) {
      const phoneRegex = /^\+91\d{10}$/; ////////////////////////////////////////////
      return phoneRegex.test(phone);
    }

    if (!validatePhoneNumber(phone)) {
      return res.json({ success: false, message: "Enter valid Phone number" });
    }

    const userAllEntries = await User.find({
      $or: [
        {
          email,
          verified: false,
        },
        {
          phone,
          verified: false,
        },
      ],
    }).sort({ createdAt: -1 });

    if (!userAllEntries) {
      return res.json({ success: false, message: "User does not exist" });
    }

    let user;

    if (userAllEntries > 1) {
      user = userAllEntries[0];

      await User.deleteMany({
        _id: { $ne: user._id },
        $or: [
          { email, verified: false },
          { phone, verified: false },
        ],
      });
    } else {
      user = userAllEntries[0];
    }

    if (user.verificationCode !== Number(otp)) {
      return res.json({ success: false, message: "Invalid OTP" });
    }

    let currentTime = Date.now();
    let verificationCodeExpire = new Date(
      user.verificationCodeExpire
    ).getTime();

    if (currentTime > verificationCodeExpire) {
      return res.json({ success: false, messae: "OTP expired" });
    }

    user.verified = true;
    user.verificationCodeExpire = null;
    user.verificationCode = null;
    await user.save();

    sendToken(user, "Account Verified", res);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server Error.",
    });
  }
};

// User Login
export const login = async function (req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        success: false,
        message: "Email and Password are required",
      });
    }

    const user = await User.findOne({ email, verified: true }).select(
      "+password"
    );

    if (!user) {
      return res.json({ success: false, message: "Invalid email or password" });
    }

    const isPasswordCorrect = await user.isPasswordCorrect(password);

    if (!isPasswordCorrect) {
      return res.json({ success: false, message: "Invalid email or password" });
    }

    sendToken(user, "Logged in successfully", res);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server Error.",
    });
  }
};

// User Logout
export const logout = (req, res) => {
  res
    .cookie("s8token", "", { expires: new Date(Date.now), httpOnly: true })
    .json({
      success: true,
      message: "Logged out successfully.",
    });
};

// OAuth Google
export const googleAuth = passport.authenticate("google", {
  scope: ["profile", "email"],
});

export const googleAuthCallback = (req, res) => {
  passport.authenticate("google", { session: false }, (err, user) => {
    if (err || !user) {
      return res.redirect("/login?error=OAuth failed");
    }
    // Generate token and send response
    sendToken(user, "Logged in with Google", res);
  })(req, res);
};

// Get all the properties
export const getProperties = async (req, res) => {
  try {
    const properties = await propertyModel.find({});

    res.json({ success: true, properties });
  } catch (error) {
    console.log(error);
    res.json({ success: false, messae: error.message });
  }
};

export const addToSavedProperties = async (req, res) => {
  try {
    const {userId, propertyId} = req.body
    const propertyExist = await propertyModel.findById(propertyId)
    if (!propertyExist) {
      return res.status(404).json({ success: false, message: "Property not Found" });
    }

    await User.findByIdAndUpdate(
      userId, 
      { $addToSet: { savedProperties: propertyId } }, 
      { new: true }
    );
    
    res.status(201).json({success: true, message: "Property added to Favourite"});

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

export const getSavedProperties = async (req, res) => {
  try {
    const {userId} = req.body
    const user = await User.findOne({ _id: userId, savedProperties: { $exists: true, $not: { $size: 0 } } });

    if (!user) {
      return res.status(404).json({ success: false, message: "No saved Properties found" });
    }

    res.status(200).json({ success: true, savedProperties: user.savedProperties });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

export const removeFromSavedProperties = async (req, res) => {
  try {
    const {userId, propertyId} = req.body
    const propertyExist = await User.findOne({ _id: userId, savedProperties: propertyId})
    if (!propertyExist) {
      return res.status(404).json({ success: false, message: "Property not Found" });
    }

    await User.findByIdAndUpdate(userId, {$pull : {savedProperties: propertyId}})
    res.status(200).json({ message: "Property removed from saved properties" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}