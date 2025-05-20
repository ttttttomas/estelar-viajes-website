'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import PeriodosPack from '../components/PeriodosPack';

export default function CordilleraPage() {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
      const loadProduct = async () => {
        const response = await axios.get(`https://api-estelar.iwebtecnology.com/products/periodo/cordillera`);
        setPackages(response.data)
        console.log(response.data)
      };
      
      loadProduct();
    }, []);

  return ( <PeriodosPack products={packages} />)
}
