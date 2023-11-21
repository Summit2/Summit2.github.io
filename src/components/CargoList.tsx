import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface CargoItem {
  pk: number;
  title: string;
  image_url: string;
  weight: number;
  description: string;
  is_deleted: boolean;
  image_binary: Buffer;
}

const CargoList = () => {
  const [data, setData] = useState<CargoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/cargo/");
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul className='card-list'>
      {Array.isArray(data) && data.map((item) => (
        <li key={item.pk} className="card">
          {/* ... rendering logic for a single cargo item */}
          <div className="delete-button">
            <form method="post" action="deleteCargo/">
              <input type="hidden" name="id_del" value={item.pk} />
              <button type="submit" name="del_btn">
                &#10060;
              </button>
            </form>
          </div>

          <div className="font-ordinary">{item.title}</div>
          <div className="images">
            <img src={`data:image/jpeg;base64,${item.image_binary.toString('base64')}`} className="images" alt={item.title} />
          </div>
          <br />

          <a href={`cargo/${item.pk}/`} className="beautiful-link">
            <h2>Подробнее...</h2>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CargoList;
