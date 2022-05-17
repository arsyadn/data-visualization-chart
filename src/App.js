import logo from './logo.svg';
import './App.css';
import {Bar, Pie, Line  } from 'react-chartjs-2';
import { Chart } from "chart.js/auto";
import {useState, useEffect} from 'react';

function App() {

  const [dataCar, setDataCar] = useState([]);

  const getDataCar = async () => {
    const data = await fetch('https://rent-cars-api.herokuapp.com/admin/car');
    const result = await data.json();
    setDataCar(result);
    console.log(data);
  }

  useEffect(() =>{
    getDataCar();
  },[]);

  const dataChart = {
    labels:["January","February","March"],
    datasets: [
    {
      label:"Terjual",
      backgroundColor:"#92B4EC",
      data: dataCar.map((item) => item.price)
    },
    {
      label:"Tidak Terjual",
      data: [3, 5, 61],
      backgroundColor: "#5F7161"
    }
  ]
  }

  return (
    <>
    <div>
    <Bar data={dataChart}/>
    </div>
    </>
  );
}

export default App;
