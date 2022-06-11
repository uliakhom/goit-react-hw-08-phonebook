import { useState } from 'react';

import { initialState } from './initialState';
import s from './registerForm.module.css';

const RegisterForm = ({ onSubmit }) => {
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

  const { name, email, password } = form;

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.container}>
        <label htmlFor="" className={s.label}>
          Name
        </label>
        <input
          onChange={handleChange}
          name="name"
          type="text"
          value={name}
          placeholder="Name"
          className={s.input}
        />
      </div>
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
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
