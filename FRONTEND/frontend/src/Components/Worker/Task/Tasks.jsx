import React from 'react'
import Style from '../../Worker/Task/style.module.css'
import SideBar from './SideBar'

const Tasks = () => {
  return (
  <>
    
    <div className={Style.Dashboard}>
        <SideBar/>
      <main className={Style.main_content}>
        <header>
          <h1>Welcome, <span id="userName">User</span>!</h1>
          <p>Your role: <span id="userRole">Worker</span></p>
        </header>
  
      
        <section className={Style.task_list}>
          <div className={Style.task_card}>
            <h3>Design a Logo for a Bakery</h3>
            <p><strong>Budget:</strong> $50</p>
            <p><strong>Deadline:</strong> April 30, 2025</p>
            <p><strong>Contact:</strong> 682090879</p>
            <a href="#" className={Style.apply_btn}>Apply</a>
          </div>
        
          <div className={Style.task_card}>
            <h3>Build a 1-Page Website</h3>
            <p><strong>Budget:</strong> $100</p>
            <p><strong>Deadline:</strong> May 5, 2025</p>
            <p><strong>Contact:</strong> 682090879</p>
            <a href="#" className={Style.apply_btn}>Apply</a>
          </div>
        </section>
        
      </main>
      </div>
  </>

  )
}

export default Tasks
