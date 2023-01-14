import { useState, useEffect, useRef } from 'react'
import styles from '../styles/Countdown.module.scss'

const formatTime = (time) => {
    let minutes = Math.floor(time / 60)
    let seconds = Math.floor(time - minutes * 60)

    if (minutes < 10) minutes = `0${minutes}`
    if (seconds < 10) seconds = `0${seconds}`

    return `${minutes}:${seconds}`
}

export default function Countdown({ seconds }) {
    const [countdown, setCountdown] = useState(seconds)
    const [yellowCount, setYellowCount] = useState(0)
    const [yellowCountdown, setYellowCountdown] = useState(null)
    const [tileSpawn, setTileSpawn] = useState(null)
    const [blueCountdown, setBlueCountdown] = useState(null)
    const timerId = useRef()

    const [minutes, setMinutes] = useState(20)
    const [secondz, setSeconds] = useState(0)


    useEffect(() => {
        timerId.current = setInterval(() => {
            setCountdown(prev => prev - 1)
            setYellowCountdown(prev => prev - 1)
            setBlueCountdown(prev => prev - 1)
        }, 1000)
        return () => clearInterval(timerId.current)
    }, [])

    useEffect(() => {
        if (countdown <= 0) {
            clearInterval(timerId.current)
            setCountdown('BERSERK')
        }
        if (yellowCountdown <= 0) setYellowCountdown(null)
        if (blueCountdown <= 0) setBlueCountdown(60)
    }, [countdown])

    const yellowMeteor = () => {
        setTileSpawn(countdown - 100)
        setYellowCountdown(100)
        setYellowCount(prev => prev + 1)
    }

    const firstMech = () => {
        if (yellowCount == 0) {
            setBlueCountdown(95)
            setTileSpawn(countdown - 135)
            setYellowCountdown(135)
            setYellowCount(prev => prev + 1)
        }
    }

    return (
        <>

            <div className={styles.countdown}>

                <div>Timer: {typeof countdown != 'string' ? formatTime(countdown) : countdown}</div>
                <div>Tiles respawn: {yellowCount >= 1 ? `${formatTime(tileSpawn)}, in ${formatTime(yellowCountdown)}` : 'X'}</div>
                <div>Next blues in: {yellowCount >= 1 ? formatTime(blueCountdown) : 'X'}</div>
                <button onClick={() => yellowMeteor()}>YELLOW</button>
            </div>
            <div className={styles.change_container}>
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
                        value={secondz}
                        onChange={e => setSeconds(e.target.value)}
                    />
                </label>
                <button className={styles.change_button} onClick={() => {
                    setCountdown(parseInt(minutes) * 60 + parseInt(secondz))
                    console.log('Changed!')
                }} >Set timer</button>
            </div>



        </>
    )
}
