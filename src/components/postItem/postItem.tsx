import { forwardRef } from 'react';
import Link from 'next/link';

import styles from './postItem.module.scss';

interface PostItemProps {
  title: string;
  body: string;
  id: number;
}

export const PostItem = forwardRef<HTMLAnchorElement, PostItemProps>(({ title, body, id }, ref) => {
  return (
    <Link className={styles.link} href={`/posts/${id}/comments`} ref={ref}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.desc}>{body}</div>
    </Link>
  );
});

PostItem.displayName = 'PostItem';
