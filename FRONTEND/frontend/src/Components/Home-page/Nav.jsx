import React from 'react'
import styles from './styles.module.css'
import logo from '../../assets/Images/logo.jpeg'
const Nav = () => {
  const toggleMenu = () =>{
    const navList = document.getElementById("nav_list");
    navList.classList.toggle("show");
  }
  return (
    <div>
    <header>
      <div className={styles.logo}><a href="/"> <img src={logo} alt="" /> SkillLink</a></div>
      <nav>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul id="nav_list">
          <li><a href="/">Home</a></li>
          <li><a href="#how">How It Works</a></li>
          <li><a href="/profile">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className={styles.auth_buttons}>
        <a href="/worker/login"><button>Login</button></a>
        <a href="/worker/request"><button>Register</button></a>
      </div>
    </header>
    </div>
  )
}

export default Nav
