import { useEffect, useCallback, useState } from "react";
import CountDown from "./count-down";
import SoldOut from "./sold-out";

function Timer (props) {
    let {date} = props
    let difference = +date - +new Date();
    
    /**
     * claculate the data's sale from the now date
     * @returns {Object || false}
     */
    const calculateTimeLeft = useCallback(() => {
        if (difference > 0) {
            let timeLeft = {
              days: Math.floor(difference / (1000 * 60 * 60 * 24)),
              hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
              minutes: Math.floor((difference / 1000 / 60) % 60),
              seconds: Math.floor((difference / 1000) % 60)
            };
            return timeLeft
        }
        return false
    }, [difference])
    
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        // interval setTimeLeft by new date
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000);

        // check is time left to clearTimeout
        if(timeLeft === false) {
            clearTimeout(timer)
        }
        //  unmounted component
        return () => clearTimeout(timer)
    },[timeLeft , calculateTimeLeft])

    return timeLeft ? <CountDown date={timeLeft} /> : <SoldOut />
}

export default Timer