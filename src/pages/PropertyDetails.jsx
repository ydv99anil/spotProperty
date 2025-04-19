import { useParams } from 'react-router-dom';
import properties from '../data/properties';

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find(p => p.id.toString() === id);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {property ? (
        <>
          <img src={property.image} alt={property.title} className="w-full h-64 object-cover rounded-md mb-4" />
          <h2 className="text-2xl font-bold mb-2">{property.title}</h2>
          <p className="text-gray-500 mb-1">{property.location}</p>
          <p className="text-blue-600 text-xl font-bold">{property.price}</p>
          <p>{property.description}</p>
        </>
      ) : (
        <p>Property not found</p>
      )}
    </div>
  );
}