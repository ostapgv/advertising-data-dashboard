import Papa, { ParseResult } from 'papaparse';

export const parseRemoteCsvFile = async <T>(url: string): Promise<ParseResult<T> | undefined> => {
  try {
    const response = await fetch(url);
    const csvString = await response.text();
    return Papa.parse(csvString, { dynamicTyping: true });
  } catch (error) {
    // TODO: handle errors in proper way (out of scope)
    console.log(error);
  }
};
