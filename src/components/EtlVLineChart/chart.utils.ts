import { EtlVData } from './EtlVLineChart';
import { clone } from 'lodash';
import { mapStringsToNumbers, decimateData, transposeData } from '../../utils/dataUtils';
import { ChartConfiguration } from 'chart.js/auto';
import { chartConfiguration } from './chart.config';

export const getEtlVData = (
  selectedDataSources: string[],
  selectedCampaigns: string[],
  rawData?: string[][],
): EtlVData | undefined => {
  if (!rawData) return;

  let filteredRawData: string[][] = rawData;
  if (selectedDataSources.length || selectedCampaigns.length) {
    filteredRawData = rawData.filter(
      ([, dataSource, campaign]) => selectedDataSources.includes(dataSource) && selectedCampaigns.includes(campaign),
    );
  }

  const decimated = decimateData(filteredRawData);
  const decimatedAndTransposed = transposeData(decimated);
  const [dates, , , clicks, impressions] = decimatedAndTransposed;

  return { dates, clicks: mapStringsToNumbers(clicks), impressions: mapStringsToNumbers(impressions) };
};

export const mapEtlVDataToChartConfig = ({
  dates,
  clicks,
  impressions,
}: EtlVData): ChartConfiguration<'line', number[], string> => {
  const config = clone(chartConfiguration);
  const [clicksDataset, impressionsDataset] = config.data.datasets;

  config.data.labels = dates;
  clicksDataset.data = clicks;
  impressionsDataset.data = impressions;
  return config;
};
