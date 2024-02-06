
"use client"

import React from 'react';
import './assets/styles/SearchContainer.css'
import { TbArrowBigDownLine } from "react-icons/tb";
import { RxThickArrowDown } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";

export default function SearchContainer(){

    return(
        <div className='search-outer-container'>
            <div className='logo-container'>
                <span className='bold-high-text'>TextValley</span>
                <span className='light-low-text'>연말 결산_디지털</span>
            </div>
            <div className='search-input-container'>
                <span className='search-icon-container'><FaSearch color='grey' size={14} /></span>
                <input 
                    type='text' 
                    className='input-contents-container' 
                    placeholder='연말결산_디지털연말결산_디지털'
                />
            </div>
            <div className='icon-container'>
                <RxThickArrowDown size={20}/>
                연말결산_디지털
            </div>
        </div>
    )
}