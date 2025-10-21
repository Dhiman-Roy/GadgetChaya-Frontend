import { useCallback, useEffect, useRef, useState } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      const httpAbortController = new AbortController();
      activeHttpRequests.current.push(httpAbortController);
      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
        });
        const responseData = await response.json();
        activeHttpRequests.current = activeHttpRequests.current.filter(
          (ctrl) => ctrl !== httpAbortController
        );
        if (!response) {
          throw new Error("Fetching data failed");
        }

        return responseData;
      } catch (err) {
        setError(err.message);
        console.log(err.message);
      }
    },
    []
  );

  useEffect(() => {
    return () => activeHttpRequests.current.forEach((req) => req.abort());
  }, []);

  return { isLoading, error, sendRequest };
};
