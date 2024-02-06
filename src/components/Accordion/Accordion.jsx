import '../Accordion/Accordion.css'

import { useState } from "react";





export default function Accordion(props){
    const [clown, setClown] = useState('accord-text')

    function clickHandler(){

    

        if(clown === 'accord-text'){
            setClown('accord-text-active')
        }
        else{
            setClown('accord-text')
        }
    }
    
    return(
        <>
        <div onClick = {clickHandler} className="accord-title">{props.title}</div>
        <div className={clown}>{props.text}</div>
        </>
    )

}