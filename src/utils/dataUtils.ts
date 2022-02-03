import { zip } from 'lodash';

export const mapStringsToNumbers = (strings?: string[]): number[] => strings?.map((it) => Number(it)) || [];

export const transposeData = (data: string[][]) => zip(...data) as string[][];

export const decimateData = <T>(data: T[] = []): T[] => {
  let step = 0;
  if (data.length >= 10000) {
    step = 250;
  } else if (data.length >= 1000) {
    step = 25;
  }
  return step === 0 ? data : data.filter((value, index) => index % step === 0);
};
