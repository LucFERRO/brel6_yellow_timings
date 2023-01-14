import ChangeTimer from '../components/ChangeTimer'
import Countdown from '../components/Countdown'
import styles from '../styles/Home.module.scss'
import { useState, useEffect, useRef } from 'react'

export default function Home() {

    const [globalCountdown, setGlobalCountdown] = useState(1200)
    const [change, setChange] = useState(false)

    return (
        <div className={styles.globalContainer}>
            <div className={styles.container}>
                Brelshaza Gate6 Tool
            </div>

            {/* Change timer broken :c
            <ChangeTimer setGlobalCountdown={setGlobalCountdown} change={change} setChange={setChange}/> */}

            <Countdown seconds={globalCountdown} />
        </div>
    )
}
