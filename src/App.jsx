import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useState} from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import AddProperty from './pages/AddProperty';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import propertiesData from './data/properties';

function App() {
  const [properties, setProperties] = useState(propertiesData);

  const addNewProperty = (property) => {
    setProperties([property, ...properties]);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/add-property" element={<AddProperty onAdd={addNewProperty} />} />
            <Route path="/properties" element={<Properties properties={propertiesData} />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
  
}

export default App;