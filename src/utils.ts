import { MAX_LAT, MAX_LON, MIN_LAT, MIN_LON } from './constant';

export const isOutOfBounds = (location: Machine['location']) =>
  location.latitude < MIN_LAT ||
  location.latitude > MAX_LAT ||
  location.longitude < MIN_LON ||
  location.longitude > MAX_LON;

export const roundToDigit = (num: number, digit: number) => {
  const factor = Math.pow(10, digit);
  return Math.round((num + Number.EPSILON) * factor) / factor;
};
