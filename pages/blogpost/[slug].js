import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../../styles/BlogPost.module.css'
import * as fs from 'fs';

const Slug = (props) => {
    function createMarkup(c) {
        return { __html: c };
    }

    const [blog, setBlog] = useState(props.myBlog);

    return (
        <>
            <Head>
                <title>Hunting Coder - Blog</title>
            </Head>
            <style jsx>
                {`
                .content{
                    font-weight: 500;
                    line-height: 2rem;
                    font-size: 15px;
                    word-spacing: 5px;
                }

                .authorname{
                    margin: 20px 0 0 0;
                    color: #b3b3b3;
                    font-weight: bold;
                }
                `}
            </style>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1>Title of the page {blog && blog.title}</h1>

                    {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)} className='content'></div>}

                    <div className='authorname'>Author By {blog && blog.author}</div>
                </main>
            </div>
        </>
    )
}

// Server Side Rendering
// export async function getServerSideProps(context) {
//     const { slug } = context.query;
//     let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
//     let myBlog = await data.json();
//     return {
//         props: { myBlog }
//     }
// }

// Static site generation
export async function getStaticPaths() {
    return {
        paths: [{ params: { slug: 'how-to-learn-javascript' } },
        { params: { slug: 'how-to-learn-nextjs' } },
        { params: { slug: 'how-to-learn-reactjs' } },],
        fallback: true //false or 'blocking'
    }
}

export async function getStaticProps(context) {
    let myBlog = await fs.promises.readFile(`blogdata/${context.params.slug}.json`, 'utf-8');
    return {
        props: { myBlog: JSON.parse(myBlog) } //will be passed to the page component as perops
    }
}

export default Slug