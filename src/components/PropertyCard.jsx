import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <div className="border rounded-md p-2 shadow">
      <img src={property.image} alt={property.title} className="w-full h-50 object-cover mb-3 rounded-md" />
      <h3 className="text-lg font-semibold">{property.title}</h3>
      <p>{property.location}</p>
      <p>{property.price.toLocaleString()}</p>
      <Link to={`/property/${property.id}`} className="text-blue-500 mt-2 inline-block">
        View Details
      </Link>
    </div>
  );
};

export default PropertyCard;
