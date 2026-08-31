 import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import instance from '../utils/axios';

export default function Login({ onLoginSuccess }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phoneNumber.trim() || !password.trim()) {
      Swal.fire({
        title: 'Xatolik!',
        text: 'Iltimos, barcha maydonlarni to‘ldiring.',
        icon: 'warning',
        background: '#1C2A20',
        color: '#FFFFFF',
        confirmButtonColor: '#FFC72C'
      });
      return;
    }

    try {
      const payload = {
        phone: phoneNumber.trim(),
        password: password.trim(),
      };

      const res = await instance.post('/auth/login', payload);

      if (res.data?.token) {
        localStorage.setItem('token', res.data.token);
      }

      if (onLoginSuccess) onLoginSuccess();

      Swal.fire({
        title: 'Xush kelibsiz! 👋',
        text: res.data?.message || 'Tizimga muvaffaqiyatli kirdingiz.',
        icon: 'success',
        background: '#1C2A20',
        color: '#FFFFFF',
        iconColor: '#FFC72C',
        timer: 1500,
        showConfirmButton: false,
        timerProgressBar: true
      }).then(() => {
        window.location.href = "/";
      });

    } catch (err) {
      console.error('Login Error:', err);
      const errorMsg = typeof err?.response?.data === 'string'
        ? err.response.data
        : err?.response?.data?.message || 'Login yoki parol noto‘g‘ri.';

      Swal.fire({
        title: 'Xatolik!',
        text: errorMsg,
        icon: 'error',
        background: '#1C2A20',
        color: '#FFFFFF',
        confirmButtonColor: '#EF4444'
      });
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#152219',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: 'Inter, sans-serif'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '420px',
          backgroundColor: '#1C2A20',
          borderRadius: '24px',
          padding: '40px 32px',
          border: '1px solid #28392C',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
          boxSizing: 'border-box'
        }}
      >
    
        <div style={{ textAlign: 'center', marginBottom: '8px' }}>
          <span
            style={{
              color: '#FFC72C',
              fontSize: '11px',
              fontWeight: '800',
              letterSpacing: '1.5px',
              textTransform: 'uppercase'
            }}
          >
            ✦ Welcome Back to 7teen ✦
          </span>
        </div>

 
        <h1
          style={{
            color: '#FFFFFF',
            fontSize: '32px',
            fontWeight: '800',
            textAlign: 'center',
            margin: '0 0 8px 0',
            letterSpacing: '-0.5px'
          }}
        >
          Sign In
        </h1>

   
        <p
          style={{
            color: '#9CA3AF',
            fontSize: '13px',
            textAlign: 'center',
            margin: '0 0 32px 0',
            fontWeight: '500'
          }}
        >
          Enter your credentials to access your account
        </p>

    
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
         
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ color: '#E5E7EB', fontSize: '13px', fontWeight: '700' }}>
              Phone Number
            </label>
            <input
              type="text"
              placeholder="+998"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px',
                borderRadius: '14px',
                backgroundColor: '#111B14',
                border: '1px solid #28392C',
                color: '#FFFFFF',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s ease'
              }}
            />
          </div>

         
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ color: '#E5E7EB', fontSize: '13px', fontWeight: '700' }}>
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px',
                borderRadius: '14px',
                backgroundColor: '#111B14',
                border: '1px solid #28392C',
                color: '#FFFFFF',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s ease'
              }}
            />
          </div>

     
          <button
            type="submit"
            style={{
              marginTop: '10px',
              width: '100%',
              padding: '14px',
              borderRadius: '14px',
              backgroundColor: '#FFC72C',
              color: '#1C2A20',
              border: 'none',
              fontSize: '15px',
              fontWeight: '800',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(255, 199, 44, 0.25)',
              transition: 'transform 0.1s ease, background-color 0.2s ease'
            }}
          >
            Sign In ✨
          </button>
        </form>

        
        <div style={{ textAlign: 'center', marginTop: '28px', fontSize: '13px', color: '#9CA3AF' }}>
          Don't have an account?{' '}
          <Link
            to="/registr"
            style={{
              color: '#FFC72C',
              fontWeight: '700',
              textDecoration: 'none'
            }}
          >
            Create One
          </Link>
        </div>
      </div>
    </div>
  );
}