import { useEffect, useState } from "react";

// 3 states, one for the data, loading, and error
export default function useFetch(URL) {
  // state
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // functions
  async function fetchData() {
    console.log("running");
    try {
      setLoading(true);
      const res = await fetch(URL);
      const parsedData = await res.json();
      setData(parsedData.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (URL.slice(-1) !== "=") {
      console.log("I AM URL", URL);
      fetchData();
    } else {
      setData(null);
    }
  }, [URL]);

  return { data, error, loading };
}
