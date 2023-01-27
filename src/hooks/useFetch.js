import { useEffect, useState } from "react";

// 3 states, one for the data, loading, and error
export default function useFetch(URL) {
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
        setData(prevData => (prevData = parsedData.results));
      } else {
        throw new Error("Unable to find the game requested.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (URL.slice(-1) !== "=") {
      fetchData();
    }

    return () => {
      setData(null);
    };
  }, [URL]);

  return { data, error, loading };
}
