import React, { useState } from "react";
import CategoryCard from "./CategoryCard";
import PropertyCard from "./PropertyCard";

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
};

export default function AuctionLayout() {
  const [priceRange, setPriceRange] = useState([0, 500000]);

  const handlePriceChange = (e) => {
    setPriceRange([0, parseInt(e.target.value)]);
  };

  return (
    <div className="flex overflow-hidden flex-col items-center pt-9 pb-20 bg-white">
      <div className="flex flex-col self-stretch px-16 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex relative flex-col items-start px-20 py-20 w-full min-h-[634px] rounded-[50px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b3596eea36edcb84a1e41805976e3724c325066aa90d93985003cec585d3439?placeholderIfAbsent=true&apiKey=289b2f6eb1774e2f9cac4324cda58d87"
            alt="Auction background"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="relative text-6xl font-semibold text-slate-900 max-md:max-w-full max-md:text-4xl">
            Find the nearest auction
            <br />
            events now !
          </div>
          <div className="relative mt-4 text-2xl leading-9 text-slate-600 max-md:max-w-full">
            We provide a complete service for the sale,
            <br />
            purchase or rental of real estate.
          </div>
          <div className="relative px-7 py-0.5 mt-16 text-sm font-medium leading-9 uppercase whitespace-nowrap bg-white rounded-[16px_16px_0px_0px] text-slate-900 tracking-[2.8px] max-md:px-5 max-md:mt-10">
            Auctions
          </div>
          <div className="relative py-6 pr-20 pl-7 max-w-full shadow-2xl bg-sky-900 bg-opacity-80 w-[918px] max-md:px-5 rounded-tr-3xl rounded-bl-3xl rounded-br-3xl">
            <form className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
              <label htmlFor="location" className="sr-only">Location</label>
              <input 
                type="text"
                id="location"
                placeholder="Location"
                className="w-full bg-transparent rounded-[20px] px-4 py-2.5 text-neutral-200 
                  focus:outline-none hover:border-zinc-100 
                  appearance-none cursor-text transition-all duration-200 ease-in-out
                  focus:bg-zinc-800/10 placeholder-neutral-400"
              />
            </div>
              <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
              <div className="flex relative items-center gap-4 text-base leading-9 text-neutral-200 max-md:mt-10 group">
                <div className="shrink-0 w-0.5 border-2 border-solid border-zinc-200 h-[52px] group-hover:border-zinc-300 transition-colors duration-200 rounded-full" />
                <div className="flex-1 relative">
                  <select 
                    id="auctionType" 
                    className="w-full bg-transparent rounded-[20px] px-4 py-2.5 text-neutral-200 
                      focus:outline-none hover:border-zinc-100 
                      appearance-none cursor-pointer transition-all duration-200 ease-in-out
                      focus:bg-zinc-800/10"
                    aria-label="Choose auction type"
                  >
                    <option value="" disabled selected className="bg-zinc-800 text-neutral-400">Select auction type</option>
                    <option value="online" className="bg-zinc-800 text-neutral-200">Online Auction</option>
                    <option value="live" className="bg-zinc-800 text-neutral-200">Live Auction</option>
                    <option value="sealed" className="bg-zinc-800 text-neutral-200">Sealed Bid</option>
                    <option value="reverse" className="bg-zinc-800 text-neutral-200">Reverse Auction</option>
                  </select>
                </div>
              </div>
            </div>
              <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
                <div className="flex relative items-center gap-4 text-base leading-9 text-neutral-200 max-md:mt-10 group">
                  <div className="shrink-0 w-0.5 border-2 border-solid border-zinc-200 h-[52px] group-hover:border-zinc-300 transition-colors duration-200 rounded-full" />
                  <div className="flex-1 relative">
                    <div className="flex justify-between mb-2">
                      <label htmlFor="priceRange" className="text-sm text-neutral-300">
                        Price Range
                      </label>
                      <span className="text-sm text-neutral-300">
                        {formatPrice(priceRange[1])}
                      </span>
                    </div>
                    <input
                      type="range"
                      id="priceRange"
                      min="0"
                      max="1000000"
                      step="10000"
                      value={priceRange[1]}
                      onChange={handlePriceChange}
                      className="w-full h-1 rounded-[20px] appearance-none cursor-pointer
                        range-slider focus:outline-none"
                      style={{
                        background: `linear-gradient(to right, #ffffff ${(priceRange[1] / 1000000) * 100}%, transparent ${(priceRange[1] / 1000000) * 100}%)`
                      }}
                    />
                    <style jsx>{`
                      .range-slider {
                        border: 1px solid rgba(255, 255, 255, 0.2);
                      }
                      .range-slider::-webkit-slider-thumb {
                        appearance: none;
                        width: 12px;
                        height: 12px;
                        background: #ffffff;
                        border-radius: 50%;
                        cursor: pointer;
                        transition: all 0.2s ease-in-out;
                      }
                      .range-slider::-moz-range-thumb {
                        width: 12px;
                        height: 12px;
                        background: #ffffff;
                        border-radius: 50%;
                        cursor: pointer;
                        border: none;
                        transition: all 0.2s ease-in-out;
                      }
                      .range-slider::-webkit-slider-runnable-track {
                        background: transparent;
                      }
                      .range-slider::-moz-range-track {
                        background: transparent;
                      }
                    `}</style>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="self-center mt-14 ml-6 text-4xl font-semibold text-center text-sky-900 max-md:mt-10 max-md:max-w-full">
          Get Assets according to your need !
        </div>
        <div className="self-end px-16 py-3.5 mt-11 max-w-full text-sm rounded-md bg-neutral-100 text-zinc-500 w-[417px] max-md:px-5 max-md:mt-10">
          <input
            type="search"
            placeholder="Search for assets/ auctions..."
            className="w-full bg-transparent focus:outline-none"
            aria-label="Search assets or auctions"
          />
        </div>
      </div>
      <div className="flex flex-col mt-10 w-full max-w-[1365px] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-center justify-center">
          <CategoryCard />
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff43229835cfd703f819113df90025c7a1454f6c07f6051d75c88988a2f02aa0?placeholderIfAbsent=true&apiKey=289b2f6eb1774e2f9cac4324cda58d87"
          alt=""
          className="object-contain mt-5 w-full aspect-[1000] max-md:max-w-full"
        />
      </div>
      <PropertyCard />
    </div>
  );
}