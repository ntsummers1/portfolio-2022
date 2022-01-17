import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nicholas Summers - Resume</title>
        <meta name="description" content="Nicholas Summers' Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>My Resume</h1>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
