import { useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

axios.defaults.baseURL = 'http://localhost:8081/';

const useMachines = () => {
  const [response, setResponse] = useState<AxiosResponse<Machine[]>>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const result = await axios.request<Machine[]>({
        method: 'get',
        url: '/machines',
      });
      setResponse(result);
    } catch (err) {
      setError(err as AxiosError);
    } finally {
      setLoading(false);
    }
  };

  return { fetchData, response, error, loading };
};

export default useMachines;
