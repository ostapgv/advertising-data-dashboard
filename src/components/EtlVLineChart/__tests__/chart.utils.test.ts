import { getEtlVData, mapEtlVDataToChartConfig } from '../chart.utils';
import { EtlVData } from '../EtlVLineChart';
import { chartConfiguration } from '../chart.config';

describe('getEtlVData', () => {
  const rowData = [
    ['01.01.2019', 'Facebook Ads', 'Like', '1', '2'],
    ['02.01.2019', 'Facebook Ads', 'Offer', '3', '4'],
    ['03.01.2019', 'Facebook Ads', 'Like', '5', '6'],
    ['04.01.2019', 'Facebook Ads', 'Campaign', '7', '8'],
  ];
  const fullEtlVData: EtlVData = {
    clicks: [1, 3, 5, 7],
    dates: ['01.01.2019', '02.01.2019', '03.01.2019', '04.01.2019'],
    impressions: [2, 4, 6, 8],
  };

  it('returns filtered and decimated casted etlVData from rowData', () => {
    expect(getEtlVData(['Facebook Ads'], ['Like', 'Offer'], rowData)).toEqual({
      dates: ['01.01.2019', '02.01.2019', '03.01.2019'],
      clicks: [1, 3, 5],
      impressions: [2, 4, 6],
    });
    expect(getEtlVData([], ['Offer'], rowData)).toEqual({
      clicks: [3],
      dates: ['02.01.2019'],
      impressions: [4],
    });
    expect(getEtlVData(['Facebook Ads'], [], rowData)).toEqual(fullEtlVData);
    expect(getEtlVData([], [], rowData)).toEqual(fullEtlVData);
  });

  it('returns undefined when rowData in falsy', () => {
    expect(getEtlVData(['Facebook Ads'], ['Like'])).toEqual(undefined);
  });
});

describe('mapEtlVDataToChartConfig', () => {
  it('maps etlVData to chartConfig', () => {
    const etlVData: EtlVData = { dates: ['01.01.2019'], clicks: [1], impressions: [2] };

    expect(mapEtlVDataToChartConfig(etlVData)).toEqual({
      ...chartConfiguration,
      data: {
        ...chartConfiguration.data,
        labels: etlVData.dates,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        datasets: expect.arrayContaining([
          expect.objectContaining({ data: etlVData.clicks }),
          expect.objectContaining({ data: etlVData.impressions }),
        ]),
      },
    });
  });
});
