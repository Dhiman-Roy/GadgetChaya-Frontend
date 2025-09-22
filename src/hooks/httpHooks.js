import { useCallback, useState } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
        });
        const responseData = await response.json();
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

  return { isLoading, error, sendRequest };
};
