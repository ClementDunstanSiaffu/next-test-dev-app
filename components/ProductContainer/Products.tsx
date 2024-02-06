// "use client"

import React from 'react';
import './assets/styles/Products.css';
import Image from 'next/image';
import chevronRight from './assets/icons/chevron-right.png';
import chevronLeft from './assets/icons/chevron-left.png';
import star from './assets/icons/star.png'

type ProductContentsProps = {
    products?:any,
    title?:string,
    description?:string,
    id:string|number
}

const ProductContainer = ({products,title,description,id}:ProductContentsProps)=>{
    return(
        <div className = "product-content-container" key={id}>
            <div className = "product-contents-description-side">
                <div className = "description-container">
                    <div className = "description-title">{title}</div>
                    <div className = "paragraph">{description}</div>
                </div>
                <div className='icon-container'>
                    <Image src={chevronLeft} width={10} height={10} alt='icon-left' />
                    <Image src={chevronRight}  width={10} height={10} alt='icon-right'/>    
                </div>
            </div>
            <div className = "product-contents-product-side">
                    {
                        products?.length ?
                        <div className = "products-contents-products-container">
                            {
                                products.map((product,i)=>{
                                    return(
                                        <div className='each-product-container' key={`${i}-image`}>
                                            <Image 
                                                src={product.uri} 
                                                width = {200} 
                                                height={180} 
                                                alt='product' 
                                            />
                                            <button className='buy-btn'>디지털</button>
                                            <div className='product-name'>{title} 연말 결산_디지털</div>
                                            <div>
                                                <span style={{color:"orange"}}>2%</span> 130000元
                                            </div>
                                            <div>
                                                <Image src={star} width={16} height={16} alt='star' />5
                                            </div>
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
                    return <React.Fragment key = {`${product.id}-${p}`}>
                             <ProductContainer 
                                title={product.title} 
                                description={product.description} 
                                products={product.media}
                                id={product.id}
                            />
                    </React.Fragment>
                   
                })
        }
    </div>
   )

}

