import React from 'react';
import SearchHeader from './SearchHeader';
import CategoryCard from './CategoryCard';
import PropertyCard from './PropertyCard';

const categories = [
  { title: 'Industrial', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/79f55df53452d15f44fba67b67e84656bc7f77caac885b0d9f1ae0efca81e3ec?placeholderIfAbsent=true&apiKey=643dc8ae27ef4b1eb644562c7626beaf' },
  { title: 'Land', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/59ea53c8e6b9178a814ecb3192432b96b90e4404b660a72c651413b2cee1c10f?placeholderIfAbsent=true&apiKey=643dc8ae27ef4b1eb644562c7626beaf' },
  { title: 'Commercial', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b110cbe65b0ee4b3ff4a0c079afb56314a0a104403b875370e9eb8afcab9c20a?placeholderIfAbsent=true&apiKey=643dc8ae27ef4b1eb644562c7626beaf' },
  { title: 'Residential', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6b1629408ec0a67067984f7a3671ffd768fc989a8b2e5578c32567c3ad8f2235?placeholderIfAbsent=true&apiKey=643dc8ae27ef4b1eb644562c7626beaf' }
];

const properties = [
  {
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/32e195df577c08c77be34af1fdad21c5d86d1ae6192e287e3269e7c017d176c8?placeholderIfAbsent=true&apiKey=643dc8ae27ef4b1eb644562c7626beaf',
    title: 'Thakur Complex',
    location: 'Aviasales.ru Seaview Phuket office, Phuket, Thailand',
    bidPrice: '65,03,099',
    bank: 'State Bank of India'
  },
  {
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/32e195df577c08c77be34af1fdad21c5d86d1ae6192e287e3269e7c017d176c8?placeholderIfAbsent=true&apiKey=643dc8ae27ef4b1eb644562c7626beaf',
    title: 'Thakur Complex',
    location: 'Aviasales.ru Seaview Phuket office, Phuket, Thailand',
    bidPrice: '65,03,099',
    bank: 'State Bank of India'
  },
  {
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/32e195df577c08c77be34af1fdad21c5d86d1ae6192e287e3269e7c017d176c8?placeholderIfAbsent=true&apiKey=643dc8ae27ef4b1eb644562c7626beaf',
    title: 'Thakur Complex',
    location: 'Aviasales.ru Seaview Phuket office, Phuket, Thailand',
    bidPrice: '65,03,099',
    bank: 'State Bank of India'
  }
];

function AuctionLayout() {
  return (
    <div className="flex overflow-hidden flex-col pt-7 pb-14 bg-white">
      <SearchHeader />
      <div className="flex flex-wrap gap-10 items-center self-center mt-11 max-md:mt-10 max-md:max-w-full">
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center self-center mt-20 w-full max-w-[1381px] max-md:mt-10 max-md:max-w-full">
        {properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
      <div className="self-end mt-16 mr-14 text-2xl font-medium text-slate-600 max-md:mt-10 max-md:mr-2.5">
        View all...
      </div>
    </div>
  );
}

export default AuctionLayout;