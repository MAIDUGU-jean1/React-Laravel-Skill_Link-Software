import React, { useState } from 'react';
import styles from '../Dashboard/style.module.css';
import { FaUsers, FaTasks, FaChartBar, FaTools, FaBell, FaSignOutAlt } from 'react-icons/fa';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Side_Bar() {
  const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error("No token found. User might not be logged in.");
      return;
    }

    await axios.post('http://localhost:8000/api/admin/logout', null, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      console.log(response.data);
      // localStorage.removeItem('token');
      navigate('/worker/login');
    });
  }
  return (
     <>
     <div className={styles.jean}>
       <div className={isOpen ? styles.sidebar : styles.sidebarCollapsed}>
      <button onClick={toggleSidebar} className={styles.toggleButton}>
        {isOpen ? '☰' : '☰'}
      </button>

      <div className={styles.logo}>{isOpen && <h2>Admin</h2>}</div>

      <nav className={styles.navMenu}>
        <a href="/admin" className={styles.navLink}>
          <FaChartBar className={styles.icon} /> {isOpen && 'Dashboard'}
        </a>
        <a href="/admin/client" className={styles.navLink}>
          <FaUsers className={styles.icon} /> {isOpen && 'Clients'}
        </a>
        <a href="/admin/client" className={styles.navLink}>
          <FaUsers className={styles.icon} /> {isOpen && 'Available Requests'}
        </a>
        <a href="/admin/worker" className={styles.navLink}>
          <FaTools className={styles.icon} /> {isOpen && 'Workers'}
        </a>
        <a href="#skills" className={styles.navLink}>
          <FaTasks className={styles.icon} /> {isOpen && 'Skills'}
        </a>
        <a href="#notifications" className={styles.navLink}>
          <FaBell className={styles.icon} /> {isOpen && 'Notifications'}
        </a>
        <a href="#logout" className={styles.navLink} onClick={handleLogout}>
          <FaSignOutAlt className={styles.icon} /> {isOpen && 'Logout'}
        </a>
      </nav>
    </div>
   
     </div>
     </>
  );
}
export default Side_Bar;