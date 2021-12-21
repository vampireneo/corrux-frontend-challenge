import { isOutOfBounds, roundToDigit } from './utils';

describe('roundToDigit', () => {
  test('round number to specified digit', () => {
    expect(roundToDigit(123.456, 0)).toEqual(123);
    expect(roundToDigit(123.456, 1)).toEqual(123.5);
    expect(roundToDigit(123.456, 2)).toEqual(123.46);
    expect(roundToDigit(123.456, 3)).toEqual(123.456);
    expect(roundToDigit(123.456, 4)).toEqual(123.456);
  });
});

describe('isOutOfBounds', () => {
  test('returns true when the location is out of bounds', () => {
    expect(
      isOutOfBounds({ altitude: 0, latitude: 0, longitude: 0 })
    ).toBeTruthy();
    expect(
      isOutOfBounds({ altitude: 0, latitude: 0, longitude: 11.52515 })
    ).toBeTruthy();
    expect(
      isOutOfBounds({ altitude: 0, latitude: 48.14233, longitude: 0 })
    ).toBeTruthy();
    expect(
      isOutOfBounds({ altitude: 0, latitude: 48.14233, longitude: 11.52515 })
    ).toBeFalsy();
  });
});
