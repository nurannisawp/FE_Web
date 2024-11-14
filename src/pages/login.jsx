import React from 'react'
import { useNavigate } from "react-router-dom"
import '../dist/css/LoginPage.css';
import backgroundImage from '../assets/img/background.png';

function Login() {
    const navigate = useNavigate();
  
    return (
      <div className="login-container">
        <div className="login-image">
          <img src={backgroundImage} alt="Pemandangan" />
        </div>
        <div className="login-form">
          <h2>Welcome Admin!</h2>
          <p>Selamat datang kembali pengelola tempat wisata pemandian air panas Papandayan Kota Garut.</p>
          <p className='title_input_field'>Alamat Email</p>
                  <input type="email" placeholder="Masukkan alamat email" className="input-field" />
                  <p className='title_input_field'>Kata Sandi</p>
                  <input type="password" placeholder="Masukkan kata sandi" className="input-field" />
                  <button className="submit-button" onClick={()=> navigate('/dashboard')}>Masuk</button>
        </div>
      </div>
  )
}

export default Login