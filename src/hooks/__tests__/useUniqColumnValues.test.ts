import { useUniqColumnValues } from '../useUniqColumnValues';
import { renderHook } from '@testing-library/react-hooks';

describe('useUniqColumnValues', () => {
  it('returns uniq column values from rawData', () => {
    const rawData = [
      ['first1', 'second1'],
      ['first2', 'second2'],
      ['first3', 'second3'],
    ];
    expect(renderHook(() => useUniqColumnValues(0, rawData)).result.current).toEqual(['first1', 'first2', 'first3']);
    expect(renderHook(() => useUniqColumnValues(1, rawData)).result.current).toEqual(['second1', 'second2', 'second3']);
  });
});
