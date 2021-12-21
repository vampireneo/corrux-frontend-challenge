import { useEffect } from 'react';
import Alert from '@mui/material/Alert';

import Map from './component/Map';
import MachinesTable from './component/MachinesTable';
import useMachines from './useMachines';

const REFRESH_INTERVAL = 1e4;

const App = () => {
  const { response, fetchData, error } = useMachines();
  const machines = response?.data;

  useEffect(() => {
    fetchData();
    const id = setInterval(fetchData, REFRESH_INTERVAL);
    return () => {
      clearInterval(id);
    };
  }, []);

  if (!machines || error) {
    return (
      <Alert severity="error">
        {error?.message ?? 'Unable to connect API'}
      </Alert>
    );
  }

  return (
    <div>
      <Map machines={machines} />
      <MachinesTable machines={machines} />
    </div>
  );
};

export default App;
