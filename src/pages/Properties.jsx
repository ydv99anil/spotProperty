import React, { useState } from 'react';

const Properties = ({ properties }) => {
  
  const [selectedLocation, setSelectedLocation] = useState('');

  
  const filteredProperties = properties.filter(property =>
    property.location.toLowerCase().includes(selectedLocation.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="mb-4">
        <label htmlFor="location" className="mr-2">Filter by Location:</label>
        <input
          type="text"
          id="location"
          className="p-2 border rounded"
          placeholder="Enter location"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)} 
        />
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProperties.map((property, index) => (
          <div key={index} className="p-4 border rounded shadow">
            <img
              src={property.image} 
              alt={property.title}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="font-semibold">{property.title}</h3>
            <p>{property.location}</p>
            <p>{property.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
