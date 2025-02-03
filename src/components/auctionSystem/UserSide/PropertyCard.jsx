import * as React from "react";

export function PropertyCard({ image }) {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="group grow px-10 py-7 w-full bg-white border-2 border-solid border-zinc-200 rounded-[30px] max-md:px-5 max-md:mt-8 max-md:max-w-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-100 hover:border-blue-200 hover:scale-[1.02]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={image}
              alt="Property"
              className="object-contain grow shrink-0 w-44 max-w-full rounded-3xl aspect-[0.92] max-md:mt-10"
            />
          </div>
          <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-10">
              <div className="self-start text-3xl font-semibold text-slate-900">
                103/143 West Street,
                <br />
                Crows Nest
              </div>
              <div className="flex gap-5 justify-between mt-3 text-xl font-medium">
                <div className="flex flex-col self-start text-gray-400">
                  <div className="flex gap-5 justify-between">
                    <div>10 Bedroom</div>
                    <div>150 M</div>
                  </div>
                  <div className="self-start mt-9">Posted by X Builder</div>
                </div>
                <div className="flex flex-col">
                  <div className="self-end text-gray-400 max-md:mr-2">2 Garage</div>
                  <div className="px-6 py-1.5 mt-7 text-center text-white whitespace-nowrap bg-gray-400 rounded-xl max-md:px-5 transition-all duration-300 group-hover:bg-blue-500 group-hover:shadow-lg group-hover:shadow-blue-200">
                    $45,545
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}