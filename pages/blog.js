import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/BlogPost.module.css'
import * as fs from 'fs';
import InfiniteScroll from 'react-infinite-scroll-component';

const Blog = (props) => {
    const [blogs, setBlogs] = useState(props.allBlogs);
    const [count, setCount] = useState(2);

    const fetchData = async () => {
        let res = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`);
        setCount(count + 2);
        let json = await res.json();
        console.log(json);
        setBlogs(json);
    }

    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <div className={styles.container_blog}>
                <main className={styles.main}>
                    <InfiniteScroll
                        dataLength={blogs.length}
                        next={fetchData}
                        hasMore={props.allCount !== blogs.length}
                        loader={<h4>Loading...</h4>}
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b>No More Blogs</b>
                            </p>
                        }
                    >
                        <div className={styles.blog}>
                            {
                                blogs.map((data, index) => {
                                    return <div className={styles.blogItem} key={index}>
                                        <Link href={`/blogpost/${data.slug}`}>
                                            <h3>{data.title}</h3>
                                        </Link>
                                        <p>{data.metadesc.substr(0, 140)}...</p>
                                    </div>
                                })
                            }
                        </div>
                    </InfiniteScroll>
                </main>
            </div>
        </>
    )
}

// Server Side Rendering
// export async function getServerSideProps(context) {
//     let data = await fetch('http://localhost:3000/api/blogs');
//     let allBlogs = await data.json();
//     return {
//         props: { allBlogs } //will be passed to the page componet as props
//     }
// }

// Static site generation
// No required - blogs.js
export async function getStaticProps(context) {
    // read blogdata folder
    let data = await fs.promises.readdir('blogdata');
    let myfile;
    let allBlogs = [];

    // Read files one by one and collect all files data in array
    for (let index = 0; index < 2; index++) {
        const item = data[index];
        myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8');
        allBlogs.push(JSON.parse(myfile));
    }
    return {
        props: { allBlogs, allCount: data.length }
    }
}

export default Blog