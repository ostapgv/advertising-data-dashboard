import { decimateData, mapStringsToNumbers, transposeData } from '../dataUtils';
import { range } from 'lodash';

describe('mapStringsToNumbers', () => {
  it('maps string array to number array', async () => {
    expect(mapStringsToNumbers(['1', '2', '3'])).toEqual([1, 2, 3]);
  });

  it('returns empty array when passed strings is undefined', async () => {
    expect(mapStringsToNumbers()).toEqual([]);
  });
});

describe('transposeData', () => {
  it('transposes data matrix', async () => {
    const data = [
      ['1', '2', '3'],
      ['4', '5', '6'],
    ];
    const expectedData = [
      ['1', '4'],
      ['2', '5'],
      ['3', '6'],
    ];

    expect(transposeData(data)).toEqual(expectedData);
  });
});

describe('decimateData', () => {
  it('returns decimated data with step 250 when passed data length >= 10000', async () => {
    const data = range(10001);

    expect(decimateData(data)).toEqual(expect.not.arrayContaining([25, 50, 75]));
    expect(decimateData(data)).toEqual(expect.arrayContaining([250, 500, 750]));
  });

  it('returns decimated data with step 25 when passed data length >= 1000', async () => {
    const data = range(1500);

    expect(decimateData(data)).toEqual(expect.arrayContaining([25, 50, 75]));
  });

  it('returns passed data when data length < 1000', async () => {
    const data = range(999);

    expect(decimateData(data)).toEqual(data);
  });

  it('returns empty array when no data passed', async () => {
    expect(decimateData()).toEqual([]);
  });
});
