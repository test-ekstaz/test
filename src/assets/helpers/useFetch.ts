import { useState, useEffect } from 'react';
import axios from 'axios';
import { PostAndComment } from '@/types/types';

interface FetchPostsOptions {
  url: string;
  limit?: number;
  page?: number;
}

export const useFetchData = ({ url, limit, page }: FetchPostsOptions) => {
  const [data, setData] = useState<PostAndComment[]>([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await axios.get<PostAndComment[]>(`${url}`);
        let newData = Array.isArray(res.data) ? res.data : [res.data];
        if (res.data.length === 0) {
          setHasMore(false);
        } else {
          setData((prev) => [...prev, ...newData]);
        }
      } catch (e) {
        setErr(true);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [url, limit, page]);

  return { data, loading, err, hasMore };
};
