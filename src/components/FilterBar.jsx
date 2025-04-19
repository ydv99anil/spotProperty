const FilterBar = ({ selectedCity, setSelectedCity, selectedPrice, setSelectedPrice,setFlatType  }) => {


  return (
    <div className="flex flex-col sm:flex-row justify-start items-center gap-4 mb-8 h-3">
      <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} className="p-2 border rounded">
        <option value="">All Cities</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Pune">Pune</option>
        <option value="Delhi">Delhi</option>
        <option value="Bangalore">Bangalore</option>
      </select>

      <select value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)} className="p-2 border rounded">
        <option value="">All Prices</option>
        <option value="5000000">Below ₹50 Lakh</option>
        <option value="10000000">Below ₹1 Cr</option>
        <option value="15000000">Below ₹1.5 Cr</option>
        <option value="above">Above ₹1.5 Cr</option>
      </select>

      <select
        id="flatType"
        onChange={(e) => setFlatType(e.target.value)}
        className="w-fit px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        >
        <option value="">Select Flat Type</option>
        <option value="1BHK">1BHK</option>          <option value="2BHK">2BHK</option>
        <option value="3BHK">3BHK</option>
        <option value="4BHK">4BHK</option>
      </select>

      <button
        onClick={() => {
          setSelectedCity('');
          setSelectedPrice('');
          setFlatType('');
        }}
        className="p-2 bg-red-500 text-white rounded hover:bg-red-600 h-fit w-fit"
      >
        Remove Filters
      </button>
    </div>
  );
};
  
  export default FilterBar;