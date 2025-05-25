import React, { useEffect, useState } from 'react'
import Style from '../Dashboard/style.module.css'
import SideBar from '../Task/SideBar'
import axios from 'axios';
const Dashboard = () => {

  const [data, setData] = useState([]);

  const fetchData = async() => {

    try {
       const token = localStorage.getItem('token');
       
      await axios.get('http://127.0.0.1:8000/api', {},
        {
           headers: {
           Authorization: `Bearer ${token}`
         }
        }
      )
      .then((response) => {
          setData(response.data);
    })
    } catch (error) {
      console.error('Error fetching data', error );
    }

  } 
  useEffect(() => {
      fetchData();
  }, []);


  return (
<>
<SideBar/>
<main className={Style.main_content}>
      <header>
        <h1>Welcome, <span id="userName">User</span>!</h1>
        <p>Your role: <span id="userRole">{data.worker?.name}</span></p>
      </header>
      <section className={Style.dashboard_body}>
        <p>This is your dashboard where you'll manage everything </p>
        <section className={Style.summary_cards}>
            <div className={Style.card}>
              <h3>Total Request</h3>
              <p>12</p>
            </div>
            <div className={Style.card2}>
              <h3>Completed</h3>
              <p>7</p>
            </div>
            <div className={Style.card3}>
              <h3>Pending</h3>
              <p>5</p>
            </div>
          </section>
          
      </section>
    
    
      
    </main>
</>
  )
}

export default Dashboard
