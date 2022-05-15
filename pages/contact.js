import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Contact.module.css'

const Contact = () => {
    const [data, setData] = useState({ name: "", phone: "", email: "", concern: "" });
    const handleData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const submitData = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch('http://localhost:3000/api/postcontact', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            if (res.status === 200) {
                console.log("Thank you for contact with us");
            }
            else console.log("Something Went Wrong");
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <div className={styles.container_contact}>
                <div className={styles.container_left}>
                    <h1 className={styles.container_left_heading}>Contact Us</h1>
                    <p className={styles.container_left_para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ullam quae eum corporis. Delectus corporis quibusdam ipsa magni illo est veniam quia dolorem repudiandae aperiam soluta, expedita suscipit culpa excepturi.</p>
                </div>
                <div className={styles.container_right}>
                    <form onSubmit={submitData}>
                        <div className={styles.input_container}>
                            <div className={styles.input_inner_container}>
                                <label htmlFor="name" className={styles.mylabel}>Name</label>
                                <input type="text" name="name" id='name' value={data.name} onChange={handleData} className={styles.myinput} />
                            </div>
                            <div className={styles.input_inner_container}>
                                <label htmlFor="phone" className={styles.mylabel}>Phone</label>
                                <input type="text" name="phone" id='phone' value={data.phone} onChange={handleData} className={styles.myinput} />
                            </div>
                        </div>
                        <div className={styles.input_container}>
                            <label htmlFor="email" className={styles.mylabel}>Email</label>
                            <input type="email" name="email" id='email' value={data.email} onChange={handleData} className={styles.myinput} />
                        </div>
                        <div className={styles.input_container}>
                            <label htmlFor="message" className={styles.mylabel}>Concern</label>
                            <textarea name="concern" id="message" value={data.concern} onChange={handleData} className={styles.myinput} />
                        </div>
                        <button className={styles.btnsubmit}>send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact