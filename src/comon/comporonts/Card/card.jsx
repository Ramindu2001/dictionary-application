import { useState,useContext,useEffect } from 'react';
import './stlye.css'
import "@fontsource/pacifico";



export default function Card({search,setData}){
    

    return(
        <div>
            <div className='cardback'>

                <h1 className='fontDis'>Free Dictionary</h1>

                    <div>
                    <input type="text" className='inputText' placeholder='Search..' onChange={(e)=>setData(e.target.value)} />

                    <button className='search' onClick={search}>Search</button>

                    </div>

            
            </div>
            
        </div>
    )

}