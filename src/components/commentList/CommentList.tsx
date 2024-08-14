'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useParams } from 'next/navigation';
import { useFetchData } from '@/assets/helpers/useFetch';
import { CommentItem } from '../commentItem/CommentItem';
import Loader from './loader/Loader';

import styles from './CommentList.module.scss';
import Link from 'next/link';

const CommentList = () => {
  const { id } = useParams();
  const limit = 10;
  const [page, setPage] = useState(1);
  const url = `https://jsonplaceholder.typicode.com/comments/${id}/comments?_limit=${limit}&_page=${page}`;
  const { data, err, loading, hasMore } = useFetchData({ url, limit, page });

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [inView, hasMore]);

  const isLoading = loading ? <Loader /> : null;
  const error = err ? <p>Something went wrong</p> : null;
  const posts = data.map((post, i) => {
    const isLastElement = i === data.length - 1;
    return (
      <CommentItem name={''} email={''} key={post.id} {...post} ref={isLastElement ? ref : null} />
    );
  });
  const noData = hasMore ? null : <div className={styles.noData}>No more data</div>;

  return (
    <>
      <Link className={styles.goBack} href="/posts">
        {' '}
        {`< К постам`}
      </Link>
      <div className={styles.wrap}>
        {isLoading}
        {error}
        {posts}
        {noData}
      </div>
    </>
  );
};

export default CommentList;
