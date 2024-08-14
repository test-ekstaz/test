'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { PostItem } from '../postItem/postItem';
import { useFetchData } from '@/assets/helpers/useFetch';
import Loader from '../commentList/loader/Loader';

import styles from './PostList.module.scss';
const PostList = () => {
  const [page, setPage] = useState(1);
  const limit = 10;
  const url = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`;
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
    return <PostItem key={post.id} {...post} ref={isLastElement ? ref : null} />;
  });
  const noData = hasMore ? null : <div className={styles.noData}>No more data</div>;

  return (
    <div className={styles.wrap}>
      {isLoading}
      {error}
      {posts}
      {noData}
    </div>
  );
};

export default PostList;
