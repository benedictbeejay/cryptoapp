import React from 'react'
import Btc from '../assets/btc-img.png'
const Featured = () => {
  return (
    <div className='featured'>
      <div className='container'>
        <div className='left'>
          <h2>
            Explore top Crypto,s Like Bitcoin, Ethereum and Dogecoin
          </h2>
          <p>See all available assets: Cryptocurrencies and NFTs</p>
          <button className='btn'>
            See more coins
          </button>
        </div> 
        <div className='right'>
          <div className='top'>
            <img src={Btc} alt='/'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
