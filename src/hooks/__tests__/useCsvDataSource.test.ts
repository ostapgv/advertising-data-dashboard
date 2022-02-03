import { renderHook } from '@testing-library/react-hooks';
import * as csvUtils from '../../utils/csvUtils';
import { ParseMeta, ParseResult } from 'papaparse';
import { useCsvDataSource } from '../useCsvDataSource';
import { sleep } from '../../utils/testUtils';

describe('useCsvDataSource', () => {
  const rawData = [
    ['col1', 'col2'],
    ['val1', 'val2'],
    ['val3', 'val4'],
  ];

  beforeEach(() => {
    jest
      .spyOn(csvUtils, 'parseRemoteCsvFile')
      .mockResolvedValue({ data: rawData, errors: [], meta: {} as ParseMeta } as ParseResult<string[]>);
  });

  it('parses remote csv file and returns its data without header columns', async () => {
    const hookResult = renderHook(() => useCsvDataSource('some.csv'));
    await hookResult.waitForNextUpdate();

    expect(hookResult.result.current).toEqual([
      ['val1', 'val2'],
      ['val3', 'val4'],
    ]);
  });

  it('returns nothing if csv parsing returns nothing', async () => {
    jest.spyOn(csvUtils, 'parseRemoteCsvFile').mockResolvedValue(undefined);

    const hookResult = renderHook(() => useCsvDataSource('some.csv'));
    await sleep(100);

    expect(hookResult.result.current).toBeUndefined();
  });
});
