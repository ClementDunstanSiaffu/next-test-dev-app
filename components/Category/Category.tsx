
import Image from 'next/image';
import React from 'react';
import './assets/styles/Category.css'

const getCategory = async()=>{
    try{
        const response = await fetch('https://api.testvalley.kr/main-shortcut/all');
        const category = await response.json();
        return category || []
    }catch(err){
        throw (err)
    }   
}

export default async function Category(){

    const category = await getCategory();
      
    return(
        <div className='category-outer-container'>
            <div className='category-contents-container'>
                {
                    category.map((category,c)=>{
                        return(
                            <div className='each-category-container' key={category.mainShortcutId}>
                                <Image  src={category.imageUrl} width={40} height={45} alt='category-img'/>
                                <div>{category.title}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}



