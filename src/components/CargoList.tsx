
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get("http://localhost:8000/cargo/");
        setData(response.data);
      };
  
      fetchData();
    }, []);
	
	// const result = Object.values(data);
    // console.log(result)
    // return (       
    //     <div className="card text-center">
  	// 		<div className="card-header">
	// 			{result[0]}
  	// 		</div>
  	// 		<div className="card-body">
	// 		  <img className="cardImage" src={result[2]} height={200} width={200}  />
	// 		  <hr></hr>
    // 			<h5 className="card-title">Цена: {result[3]}</h5>
    // 			<p className="card-text">Описание: {result[1]}</p>
  	// 		</div>
	// 	</div>
    // );
    // console.log(data)
    return data.map((item) => (
      <li key={item.pk} className="card">
        <div className="delete-button">
          <form method="post" action="deleteCargo/">
            <input type="hidden" name="id_del" value={item.pk} />
            <button type="submit" name="del_btn">
              &#10060;
            </button>
          </form>
        </div>
        <br />
        <div className="images">
            <img src={`data:image/jpeg;base64,${item.image_binary.toString('base64')}`} className="images" alt={item.title} />
        </div>
        <br />
        <div className="font-ordinary">{}</div>
        <a href={`cargo/${item.pk}/`} className="beautiful-link">
          <h2>Подробнее...</h2>
        </a>
      </li>
    ));
           
  };


export default CargoList;