import { useLocation, useNavigate } from 'react-router-dom';
import  styles from './edit.module.css';
import Side_Bar from '../Dashboard/Side_Bar';


import React, { useEffect, useState } from 'react'
import axios from 'axios';
const EditWorker = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const worker = location.state?.user;

    console.log("worker", worker);
  const [categories, setCategories] = useState([]);


    const [formData, setFormData] = useState({
      name: worker.name,
      // profilePicture: worker.profilePicture,
      email: worker.email,
      category: worker.category.id,
      phone: worker.phone,
      experience: worker.experience
  });

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
  useEffect(() => {
    fetchData();
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // const handleFileChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     profilePicture: e.target.files[0]
  //   });
  // };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    try {
        await axios.put(`http://127.0.0.1:8000/api/worker/edit/${worker.id}`, 
          {
            name: formData.name,
            // profilePicture: formData.profile_pic,
            email: formData.email,
            category_id: formData.category,
            phone: formData.phone,
            experience: formData.experience

        });
            console.log('Form submitted successfully');
            navigate('/admin/worker', { replace: true });
    } catch (error) {
        console.error('Error submitting form:', error);
        console.log('formData', formData.category);
    }
  };

return (
<>
     <div className={styles.jean}>
            <Side_Bar/>
   
    <div className={styles.worker_form_container}>
      <h2>Edit Worker</h2>
      <form onSubmit={handleSubmit} className={styles.worker_form}>
        <div className={styles.form_group}>
          <label>Full Name</label>
          <input
            defaultValue={formData.name}
            type="text"
            name="name"
           
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.form_group}>
          <label>Profile Picture</label>
          <input
            type="file"
            name="profile_pic"
            defaultValue={formData.profilePicture}
            
          />
        </div>

        <div className={styles.form_group}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            defaultValue={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.form_group}>
          <label>Category</label>
          <select
            name="category"
            defaultValue={formData.category}
            onChange={handleChange}
            required
          >
            <option value={formData.category}>{worker.category.name}</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>

        <div className={styles.form_group}>
          <label>Telephone</label>
          <input
            type="text"
            name="phone"
            defaultValue={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.form_group}>
          <label>Years of Experience</label>
          <input
            type="number"
            name="experience"
            defaultValue={formData.experience}
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.form_action}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
</div>
</>
  )
}

export default EditWorker
