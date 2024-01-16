import { useEffect, useState, useCallback } from "react";
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useFetchPosts = () => {
  const { data, error, revalidate } = useSWR(
    'https://api.lever.co/v0/postings/lucca?mode=json',
    fetcher
  );

  // Effectuer la revalidation lorsque la page devient visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        revalidate();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [revalidate]);

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};