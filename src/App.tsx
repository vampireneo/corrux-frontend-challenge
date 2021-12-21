import { useEffect } from 'react';

import Map from './component/Map';
import MachinesTable from './component/MachinesTable';
import useMachines from './useMachines';

const REFRESH_INTERVAL = 1e4;

const App = () => {
  const { response, fetchData } = useMachines();
  const machines = response?.data;

  useEffect(() => {
    fetchData();
    const id = setInterval(fetchData, REFRESH_INTERVAL);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      {machines === undefined ? null : (
        <>
          <Map machines={machines} />
          <MachinesTable machines={machines} />
        </>
      )}
    </div>
  );
};

export default App;
