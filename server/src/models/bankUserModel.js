import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const bankUserSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minLength: [8, "Password must have at least 8 characters."],
      maxLength: [32, "Password cannot have more than 32 characters."],
      select: false,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    // **************************************************************************
    address: {
      type: Object,
      default: {
        city: "",
        district: "",
        state: "",
        Pincode: "",
      },
    },
    bankName: {
      type: String,
      //   required: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    designation: {
      type: String,
      //   required: true,
      trim: true,
      lowercase: true,
    },
    userAddress: {
      type: String,
      //   required: true,
    },
    bankAddress: {
      type: String,
      //   required: true,
    },
    addedProperties: [
      {
        type: Schema.Types.ObjectId,
        ref: "Properties",
      },
    ],
    viewCount: {
      type: Number,
      default: 0,
    },
    verified: { type: Boolean, default: false },
    verificationCode: Number,
    verificationCodeExpire: Date,
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

// Password Hashing
bankUserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  const hassedPassword = await bcrypt.hash(this.password, salt);

  this.password = hassedPassword;
  next();
});

// Password Validation
bankUserSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Generating verification Code
bankUserSchema.methods.generateVerificationCode = function () {
  function generateRandomFiveDigitNumber() {
    const firstDigit = Math.floor(Math.random() * 9) + 1;
    const remainingDigit = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, 0);
    return parseInt(firstDigit + remainingDigit);
  }
  const verificationCode = generateRandomFiveDigitNumber();
  this.verificationCode = verificationCode;
  this.verificationCodeExpire = Date.now() + 5 * 60 * 1000;

  return verificationCode;
};

bankUserSchema.methods.generateToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const bankUser =
  mongoose.models.bankUser || mongoose.model("bankUser", bankUserSchema);

export default bankUser;
