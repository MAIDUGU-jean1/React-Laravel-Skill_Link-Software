import React from 'react'
import Styles from '../Home-page/styles.module.css'
import pic from '../../assets/Images/hero-image.jpeg'
import Pic1 from '../../assets/Images/plumber.jpeg'
import styles from './styles.module.css'
import Pic2 from '../../assets/Images/electrician.jpeg'
import Pic3 from '../../assets/Images/cleaner.jpeg'
const Body = () => {
  return (
    <>
    
    <section className={styles.hero} id="home">
      <div style={{display: "flex", gap:'5px'}}>
        <div className={styles.hero_text}>
            <h1>Connect. Work. Grow.</h1>
            <p>SkillLink connects skilled workers to clients looking for trusted services – all in one place.</p>
           <a href="/profile"> <button>Find Skilled Workers</button></a>
           <a href="/worker/request"> <button>Offer My Services</button></a>
          </div>
          <div className={styles.hero_image}>
            <img src={pic} alt="Add picture"/>
          </div>
      </div>
    </section>

       <section className={styles.section} id="how">
        <h2>How It Works</h2>
        <div className={styles.how_it_works}>
          <div className={styles.how_card}>
            <h3>1. Post a Job</h3>
            <p>Go to the Profile section of the site. View Different Proofile 
              of workers and their experience
            </p>
          </div>

          
          <div className={styles.how_card}>
            <h3>2. Get Matched</h3>
            <p>Get List of Skilled workers base on the category of 
             of Work you are looking for and you can choose the best fit.</p>
          </div>
          <div className={styles.how_card}>
            <h3>3. Get It Done</h3>
            <p>Collaborate, complete the job, and leave feedback.</p>
          </div>
        </div>
      </section>


      <section className={styles.section} id="services">
        <h2>Popular Services</h2>
        <div className={styles.services_list}>
          <div className={styles.service_card}>
            <h3>Plumbing</h3>
            <img src={Pic1} alt=""/>
            <p>Find reliable plumbers for all your needs at home or office.</p>
          </div>
          <div className={styles.service_card}>
            <h3>Electricians</h3>
            <img src={Pic2} alt=""/>
            <p>Qualified electricians to handle repairs, installations and upgrades.</p>
          </div>
          <div className={styles.service_card}>
            <h3>Cleaning</h3>
            <img src={Pic3} alt=""/>
            <p>Professional cleaners for residential and commercial properties.</p>
          </div>
        </div>
      </section>
      <section className={styles.section} id="about">
        <h2>About SkillLink</h2>
        <p className={styles.About_para}>
          SkillLink was created to empower local talent and make service hiring easier, safer, and faster. Whether you're a skilled worker or someone in need of one, we bridge that gap with transparency, convenience, and trust.
        </p>
      </section>
    
      <section className={Styles.cta}>
        <h2>Ready to Get Started?</h2>
        <p> Your talent should serve you not the other way around </p>
       <a href="/worker/request"> <button>Request Join as a Worker</button></a>
      </section>
      <footer>
        &copy; 2025 SkillLink. All rights reserved.
      </footer> 
    </>
  )
}

export default Body
