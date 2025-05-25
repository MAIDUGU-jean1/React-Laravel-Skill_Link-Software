import React, { useState } from 'react';
import Styles from '../Post/style.module.css'
import Nav from '../../Home-page/Nav';
import profilePic from '../../../assets/Images/jean.JPG';


function Posts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData({ 
      ...formData, [name]: value
     });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Request Sent:', formData);
    // Here you can add a POST request to send the message to the backend
    setFormData({ name: '', email: '', message: '' });
  };

  const pastJobs = [
    { title: 'develop the latest windows', date: 'Jan 2025' },
    { title: 'Connect different API', date: 'Feb 2025' },
    { title: 'Cyber attacks repair in hotel', date: 'Mar 2025' }
  ];

  return (
    <>
    <Nav/>
     <div className={Styles.worker_profile_container}>
      <div className={Styles.profile_card}>
       <div className={Styles.header}>
           <img src={profilePic} alt="No profile insert a default profile" />
        <h2 className={Styles.worker_name}>John Doe</h2>
       </div>
        <p className={Styles.worker_info}>Developper | 5+ years experience</p>
        <h3 className={Styles.section_title}>Past Jobs</h3>
        <ul className={Styles.job_list}>
          {pastJobs.map((job, index) => (
            <li key={index} className={Styles.job_item}>
              {job.title} <span className={Styles.job_date}>({job.date})</span> <br />
              <a href="">link here</a>
            </li>
          ))}
        </ul>


      </div>

      <div className={Styles.form_card}>
        <h3 className={Styles.section_title}>Send a Request</h3>
        <form onSubmit={handleSubmit} className={Styles.contact_form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className={Styles.form_input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={Styles.form_input}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className={Styles.form_textarea}
          ></textarea>
          <button type="submit" className={Styles.submit_button}>
            Send Message
          </button>
        </form>
      </div>
    </div>    </>
  );
}
export default Posts
