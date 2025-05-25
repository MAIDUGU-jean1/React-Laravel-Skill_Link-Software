
import React, { useEffect, useState } from 'react'
import styles from '../Dashboard/body.module.css';
import SideBar from '../../Worker/Task/SideBar';
import Side_Bar from './Side_Bar';
import Navbar from './Navbar';
import axios from 'axios';
import { Weight } from 'lucide-react';



const Admin_Dashboard = () => {
const [data, setData] = useState(null);
    const fetchData = async() => {
      
    try {
      
      await axios.get('http://localhost:8000/api/worker/request/all')
      .then( (response) => {
        console.log(response.data)
        setData(response.data);
        
      } )
  
    } catch (error) {
      console.error('Error :', error);

    }
  
    }
  useEffect(()=> {
    fetchData();
  }, []);

 
  return (

 <div className={styles.container1}>
  <Navbar />
  <div className={styles.main}>
    <Side_Bar /> 
    <div className={styles.adminContent}>
          <div className={styles.dashboard_cards}>
                      <div className={ ` ${styles.card} ${styles.card_sessions}`}>
                    <h2>Active Workers</h2>
                    <p style={{ color: 'green', fontWeight: 600, fontSize: '2rem' }}>50</p>
                </div>
                <div className={` ${styles.card} ${styles.card_issues}`}>
                    <h2>Workers request </h2>
                    <p style={{ color: 'white', fontWeight: 600, fontSize: '2rem' }}>{data?.TotalWorkerRequest}</p>
                </div>
                <div className= { `${styles.card} ${styles.card_demands}`}>
                    <h2>Pending Workers</h2>
                    <p style={{ color: 'red', fontWeight: 600, fontSize: '2rem' }}>10</p>
                </div>
            </div>
    </div>
  </div>
</div>

   
    
  
  )
}

export default Admin_Dashboard
