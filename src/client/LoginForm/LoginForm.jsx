import { useState } from 'react';

import { initialState } from './initialState';
import s from './loginForm.module.css';

const LoginForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...form });
    setForm({ ...initialState });
  };

  const { email, password } = form;

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.container}>
        <label htmlFor="" className={s.label}>
          Email
        </label>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          value={email}
          placeholder="Email"
          className={s.input}
        />
      </div>
      <div className={s.container}>
        <label htmlFor="" className={s.label}>
          Password
        </label>
        <input
          onChange={handleChange}
          name="password"
          type="password"
          value={password}
          placeholder="Password"
          className={s.input}
        />
      </div>
      <button type="submit" className={s.button}>
        LogIn
      </button>
    </form>
  );
};

export default LoginForm;
