import { useEffect, useState } from "react";

// 3 states, one for the data, loading, and error
export default function useFetchGame(URL) {
  // state
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // functions
  async function fetchData() {
    try {
      setLoading(true);
      const res = await fetch(URL);
      if (res.ok) {
        const parsedData = await res.json();
        setData(prevData => (prevData = parsedData));
      } else {
        throw new Error("Unable to find what you were looking for..");
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();

    return () => {
      setData(null);
    };
  }, [URL]);

  return { data, error, loading };
}
