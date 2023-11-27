import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

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
  const location = useLocation();
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      let url = "http://localhost:8000/cargo/";

      // Append filter to the URL if it's provided
      // if (filter) {
      //   url += `?filter=${filter}`;
      // }

      const response = await axios.get(url);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while fetching data.");

      // If there's an error, try fetching from local data.json after 5 seconds
      setTimeout(async () => {
        try {
          const response = await axios.get('my-app/src/components/data.json');
          setData(response.data.data);
          // console.log(jsonData)
          

          setLoading(false);
          setError(null);
        } catch (localError) {
          console.error("Error fetching local data:", localError);
          setLoading(false);
          setError("An error occurred while fetching local data.");
        }
      }, 4000);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (filter: string) => {
    // Perform a PUT request to update the filter on the server
    // Adjust the endpoint and payload accordingly
    console.log('filter changed');

    axios.put("http://localhost:8000/cargo/", null, {
      params: { filter },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        // After the PUT request is successful, trigger the GET request
        setData(response.data.data);
        // Update the URL with the selected filter
        navigate(`/cargo?filter=${filter}`);
      })
      .catch((error) => {
        console.error("Error updating filter:", error);
        // Handle the error, e.g., show a notification to the user
      });
  };

  useEffect(() => {
    fetchData();
  }, [location.search]);

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
          
          <div className="delete-button">
            <form method="post" action="deleteCargo/">
              <input type="hidden" name="id_del" value={item.pk} />
              <button type="submit" name="del_btn">
                &#10060;
              </button>
            </form>
          </div>

          <div className="font-ordinary">{item.title}</div>
          
            <img src={`data:image/jpeg;base64,${item.image_binary.toString('base64')}`} className="images" alt={item.title} />
          
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
