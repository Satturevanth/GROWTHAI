import { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await axios.post('http://localhost:5000/business-data', { name, location });
    setData(res.data);
    setLoading(false);
  };

  const regenerate = async () => {
    const res = await axios.get(`http://localhost:5000/regenerate-headline?name=${name}&location=${location}`);
    setData(prev => ({ ...prev, headline: res.data.headline }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex flex-col items-center">
      <form onSubmit={submitForm} className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4">
        <input type="text" placeholder="Business Name" className="w-full p-2 border rounded"
          value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Location" className="w-full p-2 border rounded"
          value={location} onChange={(e) => setLocation(e.target.value)} required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>

      {data && (
        <div className="bg-white mt-6 p-6 rounded-xl shadow-md w-full max-w-md text-center">
          <h2 className="text-xl font-semibold mb-2">{name} - {location}</h2>
          <p>⭐ Rating: {data.rating}</p>
          <p>📝 Reviews: {data.reviews}</p>
          <p className="mt-2 font-medium italic">"{data.headline}"</p>
          <button onClick={regenerate} className="mt-4 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
            Regenerate SEO Headline
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
