import './App.css'
import React from 'react'
import { Link, Route,Routes } from 'react-router-dom';
import Landing from './Components/Home-page/Landing'
import Nav from './Components/Home-page/Nav';
import Login from './Components/Login/Login';
import Register from './Components/Registration/Register';
import Profile from './Components/Services/Profile';
import Contact from './Components/Contact/Contact';
import Tasks from './Components/Worker/Task/Tasks';
import Dashboard from './Components/Worker/Dashboard/Dashboard';
import Posts from './Components/Worker/Post/Posts';
import Admin_Dashboard from './Components/Admin/Dashboard/Admin_Dashboard';
import Manage_client from './Components/Admin/Client/Manage_client';
import Manage_Worker from './Components/Admin/Worker/Manage_Worker';
import Post from './Components/Worker/Task/Post';
import CreateWorkerForm from './Components/Admin/CreateForm/CreateWorkerFrom';
import EditWorker from './Components/Admin/Worker/EditWorker';

function App() {

  return (
<div>
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/worker/login' element={<Login/>} />
      <Route path='/worker/request' element={<Register/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/worker/tasks' element={<Tasks/>} />
      <Route path='/worker/tasks/post' element={<Post/>} />
      <Route path='/worker' element={<Dashboard/>} />
      <Route path='/profile/posts' element={<Posts/>} />
      <Route path='/admin' element={<Admin_Dashboard/>} />
      <Route path='/admin/worker' element= {<Manage_Worker/>}/>
      <Route path='/admin/client' element= {<Manage_client/>}/>
      <Route path='/admin/worker/create' element= {<CreateWorkerForm/>}/>
      <Route path='/admin/worker/edit' element= {<EditWorker/>}/>
    </Routes>
</div>

  )
}

export default App
