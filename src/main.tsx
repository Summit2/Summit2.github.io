import React, { FC, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';

import { 
  BrowserRouter as Router,
  Route,
  Routes,
   } from 'react-router-dom'

// user imports
import '/css/search_bar.css';
import '/css/my_style.css';
import '/css/delete_button.css';

import CargoList from './components/CargoList.tsx';
import ExactCargo from './components/CargoDetails'
import BreadCrumbs from './components/BreadCrumbs.tsx'
import './components/BreadCrumbs.css'
// import Navigation_Bar from './components/NaviBar.tsx'
import NavigationAndSearchBar from './components/NaviBar';

const router = createBrowserRouter([
  {
    path: '/cargo/',
    // element: <div className = "font"><b>Cписок грузов для отправки на Starship</b></div>
    // element: <div> {renderFindBar()} </div>
  },
  {
    path: '/orders',
    // element: <h1>Это наша страница с чем-то новеньким</h1>,
  },
]);

const data = { input: 'initialValue' }; // Replace 'initialValue' with your actual initial value


async function renderApp() {
 
  ReactDOM.render(
    <React.StrictMode>
      
      <RouterProvider router={router} />
      <NavigationAndSearchBar />
    <Router>
      
    
    <BreadCrumbs />
    <Routes>
    <Route path="/cargo/" element={<CargoList />}/>
    <Route path="/cargo/:id_cargo/" element={<ExactCargo />} />
      
     
    </Routes>
    </Router>
  

      
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderApp();











// function renderFindBar() {
//   return (
//     <>
//       <div className="font-ordinary">
//         <form action="" method="get">
//           <label htmlFor="text">Поиск по названию</label>
//           <input id="text" name="good_item" type="text" className="search-bar" value={data.input} />
//           <input type="submit" value="Поиск" className="search-button" />
//         </form>
//       </div>
//       <br />
//     </>
//   );
// }

// const SearchButton: FC = () => {
//   // Объявление новой переменной состояния «count»
//   const [count, setCount] = useState(0);

//   return <div onClick={() => setCount(count => count++)}>{count}</div>;
// };
