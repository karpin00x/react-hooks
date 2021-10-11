import { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const get = async ({ url, onSuccess = () => {} } = {}) => {
    try {
      const response = await fetch(url).then((response) => response.json());
      setData(response);
      onSuccess(response);
    } catch (error) {
      console.log(error);
    }
  };

  return { data, get };
};

export default useFetch;
