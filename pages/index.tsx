import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Progressbar from '../components/Progressbar'
import Slider from '../components/Slider'
import Switch from '../components/Switch'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  
  const [isToggled, setIsToggled] = useState(false);
  const [rangeValue, setRangeValue] = useState(0);
  const progressValue = 70;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <Switch isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />
        </div>
        <div>
          <Slider value={rangeValue} onChange={(e: any) => setRangeValue(e.target.value)} />
        </div>
        <div>
          <Progressbar value={progressValue} />
        </div>
      </main>
    </div>
  )
}

export default Home
