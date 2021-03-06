import Head from 'next/head'
// import Image from 'next/image'
// import Script from 'next/script'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <style jsx>
        {`
        
        `}
      </style>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Lazy loading for third party script */}
      {/* <Script src='/sc.js' strategy='lazyOnload'></Script> */}

      <main className={styles.main}>
        <h1 className={styles.title}>
          &lt;Hunting <a href="https://nextjs.org">Coder</a> /&gt;
        </h1>

        <div className={styles.imgwrapper}>
          <img src='/homeimg.jpg' width={509} height={339} className={styles.myImg} alt="Hunting Coder" />
        </div>

        <p className={styles.description}>
          A blog for hunting coder by the hunting coder
        </p>

        <h2>Popular Blogs</h2>
        <div className={`${styles.blog} ${styles.dummy}`}>
          <div className={styles.blogItem}>
            <Link href="/blog">
              <h3 className={styles.blogItem_heading}>How to learn JavaScript in 2022?</h3>
            </Link>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
          <div className={styles.blogItem}>
            <Link href="/blog">
              <h3 className={styles.blogItem_heading}>How to learn JavaScript in 2022?</h3>
            </Link>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
          <div className={styles.blogItem}>
            <Link href="/blog">
              <h3 className={styles.blogItem_heading}>How to learn JavaScript in 2022?</h3>
            </Link>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        Powered by RJ
      </footer>
    </div>
  )
}
