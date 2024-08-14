'use client';

import React from 'react';
import  { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usernameAtom } from '@/assets/helpers/authStore';

import styles from './form.module.scss';
const Form = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!name || !password) {
      alert('Введите логин или пароль');
      return;
    }
    usernameAtom.set(name);
    router.push('/posts');
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Войти</h1>

        <form className={styles.form}>
          <div className={styles.group}>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Username"
              className={styles.input}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          <div className={styles.group}>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              className={styles.input}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              required
            />
          </div>

          <Link className={styles.group} href={`/posts`}>
            <button onClick={(e ) => handleSubmit(e)} type="submit" className={styles.button}>
              Sign In
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Form;
