import { Gutter } from '@/UI/Components/Gutter'
import React from 'react'
import style from "./index.module.scss"

export const Contact_Us = () => {
  return (
    <Gutter className={style.main}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.paragraph}>
            <div className={style.head}>
              <div className={style.title}>
                <h2>GET A QUOTE</h2>
                <h1>They chose perfect the property</h1>
              </div>
              <div className={style.discription}>
                <h3>
                  Real estate is a lucrative ind involves the selling and a
                  reproperties. It encompasses residential
                </h3>
              </div>
              <div className={style.help}>
                <p>Need help?</p>
                <h1>(123)-456789</h1>
              </div>
            </div>
          </div>
          <div className={style.contact}>
            <form className={style.form}>
              <div className={style.personal}>
                <div className={style.name}>
                  <div className={style.lable}>
                    <h3>Your Name</h3>
                  </div>
                  <input type="text" placeholder="Name" required />
                </div>
                <div className={style.phone}>
                  <div className={style.lable}>
                    <h3>Your Phone</h3>
                  </div>
                  <input type="number" placeholder="Phone Number" required />
                </div>
              </div>
              <div className={style.email}>
                <div className={style.lable}>
                  <h3>Your Email</h3>
                </div>
                <input type="text" placeholder="Name" required />
              </div>
              <div className={style.message}>
                <div className={style.lable}>
                  <h3>Your Message</h3>
                </div>
                <textarea placeholder="Message" required></textarea>
              </div>
              <button className={style.submit} type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </Gutter>
  );
}
