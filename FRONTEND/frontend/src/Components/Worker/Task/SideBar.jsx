import React, { useEffect, useState } from 'react';
import Style from '../../Worker/Task/style.module.css';
import { Menu, X } from 'lucide-react';
import { FaHome, FaUser } from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import axios from 'axios';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async() => {

    try {
       const token = localStorage.getItem('token');

      await axios.get('http://localhost:8000/api/worker/dashboard',
        {
           headers: {
           Authorization: `Bearer ${token}`
         }
        }
      )
      .then((response) => {
          setData(response.data);
          console.log(response.data);
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
      <div className={Style.mobileMenuIcon} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      <div className={`${Style.sidebar} ${isOpen ? Style.open : ''}`}>
        <h2>SkillLink</h2>
        <img src={`http://localhost:8000/storage/${data?.worker?.profile_pic}`} alt="No image" />
        <h3 className={Style.workerName}>{data?.worker?.name}</h3>
        <ul className={Style.nav}>
          <li><a href="/worker"><FaHome size={24} />  Dashboard</a></li>
          <li><a href="/worker/tasks"><FaCodePullRequest /> Total Requests</a></li>
          <li><a href="/worker/tasks">Post Task</a></li>
          <li><a href="#"><TiMessages /> Messages</a></li>
          <li><a href="#"><CgProfile /> Profile</a></li>
          <li><a href="#"><IoIosLogOut /> Logout</a></li>
        </ul>
      </div>
    </>
  );
};
export default SideBar;
