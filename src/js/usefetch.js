import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const getData = async () => {
    setLoading(true);

    const response = await fetch(url);
    const result = await response.json();

    setData(result);
    setLoading(false);
  };

  useEffect(() => {
		getData();
  }, [url]);

  return { loading, data, getData };
};

export default useFetch;
