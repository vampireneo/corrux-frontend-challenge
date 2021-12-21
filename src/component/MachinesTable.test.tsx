import { render, screen } from '@testing-library/react';
import MachinesTable from './MachinesTable';

test('renders header', () => {
  render(<MachinesTable machines={[]} />);
  const machineIdHeader = screen.getByText(/Machine Id/i);
  expect(machineIdHeader).toBeInTheDocument();
});

test('renders location correctly', () => {
  const machines: Machine[] = [
    {
      id: 1,
      location: {
        altitude: 0,
        latitude: 48.1416341,
        longitude: 11.5265284,
      },
      metrics: {
        def_remaining: 0,
        engine_status: 0,
        fuel_remaining: 10,
        in_bounds: true,
        last_activity: '2019-12-5T00:00:00.000',
      },
      model: {
        category: 'earth_moving',
        make: 'liebherr',
        manufacture_year: 2016,
        model: 'A 924:1206',
        tank_capacity: 0,
        type: 'wheeled_excavator',
      },
      serial_number: '768403',
    },
  ];
  render(<MachinesTable machines={machines} />);
  const latitude = screen.getByText('48.14163');
  expect(latitude).toBeInTheDocument();
  const longitude = screen.getByText('11.52653');
  expect(longitude).toBeInTheDocument();
});
