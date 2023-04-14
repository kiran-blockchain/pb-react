import { useEffect, useState,useRef } from "react"

export const Timer = () => {
    const [currentTime, setCurrentTime] = useState({
        time: new Date().toLocaleTimeString()
    });
    const previousValue = useRef(0);
    console.log(previousValue);
    useEffect(()=>{
        previousValue.current = previousValue.current+1;
        // setInterval(()=>{
        //     const newTime = new Date().toLocaleTimeString();
            
        //     setCurrentTime({...currentTime,time:newTime})
        // },3000)
    })
    return (
        <div>
            <label>Current : {currentTime.time}</label>
            <label>Previous Input Value : {previousValue.current}</label>
           
        </div>
    )
}