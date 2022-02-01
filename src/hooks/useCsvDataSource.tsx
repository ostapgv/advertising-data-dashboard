import { useEffect, useState } from 'react';
import { parseRemoteCsvFile } from '../utils/csvUtils';

export const useCsvDataSource = <T,>(url: string): T[] | undefined => {
  const [rawData, setRawData] = useState<T[]>();

  useEffect(() => {
    void (async () => {
      const parseResult = await parseRemoteCsvFile<T>(url);
      if (parseResult && parseResult.errors.length === 0) {
        setRawData(parseResult.data.slice(1));
      }
    })();
  }, [url]);

  return rawData;
};
