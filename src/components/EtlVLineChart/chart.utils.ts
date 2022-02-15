import { EtlVData } from './EtlVLineChart';
import { clone, zip } from 'lodash';
import { ChartConfiguration } from 'chart.js/auto';
import { chartConfiguration } from './chart.config';

const filterRawData = (selectedDataSources: string[], selectedCampaigns: string[], rawData: string[][]): string[][] => {
  if (selectedDataSources.length && selectedCampaigns.length) {
    return rawData.filter(
      ([, dataSource, campaign]) => selectedDataSources.includes(dataSource) && selectedCampaigns.includes(campaign),
    );
  } else if (selectedDataSources.length) {
    return rawData.filter(([, dataSource]) => selectedDataSources.includes(dataSource));
  } else if (selectedCampaigns.length) {
    return rawData.filter(([, , campaign]) => selectedCampaigns.includes(campaign));
  }
  return rawData;
};

const groupToEtlVData = (data: string[][]): EtlVData => {
  const groupedRawData: Record<string, [string, number, number]> = {};

  data.forEach(([date, , , clicks, impressions]) => {
    const [, existingClicks, existingImpressions] = groupedRawData[date] || [];
    if (!groupedRawData[date]) {
      groupedRawData[date] = [date, Number(clicks), Number(impressions)];
    } else {
      groupedRawData[date] = [date, existingClicks + Number(clicks), existingImpressions + Number(impressions)];
    }
  });

  const [dates, clicks, impressions] = zip(...Object.values(groupedRawData)) as [string[], number[], number[]];

  return { dates, clicks, impressions };
};

export const getEtlVData = (
  selectedDataSources: string[],
  selectedCampaigns: string[],
  rawData?: string[][],
): EtlVData | undefined => {
  if (!rawData) return;

  const filteredRawData = filterRawData(selectedDataSources, selectedCampaigns, rawData);
  return groupToEtlVData(filteredRawData);
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
