
"use client"

import React from 'react';
import Products from '../components/ProductContainer/Products';
import Category from '../components/Category/Category';
import Advertsiment from '../components/Advertsiment/Advertsiment';

export default function Page() {  
  return(
    <>
        <Advertsiment />
        <Category />
        <Products />
    </>
  )
}