'use client';

import { useEffect, useState } from 'react';
import { usernameAtom } from '@/assets/helpers/authStore';
import { useStore } from '@nanostores/react';
import { redirect } from 'next/navigation';
import styles from './Header.module.scss';
import Link from 'next/link';
const Header = () => {
  const username = useStore(usernameAtom);
  const [isMounted, setIsMounted] = useState(false);

  const logout = () => {
    localStorage.removeItem('username');
    usernameAtom.set('');
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!localStorage.getItem('username')) {
      redirect('/');
    }
  }, []);

  const authOrNot = username ? (
    <Link href={'/'} onClick={logout} className={styles.left}>
      Выйти
    </Link>
  ) : null;

  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        {isMounted && (
          <>
            <div className={styles.title}>Hello, {username}</div>
            {authOrNot}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
