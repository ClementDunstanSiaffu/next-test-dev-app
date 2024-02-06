
"use client"

import React from 'react';
import Products from '../components/ProductContainer/Products';
import Category from '../components/Category/Category';
import Advertsiment from '../components/Advertsiment/Advertsiment';
import SearchContainer from '../components/SearchContainer/SearchContainer';

export default function Page() {  
  return(
    <>
      <SearchContainer />
      <Advertsiment />
      <Category />
      <Products />
    </>
  )
}