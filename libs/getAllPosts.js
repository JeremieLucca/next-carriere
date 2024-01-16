import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useFetchPosts = () => {
  const { data, error } = useSWR(
    'https://api.lever.co/v0/postings/lucca?mode=json',
    fetcher,
    {
      revalidateOnFocus: false, // Désactiver le cache
    }
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};