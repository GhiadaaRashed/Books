import { useEffect, useState } from 'react'
import './Counter.css'
const Counter = ({ theme }) => {
    const [counter, setCounter] = useState(1)
    const [themeco, setthemeco] = useState(false)
    function countup() {
        setCounter(prev => prev + 1)
    }
    function countdown() {
        if (counter == 1) {
            setCounter(1)
        }
        else {
            setCounter(prev => prev - 1)
        }
    }
    useEffect(() => {
        if (theme == 'light') {
            setthemeco(true)
        }
        else {
            setthemeco(false)
        }
    }, [theme])
    return (
        <div className='counter'>
            <div className="bookcount">
                {themeco ?
                    <svg onClick={countdown} style={{ width: '30px', height: '27px' }} width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5363 11.6852H7.34912" stroke="#0F0F0F" stroke-linecap="round" />
                        <path d="M11.4427 22.0658C17.0947 22.0658 21.6766 17.4182 21.6766 11.6852C21.6766 5.95213 17.0947 1.30457 11.4427 1.30457C5.79063 1.30457 1.20874 5.95213 1.20874 11.6852C1.20874 17.4182 5.79063 22.0658 11.4427 22.0658Z" stroke="#937DC2" />
                    </svg>
                    : <svg onClick={countdown} style={{ width: '30px', height: '27px' }} width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5363 11.6852H7.34912" stroke="white" stroke-linecap="round" />
                        <path d="M11.4427 22.0658C17.0947 22.0658 21.6766 17.4182 21.6766 11.6852C21.6766 5.95213 17.0947 1.30457 11.4427 1.30457C5.79063 1.30457 1.20874 5.95213 1.20874 11.6852C1.20874 17.4182 5.79063 22.0658 11.4427 22.0658Z" stroke="#937DC2" />
                    </svg>
                }
                <span style={{ fontSize: '20px' }}>{counter}</span>
                {themeco ?
                    <svg onClick={countup} style={{ width: '30px', height: '30px' }} width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5655 8.53296V12.6852M12.5655 12.6852V16.8375M12.5655 12.6852H16.6591M12.5655 12.6852H8.47192" stroke="#0F0F0F" stroke-linecap="round" />
                        <path d="M12.5655 23.0658C18.2175 23.0658 22.7994 18.4182 22.7994 12.6852C22.7994 6.95213 18.2175 2.30457 12.5655 2.30457C6.91343 2.30457 2.33154 6.95213 2.33154 12.6852C2.33154 18.4182 6.91343 23.0658 12.5655 23.0658Z" stroke="#937DC2" />
                    </svg>
                    : <svg onClick={countup} style={{ width: '30px', height: '30px' }} width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5656 8.53296V12.6852M12.5656 12.6852V16.8375M12.5656 12.6852H16.6592M12.5656 12.6852H8.47205" stroke="white" stroke-linecap="round" />
                        <path d="M12.5656 23.0658C18.2177 23.0658 22.7995 18.4182 22.7995 12.6852C22.7995 6.95213 18.2177 2.30457 12.5656 2.30457C6.91356 2.30457 2.33167 6.95213 2.33167 12.6852C2.33167 18.4182 6.91356 23.0658 12.5656 23.0658Z" stroke="#937DC2" />
                    </svg>
                }
            </div>
        </div>
    )
}

export default Counter