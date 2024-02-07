
import React from "react";
import './assets/styles/Advertsiment.css'

const Skeleton = ()=>{

    return (
        <>
            {
                [...Array(3)].map((item,i)=>{
                    return(
                        <div className="box-skeleton" style={{marginRight:20}}>
                            <div className="box-skeleton-inner"></div>
                      </div>
                    )
                })

            }
        </>
       
      );
}

export default Skeleton;