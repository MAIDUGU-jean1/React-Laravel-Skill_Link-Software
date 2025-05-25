import React, {useEffect, useState } from 'react';
import styles from '../Dashboard/style.module.css';
import { FaUserCircle } from 'react-icons/fa';
import axios from 'axios';


function Navbar() {

 const [data, setData] = useState(null);

   const fetchData = async () => {

     try {
      const token = localStorage.getItem('token');

      await axios.get('http://localhost:8000/api/getUser',  {
         headers: {
           Authorization: `Bearer ${token}`
         }
       }).then((response) => {
        setData(response.data.user);
        console.log('User data:', response.data);
       });
     } catch (error) {
       console.error('Error fetching user data:', error);
     }
   };

  useEffect(() => {

    fetchData();

  }, []);

   if (!data) return <div>Loading...</div>;
  return (
    <header className={styles.navbar}>
      <div className={styles.brand}>SkillLink Admin Panel</div>

      <div className={styles.adminSection}>
        <span className={styles.adminName}>Welcome, {data.name}</span>
        <FaUserCircle className={styles.profileIcon} />
      </div>
    </header>
  );
}
export default Navbar
