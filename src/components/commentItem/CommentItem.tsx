import { forwardRef } from 'react';

import styles from './CommentItem.module.scss';

interface CommentItemProps {
  body: string;
  name: string;
  email: string;
}

export const CommentItem = forwardRef<HTMLDivElement, CommentItemProps>(
  ({ body, email, name }, ref) => {
    return (
      <div className={styles.comment} ref={ref}>
        <div className={styles.name}>
          <span className={styles.title}>Name:</span> {name}
        </div>
        <div className={styles.email}>
          <span className={styles.title}>Email:</span> {email}
        </div>
        <div className={styles.body}>
          <span className={styles.title}>Body:</span> {body}
        </div>
      </div>
    );
  },
);

CommentItem.displayName = 'CommentItem';
