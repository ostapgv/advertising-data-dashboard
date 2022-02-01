import { useEffect, useState } from 'react';
import { uniq } from 'lodash';

export const useUniqColumnValues = (columnIndex: number, rawData: string[][]): string[] => {
  const [columnValues, setColumnValues] = useState<string[]>([]);

  useEffect(() => {
    if (rawData) {
      const uniqColumnValues = uniq(
        rawData
          .map((row) => row[columnIndex])
          .filter((val) => val)
          .sort(),
      );
      setColumnValues(uniqColumnValues);
    }
  }, [columnIndex, rawData]);
  return columnValues;
};
