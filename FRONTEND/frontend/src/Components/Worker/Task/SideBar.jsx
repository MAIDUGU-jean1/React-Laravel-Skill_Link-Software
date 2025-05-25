import React, { useState } from 'react';
import Style from '../../Worker/Task/style.module.css';
import { Menu, X } from 'lucide-react';
import { FaHome, FaUser } from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={Style.mobileMenuIcon} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      <div className={`${Style.sidebar} ${isOpen ? Style.open : ''}`}>
        <h2>SkillLink</h2>
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
