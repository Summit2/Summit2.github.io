import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

// import '/css/search_bar.css';
// import '/css/style.css';
// import '/css/delete_button.css';

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

   return (
     <> 
       {data.map((item) => (
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
           <div className="images">
               <img src={`data:image/jpeg;base64,${item.image_binary.toString('base64')}`} className="images" alt={item.title} />
           </div>
           <br />
           
          
           <a href={`cargo/${item.pk}/`} className="beautiful-link">
             <h2>Подробнее...</h2>
           </a>
         </li>
       ))}
     </>
   );
};

export default CargoList;
