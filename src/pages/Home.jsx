import React, { useState } from 'react';
import propertiesData from '../data/properties';
import FilterBar from '../components/FilterBar';
import SearchBar from '../components/SearchBar';
import PropertyCard from '../components/PropertyCard';

const parsePrice = (priceStr) => {
  if (priceStr.includes('Cr')) {
    return parseFloat(priceStr.replace(/[^\d.]/g, '')) * 10000000;
  } else if (priceStr.includes('Lakh')) {
    return parseFloat(priceStr.replace(/[^\d.]/g, '')) * 100000;
  }
  return 0;
};

const Home = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [flatType, setFlatType] = useState('');


  const filteredProperties = propertiesData.filter((property) => {
    const city = selectedCity.toLowerCase();
    const propertyCity = property.location.split(',')[1]?.trim().toLowerCase() || '';

    const cityMatch = city === '' || propertyCity === city;
    const priceMatch =
      selectedPrice === '' ||
      (selectedPrice === 'above'
      ? parsePrice(property.price) > 15000000
      : parsePrice(property.price) <= parseInt(selectedPrice));

    const searchMatch = searchQuery === '' || property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const flatTypeMatch = flatType === '' || property.flatType === flatType;

    return cityMatch && priceMatch && searchMatch && flatTypeMatch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <FilterBar
          setFlatType={setFlatType}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          selectedPrice={selectedPrice}
         setSelectedPrice={setSelectedPrice}
        />

      {filteredProperties.length === 0 ? (
        <p className="text-center text-gray-500">No properties match your filters.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
