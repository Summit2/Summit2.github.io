import { FC, useEffect, useState } from 'react'


interface CargoItem {
    pk: number;
    title: string;
    image_url: string;
    weight: number;
    description: string;
    is_deleted: boolean;
    image_binary: Buffer;
  }
  
  interface CargoList {
    data: CargoItem[];
  }
  
  export const getCargoList = async (): Promise<CargoList> => {
    try {
      const response = await fetch('http://localhost:8000/cargo/');
      console.log('Response:', response);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Data received:', data);
      return data;
    } catch (error) {
      console.error('Error fetching cargo list:', error);
      throw error;
    }
  };