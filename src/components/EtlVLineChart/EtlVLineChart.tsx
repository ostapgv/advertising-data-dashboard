import './EtlVLineChart.scss';
import ChartWrapper from '../sdk/ChartWrapper/ChartWrapper';
import React from 'react';
import { mapEtlVDataToChartConfig } from './chart.utils';

export interface EtlVData {
  dates: string[];
  clicks: number[];
  impressions: number[];
}

const EtlVLineChart: React.FC<EtlVData> = ({ children, ...data }) => (
  <ChartWrapper chartConfiguration={mapEtlVDataToChartConfig(data)} className="adv__etl-v-chart" />
);

export default React.memo(EtlVLineChart);
