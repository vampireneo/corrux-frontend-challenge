/// <reference types="react-scripts" />

type Machine = {
  id: number;
  location: {
    altitude: number;
    latitude: number;
    longitude: number;
  };
  metrics: {
    def_remaining: number;
    engine_status: number;
    fuel_remaining: number;
    last_activity: string;
    in_bounds: boolean;
  };
  model: {
    category: string;
    make: string;
    manufacture_year: number;
    model: string;
    tank_capacity: number;
    type: string;
  };
  serial_number: string;
};
