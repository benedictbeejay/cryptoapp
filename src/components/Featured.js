import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';
// import Btc from '../assets/btc-img.png'
const Featured = () => {

    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': 'CG-aEVFkGM9TxF4ohroXtW69WW4'
        }
      };

      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=6', options);
        console.log(response.data);  // Log the API call results
        setData(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);  // Log the error
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='featured flex w-full py-32 px-0 self-center items-center justify-center bg-border clip-custom'>
      <div className='container grid sm:grid-cols-2 grid-cols-1 justify-center items-center p-4'>
        <div className='space-y-2 flex flex-col justify-center pb-8 sm:ml-8'>
          <h2 className='text-3xl font-semibold'>
            Explore top Crypto,s Like Bitcoin, Ethereum and Dogecoin
          </h2>
          <p className='my-6 ' >See all available assets: Cryptocurrencies and NFTs</p>
          <button className='
             bg-primaryColor 
                
                  w-full
                  md:w-1/3
                  mb-0 
                  cursor-pointer 
                  px-3.5 
                  py-3.5
                  sm:text-lg
                  text-xs
                  text-backgroundColor
                  rounded-br-2xl
                  sm:rounded-br-3xl
                  rounded-tl-2xl
                  sm:rounded-tl-3xl
                  rounded-tr-sm
                  rounded-bl-sm
                  font-semibold
                  hover:shadow-navShadow
                  transition
                  sm:self-start
                  self-center
                  btn
                  '>
            See more coins
          </button>
        </div>
        <div className='right flex flex-wrap justify-evenly px-14 sm:px-0'>
          {data.map((coin) => (
            <div key={coin.id} className='crypto-item card flex flex-col py-3 px-5 m-2 h-44 sm:w-44 w-full border-backgroundColor border-2 rounded-3xl shadow-navShadow hover:shadow-hoverShadow duration-300'>
              <div className='flex flex-col'>
                <img className='m-auto w-16 py-1' src={coin.image} alt={coin.name} />
              </div>
              <div className='flex-rows '>
                <h5 className='text-lg flex justify-center'>{coin.name}</h5>
                <p className='sm:text-xl flex justify-center'>${coin.current_price.toLocaleString()}</p>
              </div>
              {coin.price_change_percentage_24h < 0 ? (
                <span className='negative-change flex justify-center items-center'>
                  <FiArrowDown className='text-red-700 text-xl '/>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </span>
              ) : (
                <span className='positive-change  flex justify-center items-center'>
                  <FiArrowUpRight className='text-primaryColor text-3xl'/>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </span>
              )}
            </div>
          ))}
    </div> 
      
      </div>
    </div>
  )
}

export default Featured
