import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FC, useEffect, useState } from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '/css/search_bar.css';
import '/css/style.css';




const router = createBrowserRouter([
  {
    path: '/cargo',
    // element: <h1>Это наша стартовая страница</h1>,
  },
  {
    path: '/orders',
    // element: <h1>Это наша страница с чем-то новеньким</h1>,
  },
]);


ReactDOM.render(
  <React.StrictMode>
    {renderFindBar()}
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);


let data = { input: 'initialValue' }; // Replace 'initialValue' with your actual initial value
function renderFindBar() {
  return (<>
    <div className="font-ordinary">
      <form action="" method="get">
        <label htmlFor="text">Поиск по названию</label>
        <input
          id="text"
          name="good_item"
          type="text"
          className="search-bar"
          value={data.input}
        />
        <input type="submit" value="Поиск" className="search-button" />
      </form>
    </div>
    <br />
    </>
    );

}


const SearchButton: FC = () => {
    // Объявление новой переменной состояния «count»
    const [count, setCount] = useState(0);

    return <div onClick={()=>setCount(count=>count++)}>{count}</div>
}