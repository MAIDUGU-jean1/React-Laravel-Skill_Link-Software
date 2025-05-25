import React from 'react'
// import Styles from './style.module'
import Nav from '../Home-page/Nav'
import Styles from '../Contact/style.module.css'
const Contact = () => {
  return (
    <>
      <Nav/>
       <section className={Styles.hero} id="home">
        <p> Have any Suggestions or any sort of question ?</p>
        <h1> Tell us Here !</h1>
       </section>
       <div className={Styles.Contact}>
          <form action="">
            <label for="name">Enter Your Name</label> <br />
            <input type="text" placeholder='EX: Jean Perrin' /> <br />

            <label for="email">Enter Your email</label> <br />
            <input type="email" placeholder='EX: Jean@gmail.com' /> <br />

            <label for="message"> Write Your Message</label> <br />
            <textarea name="message" id="" placeholder='Write Your message Here !'></textarea> <br />
            <button className={Styles.button}> Send Message </button>
          </form>
       </div>
       <section className={Styles.cta}>
        <h2>Ready to Get Started?</h2>
        <p> Your talent should serve you not the other way around </p>
        <a href="/worker/request">
        <button>Request Join as a Worker</button>
        </a>
      </section>
      <footer>
        &copy; 2025 SkillLink. All rights reserved.
      </footer> 
    </>
  )
}

export default Contact
