import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // در اینجا منطق ارسال اطلاعات به سرور قرار می‌گیرد
    console.log('Email:', email);
    console.log('Password:', password);
    alert('فرم لاگین ارسال شد! (این یک نمونه تست است)');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>ورود به سیستم</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="ایمیل خود را وارد کنید"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          ورود
        </button>
      </form>
    </div>
  );
};

// استایل‌های ساده و داخلی (برای جلوگیری از ایجاد فایل جداگانه)
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    background: '#f9f9f9',
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
};

export default Login;
