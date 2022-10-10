import { useState } from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import axios from 'axios';

export function CreateNewBike() {
  const [modelId, setModelId] = useState('');
  const [colorId, setColorId] = useState('');
  const [locationId, setLocationId] = useState('');
  const [price, setPrice] = useState('');
  const [selectedFile, setSelectedFile] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', selectedFile);
    axios.post('http://localhost:3011/admin/bike/upload', formData, {
      Headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  console.log(selectedFile);

  return (
    <div>
      <Header />
      <h1>Create New Bike</h1>
      <form>
        <label htmlFor="modelId">
          Model Id:
          <input onChange={(e) => setModelId(e.target.value)} value={modelId} type="number" id="modelId" />
        </label>
        <label htmlFor="colorId">
          Color Id:
          <input onChange={(e) => setColorId(e.target.value)} value={colorId} type="number" id="colorId" />
        </label>
        <label htmlFor="locationId">
          Location Id:
          <input onChange={(e) => setLocationId(e.target.value)} value={locationId} type="number" id="locationId" />
        </label>
        <label htmlFor="price">
          Price:
          <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" id="price" />
        </label>
        <button type="submit">Submit</button>
      </form>

      <form onSubmit={handleSubmit}>
        <label htmlFor="imageUpload">
          Image:
          <input
            type="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <Footer />
    </div>
  );
}
