import { useState, useEffect, useRef } from 'react'

export default function ChangeTimer({setGlobalCountdown, change, setChange}) {

    const [minutes, setMinutes] = useState(20)
    const [seconds, setSeconds] = useState(0)

    return (
        <div>
            <label>
                Minutes:
                <input
                    type="number"
                    value={minutes}
                    onChange={e => setMinutes(e.target.value)}
                />
            </label>
            <br />
            <label>
                Seconds:
                <input
                    type="number"
                    value={seconds}
                    onChange={e => setSeconds(e.target.value)}
                />
            </label>
            <button onClick={() => {
                setGlobalCountdown(parseInt(minutes)*60+parseInt(seconds))
                setChange(!change)
                console.log('Changed!')
            }} >Set timer</button>
        </div>
    )
}
