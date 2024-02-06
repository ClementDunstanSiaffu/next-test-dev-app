
"use client"


import React,{useState} from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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

export default function Advertsiment (){

    const [currentIndex,setCurrentIndex] = useState(0);
    const [advertsiments,setAdvertisment] = useState<any>([]);
    const [rendered,setRendered] = useState<boolean>(false);

    React.useEffect(()=>{
        const fetchAdvertsiment = async ()=>{
            const ads =  await getAdvertsiment();
            setAdvertisment(ads);
            setRendered(true);
        }
        fetchAdvertsiment();
    },[])

    // let advertsiments = [];
    // if (!advertsiments.length ){
    //     advertsiments =  await getAdvertsiment();
    // }

    const onSelect = (index: number, item: React.ReactNode)=>{
        console.log("on select is called");
        setCurrentIndex(index)
    }

    console.log(advertsiments,"check advertsiment")

    return(
        <div>
            {
                rendered && advertsiments?.length ?
                <Carousel
                selectedItem={currentIndex}
                onClickItem={(index,item)=>onSelect(index,item)}
                showArrows={false}
                showStatus={false}
                showThumbs={false}
            >
                {advertsiments.map((advert,a) => (
                    <div key={advert.mainBannerId}>
                        <img src={advert.pcImageUrl} alt={`Image ${a + 1}`} />
                    </div>
                ))}
            </Carousel>:null

            }
        
        </div>
    )
}