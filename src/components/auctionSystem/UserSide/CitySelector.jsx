import * as React from "react";

export function CitySelector() {
  return (
    <div className="relative py-6 pr-20 pl-7 max-w-full rounded-none shadow-2xl bg-sky-900 bg-opacity-80 w-[918px] max-md:px-5">
      <form className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
          <label htmlFor="city" className="sr-only">Select Your City</label>
          <select 
            id="city"
            className="relative mt-4 text-base leading-9 text-neutral-200 bg-transparent border-none max-md:mt-10"
            aria-label="Select Your City"
          >
            <option>Select Your City</option>
          </select>
        </div>
        <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
          <div className="flex relative grow gap-8 text-base leading-9 text-neutral-200 max-md:mt-10">
            <div className="shrink-0 w-0.5 border-2 border-solid border-zinc-200 h-[52px]" />
            <label htmlFor="auctionType" className="sr-only">Choose Auction Type</label>
            <select
              id="auctionType"
              className="grow shrink self-start mt-4 w-[173px] bg-transparent border-none"
              aria-label="Choose Auction Type"
            >
              <option>Choose Auction Type</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
          <div className="flex relative grow gap-8 text-base leading-9 text-neutral-200 max-md:mt-10">
            <div className="shrink-0 w-0.5 border-2 border-solid border-zinc-200 h-[52px]" />
            <label htmlFor="priceRange" className="sr-only">Choose Price Range</label>
            <select
              id="priceRange"
              className="grow shrink self-start mt-4 w-[161px] bg-transparent border-none"
              aria-label="Choose Price Range"
            >
              <option>Choose Price Range</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}