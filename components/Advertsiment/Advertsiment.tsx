
"use client"


import React,{useState} from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './assets/styles/Advertsiment.css';
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import Image from 'next/image'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const getAdvertsiment = async ()=>{

    try{
        const response = await fetch('https://api.testvalley.kr/main-banner/all');
        const advertsiments = await response.json();
        console.log(advertsiments,"check advertment")
        return advertsiments ||[]
    }
    catch(err){
        return []
    }   
   
}

export default  function Advertsiment (){

    const [currentIndex,setCurrentIndex] = useState(0);
    const [advertsiments,setAdvertisment] = useState<any>([]);

    React.useEffect(()=>{
        const fetchAdvertsiment = async ()=>{
            const ads =  await getAdvertsiment();
            setAdvertisment(ads);
        }
        if (!advertsiments?.length)fetchAdvertsiment();
    },[advertsiments])

    const increment = ()=>{
        const newIndex = currentIndex + 1 <  advertsiments.length ? currentIndex + 1 : currentIndex 
        setCurrentIndex(newIndex);
    }

    const decremement = ()=>{
        const newIndex = currentIndex  > 0 ? currentIndex - 1 : currentIndex;
        setCurrentIndex(newIndex);
    }

    const items = advertsiments.map((advert,a) => (
        <div key={advert.mainBannerId}>
            <img src={advert.pcImageUrl} alt={`Image ${a + 1}`} />
        </div>
    ))

    return(
        <div className="scroll-container">
            {
                advertsiments?.length ?
                 <>
                       {
                currentIndex > 0 &&
                <div style={{width:"25%",contain:"content",marginRight:20}}>
                    <img src= {advertsiments[currentIndex-1].pcImageUrl} style={{height:200}}/>
                </div>
            }
            <div style={{width:currentIndex <= 0 ||  currentIndex + 1 >= advertsiments.length ? "70%":"40%",contain:"content"}}>
                <img src= {advertsiments[currentIndex].pcImageUrl} style={{width:"100%",height:200}}/>
                {
                   currentIndex > 0 && 
                   <button className="left-btn-container" onClick={decremement}>
                        <FaChevronLeft color="white" size={20}/>
                    </button> 
                }
                {
                    currentIndex + 1 < advertsiments.length && 
                    <button className="right-btn-container" onClick={increment}>
                        <FaChevronRight color="white" size={20}/>
                    </button> 
                }
            </div>
            {
                currentIndex + 1 < advertsiments.length &&
                <div style={{width:"25%",contain:"content",marginLeft:20}}>
                    <img src= {advertsiments[currentIndex+1].pcImageUrl} style={{height:200}}/>
                </div>
            }
                 </>:null
            }
        </div>
    )
}