import React, { useState } from 'react'
import Nav  from '../Home-page/Nav'
import Styles from '../Login/Style.module.css'
import axios from 'axios';
import { replace, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    function showpassword(){
        let togglePassword = document.getElementById('togglePassword');
        let passwordInput = document.getElementById('password');
  
        if (passwordInput.type == "password"){
           passwordInput.type = "text";
           togglePassword.textContent="🙈";
        }
        else{
           passwordInput.type = "password";
           togglePassword.textContent="👁️";
        }
    }

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    type: ''
  });

  const handleInputChange = (e) => {
    const {name, value} = e.target;
      setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const {email, password, type} = formData;
    if (email && password && type) {
      

    if (!email || !password || !type) {
      console.log('Please fill in all fields');
    return;
  }

  console.log(`${type === 'worker' ? 'Worker' : 'Admin'} login`);

    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        type,
        password
      });

      const token = response.data.token;

      if (token) {
        localStorage.setItem('token', token);
        console.log('Token stored in local storage:', token);

        // You can use different routes for different roles
        if (type === 'admin') {
          navigate('/admin', { replace: true });
        } else if (type === 'worker') {
          navigate('/worker', { replace: true });
        }
      }

      console.log('Login successful:', response.data);
      } catch (error) {
        console.error('Error during login:', error);
      }
    }
  }
  return (
   <>
    <Nav/>
    <section className={Styles.hero} id="home">
      <p> Login Here using the detail given by the Admin !!!</p>
        <h1> Join Here </h1>
    </section>
    <div className={Styles.skilllinkLogin}>
  <h2>Login to SkillLink</h2>
  <form id="loginForm">
    <div className={Styles.inputGroup}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email"  onChange={handleInputChange} />
    </div>
        <div className={Styles.inputGroup}>
      <label htmlFor="type">User type</label>
      <select name="type" id="type"  onChange={handleInputChange}>
        <option value=""> select type </option>
        <option value="worker">Worker</option>
        <option value="admin">Admin</option>
      </select>
    </div>

    <div className={Styles.inputGroup}>
      <label htmlFor="password">Password</label>
      <div className={Styles.passwordWrapper}>
        <input type="password" id="password" onChange={handleInputChange} name="password" />
        <span className={Styles.eyeToggle} onClick={showpassword}>👁️</span>
      </div>
    </div>

    <div className={Styles.rememberSection}>
      <label>
        <input type="checkbox" name="remember" />
        Remember Me
      </label>
    </div>

    <button type="submit" onClick={handleSubmit} className={Styles.loginButton}>Login</button>
  </form>

  <p className={Styles.registerPrompt}>
    Don’t have an account? <a href="/worker/request">Request here</a>
  </p>

</div>
<section className={Styles.cta}>
        <h2>Ready to Get Started?</h2>
        <p> Your talent should serve you not the other way around </p>
        <button>Request Join as a Worker</button>
  </section>
<footer>
        &copy; 2025 SkillLink. All rights reserved.
  </footer> 

   </>
  )
}

export default Login
