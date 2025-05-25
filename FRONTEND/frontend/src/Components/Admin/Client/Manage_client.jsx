import React, { useEffect, useState } from 'react'
import Side_Bar from '../Dashboard/Side_Bar'
import styles from '../Client/style.module.css';
import { FaCheckCircle } from 'react-icons/fa';
import { FaTimesCircle } from 'react-icons/fa';
import axios from 'axios';



const Manage_client = () => {

  const [data, setData] = useState([]);


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

  useEffect(() => {
    fetchData();
  }, []);


  return (
   <>
    <div className={styles.jean}>
        <Side_Bar/>

        <div className={styles.container}>
<div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Profile picture </th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Category</th>
            <th>Biography</th>
            <th>location</th>
            <th>Telephone</th>
            <th>experience</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>

        {Array.isArray(data?.workers) && data.workers.map((worker, index) => (
            <tr key={index}>
              <td>
                <img src={`http://127.0.0.1:8000/storage/${worker.profile_pic}`} alt="no profile" className={styles.Profile} />
              </td>
              <td>{worker.name}</td>
              <td>{worker.email}</td>
              <td>{worker.category?.name}</td>
              <td>{worker.bio}</td>
              <td>{worker.location}</td>
              <td>{worker.phone}</td>
              <td>{worker.experience} years of experience</td>
              <td>
                <button className={styles.editBtn} ><FaCheckCircle /> Approve</button>
                <button className={styles.deleteBtn}><FaTimesCircle /> Decline</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
    </div>
    
   </>
  )
}

export default Manage_client
