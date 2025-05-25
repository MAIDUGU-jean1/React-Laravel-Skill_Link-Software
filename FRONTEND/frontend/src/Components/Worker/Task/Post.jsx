import React, { useState } from 'react'
import SideBar from './SideBar'
import Style from '../Task/style.module.css'

const Post = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    category: '',
    experience: '',
    description: '',
    picture: null,
  });


  const [preview, setPreview] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setFormData(prev => ({ ...prev, picture: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === 'dragenter' || e.type === 'dragover');
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setFormData(prev => ({ ...prev, picture: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // You can now send formData, including the file, to the backend using FormData API
  };


  return (
  <>
    
    <div className={Style.Dashboard}>
        <SideBar/>
      <main className={Style.main_content}>
        <header>
          <h1>Welcome, <span id="userName">User</span>!</h1>
          <p>Your role: <span id="userRole">Worker</span></p>
        </header>
    <div className={Style.formContainer}>
      <h2>Post Your Skill</h2>
      <form onSubmit={handleSubmit} className={Style.form}>
        <div className={Style.formGroup}>
          <label>Full Name</label>
          <input 
            type="text" 
            name="fullName" 
            value={formData.fullName} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className={Style.formGroup}>
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>

    <div className={Style.formGroup}>
      <label>Skill Category</label>
      <select 
        name="category" 
        value={formData.category} 
        onChange={handleChange} 
        required
      >
        <option value="">Select a category</option>
        <option value="Programming">Programming</option>
        <option value="Design">Web Development</option>
        <option value="Marketing">Analyst</option>
        {/* <option value="Writing">Writing</option> */}
      </select>
    </div>


        <div className={Style.formGroup}>
          <label>Years of Experience</label>
          <input 
            type="number" 
            name="experience" 
            value={formData.experience} 
            onChange={handleChange} 
            min="0" 
            required 
          />
        </div>

        <div className={Style.formGroup}>
          <label>Description</label>
          <textarea 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            rows="4" 
            required 
          ></textarea>
        </div>

        <div 
          className={`${Style.dropZone} ${dragActive ? Style.active : ''}`}
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
        >
          <p>Drag & Drop your profile picture here or click to select</p>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleFileSelect} 
            className={Style.fileInput}
          />
          {preview && <img src={preview} alt="Preview" className={Style.previewImage} />}
        </div>

        <button type="submit" className={Style.submitBtn}>Submit Skill</button>
      </form>
    </div>

      </main>
      </div>
  </>

  )
}

export default Post
