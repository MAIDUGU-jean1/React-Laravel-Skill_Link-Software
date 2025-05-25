
import React, { useEffect, useState } from 'react'
import Styles from '../Registration/style.module.css'
import Nav from '../Home-page/Nav'
import axios from 'axios';
const Register = () => {

  function showpassword(){
    let togglePassword = document.getElementById('togglePassword');
    let passwordInput = document.getElementById('password');
    let confirmpasswordInput = document.getElementById('confirm_password');
    if (passwordInput.type == "password" && confirmpasswordInput.type == 'password'){
       passwordInput.type = "text";
       confirmpasswordInput.type = "text";
       togglePassword.textContent="🙈";
    }
    else{
       passwordInput.type = "password";
       confirmpasswordInput.type = "password";
       togglePassword.textContent="👁️";
    }
}

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    // category_id: null,
    experience: '',
    location: '',
    bio: '',
    profilePicture: null
  });
  const [categories, setCategories] = useState([]);
  const [selectedCategoryID, setSelectCategoryID] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profilePicture') {
      setFormData({ 
        ...formData, profilePicture: files[0] 
      });
    } else {
      setFormData({
         ...formData, [name]: value
         });
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    
    await axios.post('http://localhost:8000/api/worker/request', {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      category_id: selectedCategoryID,
      experience: formData.experience,
      location: formData.location,
      bio: formData.bio,
      profilePicture: formData.profilePicture
      }, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
    }).then((response) => {
      console.log(response.data);
      setSuccess('Request have been sent successfully check your email for confirmation.');
    }).catch((error) => {
      console.error('Error:', error);
      setError('Request failed. Please try again.');
    });
    setFormData({
      name: '',
      email: '',
      password: '',
      phone: '',
      category_id: '',
      experience: '',
      location: '',
      bio: '',
      profilePicture: null
    });
     setSelectCategoryID('');
  };
    const fetchData = async() => {
      try {
        
        await axios.get('http://localhost:8000/api/categories/all', {})
        .then((response)=>{
            console.log("Categories: ", response.data);
            setCategories(response.data);
            
        })
      } catch (error) {
        console.error('Error fetching data', error)
      }
    }
  
    useEffect(()=>{
      fetchData();
    }, [])

    // pop up message
 
  // use effect for the display of the message after a certain delay 
    useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess(null);
    }, 3000);

    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
  <>
  <Nav/>
  <section className={Styles.hero} id="home">
         {success && (
        <div
          className={Styles.success}
        >
          {success}
        </div>
      )}
        <p>To be a member, Request Here  then wait for an email approval </p>
          <h1> Request Here!!! </h1>
      </section>
      <div className={Styles.skilllinkLogin}></div>
  <div className={Styles.workerRegisterContainer}>
  <h2>Request to Join as Worker</h2>

  <form id="registerForm" onSubmit={handleSubmit}>
    <div className={Styles.inputGroup}>
      <label htmlFor="fullname">Full Name</label>
      <input type="text" id="name" name="name" onChange={handleChange} required />
    </div>
    
    <div className={Styles.inputGroup}>
  <label htmlFor="category">Category</label>
      <select name="category"  id="" value={selectedCategoryID} onChange={(e)=>{setSelectCategoryID(e.target.value)}} >
        <option value="">Select Category</option>
        {categories.map((category) => (
        <option key={category.id} value={category.id}>{category.name}</option>
          ))}
      </select>
</div>
    <div className={Styles.inputGroup}>
      <label htmlFor="email">Email Address</label>
      <input type="email" id="email" name="email" onChange={handleChange} required />
    </div>

    <div className={Styles.inputGroup}>
      <label htmlFor="phone">Telephone Number</label>
      <input type="tel" id="phone" name="phone" onChange={handleChange} required />
    </div>
    <div className={Styles.inputGroup}>
      <label htmlFor="location"> Location </label>
      <input type="text" id="location" name="location" onChange={handleChange} required />
    </div>
    <div className={Styles.inputGroup}>
      <label htmlFor="experience"> Experience </label>
      <input type="number" id="experience" min={1} name="experience" onChange={handleChange} required />
    </div>
    <div className={Styles.inputGroup}>
      <label>Profile Picture</label>
      <input type="file" name="profilePicture" accept="image/*" onChange={handleChange} />
    </div>
     <label>Bio</label>
        <textarea name="bio" value={formData.bio} onChange={handleChange} required />
    <div className={Styles.inputGroup}>
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" onChange={handleChange} required />
      <span className={Styles.eyeToggle} onClick={showpassword}>👁️</span>
      
    </div>
    
    <div className={Styles.inputGroup}>
      <label htmlFor="Confirm Password">Confirm Password</label>
      <input type="password" id="confirm_password" name="password_confirmation" onChange={handleChange} required />
      <span className={Styles.eyeToggle} onClick={showpassword}>👁️</span>
      
    </div>

    <button type="submit" className={Styles.submitButton}>Send Message</button>
  </form>

  <p className={Styles.loginRedirect}>
    Already a Worker? <a href="/worker/login">Login</a>
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

export default Register
