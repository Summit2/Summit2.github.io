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
import NavigationAndSearchBar from './components/NaviBar';

const router = createBrowserRouter([
  {
    path: '/cargo/',
    element:  <>
        <NavigationAndSearchBar />
        <BreadCrumbs />
        <CargoList />
        

      </>
    // element: <div className = "font"><b>Cписок грузов для отправки на Starship</b></div>
    // element: <div> {renderFindBar()} </div>
  },
  {
    path: '/cargo/:id_cargo/',
    element: <>
    <NavigationAndSearchBar />
    <BreadCrumbs />
    <ExactCargo />
    
    </>

    // element: <div className = "font"><b>Cписок грузов для отправки на Starship</b></div>
    // element: <div> {renderFindBar()} </div>
  },
  {
    path: '/orders',
    // element: <h1>Это наша страница с чем-то новеньким</h1>,
  },
]);



async function renderApp() {
 
  ReactDOM.render(
    <React.StrictMode>
      
      <RouterProvider router={router} />
 
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderApp();

