import React from 'react'
import Home from '../components/Mainpage/Home'
import FlashDeals from '../components/flashDeals/FlashDeals';
import TopCate from '../components/top/TopCate';
import NewArrivals from '../components/newarrivals/NewArrivals';
import Discount from '../components/discount/Discount';

const Pages = ({productItems, CartItem, addToCart}) => {
  return (
    <>
    <Home CartItem = {CartItem} />
    <FlashDeals productItems={productItems} addToCart={addToCart} />
    <TopCate />
    <NewArrivals />
    <Discount />
    </>
    
  )
}

export default Pages;