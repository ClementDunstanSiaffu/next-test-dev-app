"use client"

import React from 'react';
import './assets/styles/Products.css';
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Image from 'next/image';

type ProductContentsProps = {
    products?:any,
    title?:string,
    description?:string,
    key:string|number
}

const ProductContainer = ({products,title,description,key}:ProductContentsProps)=>{
    return(
        <div className = "product-content-container" key={key}>
            <div className = "product-contents-description-side">
                <div className = "description-container">
                    <div className = "description-title">{title}</div>
                    <div className = "paragraph">{description}</div>
                </div>
                <div className='icon-container'>
                    {/* <Image src={ChevronLeft} width={20} height={20} alt='chevron-left' />
                    <Image src={ChevronRight} width={20} height={20} alt='chevron-right' /> */}
                    <FaChevronLeft  color='grey'/>
                    <FaChevronRight  color='grey'/>    
                </div>
            </div>
            <div className = "product-contents-product-side">
                    {
                        products?.length ?
                        <div className = "products-contents-products-container">
                            {
                                products.map((product,i)=>{
                                    return(
                                        <div className='each-product-container'>
                                            <Image 
                                                src={product.uri} 
                                                width = {200} 
                                                height={180} 
                                                alt='product' 
                                            />
                                            <div className='product-name'>{title} 연말 결산_디지털</div>
                                            <div>
                                                <span style={{color:"orange"}}>2%</span> 130000元
                                            </div>
                                            <div><FaStar color='grey'/> 5</div>
                                        </div>
                                    )
                                })
                            }
                        </div>:null
                    }
            </div>
        </div>
    )
}

const getProducts = async()=>{
    try{
        const response = await fetch('https://api.testvalley.kr/collections?prearrangedDiscount');
        const products = await response.json();
        if (products?.items?.length){
            return products
        }
        return []
    }catch(err){
        throw (err)
    }

   
}

export default async function Products(){

   const products = await getProducts();

   return(
    <div className='product-container'>
        {
                products.items.map((product,p)=>{
                    return <ProductContainer 
                                title={product.title} 
                                description={product.description} 
                                products={product.media}
                                key={product.id}
                            />
                })
        }
    </div>
   )

}

