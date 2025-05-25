import React from 'react'
import Nav from '../Home-page/Nav'
import Styles from './profile.module.css'
import profile from '../../assets/Images/jean.JPG'
import Jean from '../../assets/Images/jean1.jpg'
import { FaSearch } from 'react-icons/fa';
const Profile = () => {
  return (
 <>
 <Nav/>
 <div className={Styles.search_bar}>
  <input type="text" className={Styles.search_input} placeholder='Search for Skilled Workers by category.....'/>
  <button className={Styles.search_button}>  <FaSearch /></button>
 </div>
 <h1 className={Styles.main_topic}> Web Development</h1>
<a href="/profile/posts">
<div className={Styles.profileContainer}>
  <div className={Styles.picture}>
    <img src={profile} alt="profile" />
    <h2>Jean Perrin</h2>
  </div>
  <div className={Styles.details}>
  <h3>Web Developper</h3>
        <p><strong>Location: </strong>Bambili</p>
        <p><strong>Skills:</strong> HTML, CSS, JavaScript, React</p>
        <p><strong>Experience</strong>: 5 years</p>
        <p><strong>Rating:</strong> 4.8/5</p>
  </div>
    
  </div></a>
  <h1 className={Styles.main_topic}> Graphic Designer</h1>
<div className={Styles.profileContainer}>
  <div className={Styles.picture}>
    <img src={Jean} alt="profile" />
    <h2>John Doe</h2>
  </div>
  <div className={Styles.details}>
  <h3>Web Developper</h3>
        <p><strong>Location: </strong>New York, USA</p>
        <p><strong>Skills:</strong> HTML, CSS, JavaScript, React</p>
        <p><strong>Experience</strong>: 5 years</p>
        <p><strong>Rating:</strong> 4.8/5</p>
  </div>
    
  </div>
<h1 className={Styles.main_topic}> Electronics </h1>
<div className={Styles.profileContainer}>
  <div className={Styles.picture}>
    <img src={profile} alt="profile" />
    <h2>John Doe</h2>
  </div>
  <div className={Styles.details}>
  <h3>Web Developper</h3>
        <p><strong>Location: </strong>New York, USA</p>
        <p><strong>Skills:</strong> HTML, CSS, JavaScript, React</p>
        <p><strong>Experience</strong>: 5 years</p>
        <p><strong>Rating:</strong> 4.8/5</p>
  </div>
    
  </div>
 
 </>
  )
}

export default Profile
