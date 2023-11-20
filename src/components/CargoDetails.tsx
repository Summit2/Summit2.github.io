// CargoDetails.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface CargoItem {
  pk: number;
  title: string;
  image_url: string;
  weight: number;
  description: string;
  is_deleted: boolean;
  image_binary: Buffer;
}

const ExactCargo: React.FC = () => {
  const [cargoItem, setCargoItem] = useState<CargoItem | null>(null);
  const { id_cargo } = useParams<{ id_cargo: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/cargo/${id_cargo}/`);
        setCargoItem(response.data);
      } catch (error) {
        console.error('Error fetching cargo:', error);
        // Handle the error gracefully, e.g., display an error message to the user
      }
    };

    fetchData();
  }, [id_cargo]);

  if (!cargoItem) {
    return <div className='font-ordinary'>Loading...</div>;
  }

  return (
    <div>
      <div className="images">
        <img src={`data:image/jpeg;base64,${cargoItem.image_binary.toString('base64')}`} alt={cargoItem.title} />
      </div>
      <div>
        Вес: {cargoItem.weight} г.
      </div>
      <div>
        Описание: {cargoItem.description}
      </div>
    </div>
  );
};

export default ExactCargo;
