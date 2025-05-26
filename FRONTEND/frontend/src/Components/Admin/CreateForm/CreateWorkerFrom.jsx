import React, { useEffect, useState } from 'react';
import styles from '../CreateForm/create.module.css';
import Side_Bar from '../Dashboard/Side_Bar';
import {useNavigate } from 'react-router-dom';

import axios from 'axios';
function CreateWorkerForm() {
  const [formData, setFormData] = useState({
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
  const [categories, setCategories] = useState([]);
  // const [selectedCategoryID, setSelectCategoryID] = useState('');
  const [error , setError] = useState('');

  // const [error, setError] = useState('');
    const navigate = useNavigate();
    const [data, setData] = useState(null);
  


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
    
      const token = localStorage.getItem('token');
    if (!token) {
      console.error("No token found. User might not be logged in.");
      return;
    }
    await axios.post('http://localhost:8000/api/worker/create', {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      category_id: formData.category_id,
      experience: formData.experience,
      location: formData.location,
      bio: formData.bio,
      profilePicture: formData.profilePicture
      }, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
    }).then((response) => {
      console.log(response.data);
      navigate('/admin/worker');
      setData(response.data);
    }).catch((error) => {
      console.error('Error:', error);
      setError('Error With the Form data please check it ');
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
    //  setSelectCategoryID('');
  };

  const fetchData = async() => {
    try {
      
      await axios.get('http://localhost:8000/api/categories/all')
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

        const timer = setTimeout(() => {
        setError(null);
      }, 3000);
      return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    <>
        <div className={styles.error}>
            {error}
        </div>
        <div className={styles.perrin}>

                <Side_Bar/>
            <div className={styles.form_container}>
            <h2>Create Worker</h2>
            <form onSubmit={handleSubmit}>
                <label>Full Name</label>
                <input type="text" name="name" id='name' value={formData.name} onChange={handleChange} required />

                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />

                <label>Phone Number</label>
                <input type="text" name="phone" id='phone' value={formData.phone} onChange={handleChange} required />

                <label>Skill Category</label>
                <select name="category_id" id="" value={formData.category_id} on onChange={handleChange}  >
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>

                <label>Experience (Years)</label>
                <input type="number" name="experience" min={1} value={formData.experience} onChange={handleChange} required />
                <label>Location</label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} required />

                <label>Bio</label>
                <textarea name="bio" value={formData.bio} onChange={handleChange} required />

                <label>Profile Picture</label>
                <input type="file" name="profilePicture" accept="image/*" onChange={handleChange} />

                <button type="submit" className={styles.create_btn} >Create Worker</button>
            </form>
            </div>
        </div>
    </>
   
  );
}

export default CreateWorkerForm;
