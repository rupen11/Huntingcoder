import React from 'react'
import Head from 'next/head'
import styles from '../styles/About.module.css'

const about = () => {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <div className={styles.container_about}>
                <h1 className={styles.about_primary_heading}>About Hunting Coder</h1>
                <h2 className={styles.about_heading}>What is hunting coder?</h2>
                <p className={styles.about_para}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In saepe iusto corrupti placeat? Nihil fugit voluptatibus asperiores suscipit doloribus fuga quos error dicta animi ratione non sit rerum praesentium consequuntur repellat, fugiat id iusto voluptates saepe. Accusantium enim sed alias debitis ipsam animi tempore repudiandae, sapiente velit, ullam eum iure aperiam voluptate repellat. Possimus provident qui consequatur fuga corporis aliquam quis. Quas vel corporis, delectus dolorum id deserunt ex iste neque error a eaque excepturi ducimus modi voluptatibus officia nisi deleniti qui asperiores dolor natus illum. Eligendi non ex, ad et eum velit qui laudantium, neque facilis sequi libero reprehenderit nobis magnam, quo cupiditate hic culpa odit? Modi illum, quos minus ipsa doloribus voluptas, odio molestiae nemo, at porro aliquam asperiores dignissimos quo corrupti rem impedit necessitatibus quidem suscipit. Commodi at aliquam quibusdam ipsam voluptas quae libero ea deleniti maiores distinctio. Magni expedita soluta veniam animi est vel numquam dolorum exercitationem modi nihil, totam maxime aut? Itaque laudantium, veniam nostrum provident possimus saepe qui molestias culpa nemo magni animi eaque dolor quam, fugit officiis totam modi ipsam impedit illum commodi doloremque distinctio enim voluptatum. Possimus culpa impedit quas eaque id cumque. Pariatur magnam fugit a blanditiis, aspernatur vel quo saepe sint dignissimos quod repellat laudantium enim veritatis sed quisquam numquam dolores voluptatibus aliquam inventore molestiae ratione eum corrupti. Dolorum temporibus dicta delectus repudiandae id quia esse quasi aut provident officiis praesentium, harum molestiae, illum cum dolores numquam rerum optio? Vel suscipit alias dolorem officiis impedit praesentium earum! Aliquid expedita facilis atque asperiores alias assumenda unde eligendi facere nulla minima voluptates delectus sint similique doloribus, id exercitationem, minus voluptatem animi temporibus corporis possimus quod quaerat. Itaque voluptatibus error in nisi temporibus ipsa reprehenderit est! Aut eligendi dolorum, ut soluta provident nobis distinctio eum exercitationem beatae ab omnis aliquam, nesciunt perspiciatis similique?</p>
                <div className={styles.underline}></div>
                <h2 className={styles.about_heading}>Services Offered</h2>
                <p className={styles.about_para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis et eos ipsum natus consequatur dignissimos rerum maxime quia architecto culpa mollitia facilis nulla eum esse, quas, nesciunt pariatur tempora tempore doloribus ducimus porro. Tempora.</p>
                <p className={styles.about_para}>We offer the following services</p>
                <ul className={styles.about_list}>
                    <li>Service 1</li>
                    <li>Service 2</li>
                    <li>Service 3</li>
                    <li>Service 4</li>
                    <li>Service 5</li>
                    <li>Service 6</li>
                </ul>
                <div className={styles.underline}></div>
                <h2 className={styles.about_heading}>Contact Us</h2>
                <p className={styles.about_para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aspernatur temporibus! Sequi doloremque quasi optio tenetur rerum, nobis, quod, veniam iste tempore placeat fugiat illo obcaecati sint totam similique incidunt odio voluptatibus voluptatum nemo. Quo, recusandae. Doloremque doloribus ipsam atque laudantium quaerat sint, consectetur minima?</p>
            </div>
        </>
    )
}

export default about