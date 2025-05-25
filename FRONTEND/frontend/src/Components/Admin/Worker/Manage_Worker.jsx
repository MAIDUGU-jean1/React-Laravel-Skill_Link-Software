import React, { useEffect, useState } from 'react'
import Side_Bar from '../Dashboard/Side_Bar'
import styles from '../Worker/style.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Manage_Worker = () => {

const [data, setData] = useState([]);



  const fetchData =  async() => {

    try {

      await axios.get('http://localhost:8000/api/workers/all')
      .then((response)=>{
          setData(response.data);
          console.log(response.data);
      });

    } catch (error) {
      console.error("Error fetching", error);

    }
  }

  useEffect(()=>{

    fetchData();
  }, []);

const handleDelete = async (id) => {
  try {
    // console.log()
    await axios.delete(`http://localhost:8000/api/worker/delete/${id}`).then((response) => {
      console.log(response.data);
      console.log('User deleted');
      fetchData();
    });

  } catch (error) {
    console.error("Error deleting worker", error);
  }
}
 const navigate = new useNavigate();
 const handleEdit = (worker) => {
    console.log("Edit", worker);
    navigate('/admin/worker/edit', { state: { user: worker } });

 }



  return (
   <>
    <div className={styles.jean}>
        <Side_Bar/>
      {/* error message */}
           <div
          className={styles.error}
        >
        </div>
  <div className={styles.container}>
      <div className={styles.tableContainer}>
        <div className={styles.CreateBtn}><a href="/admin/worker/create">Create Worker</a></div>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Profile Picture</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Category</th>
                  <th>Telephone</th>
                  <th>Years of Experience</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((worker, index) => (
                  <tr key={index}>
                    <td>
                      <img src={`http://127.0.0.1:8000/storage/${worker.profile_pic}`} alt=" No picture found " />
                    </td>
                    <td>{worker.name}</td>
                    <td>{worker.email}</td>
                    <td>{worker.category?.name || "No category"}</td>
                    <td>{worker.phone}</td>
                    <td>{worker.experience} years of experience</td>
                    <td>
                      <button className={styles.editBtn} onClick={() => handleEdit(worker)}>Edit</button>
                      <button className={styles.deleteBtn} onClick={() => handleDelete(worker.id)}>Delete</button>
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

export default Manage_Worker
