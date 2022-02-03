import './Dashboard.scss';
import React, { useEffect, useState } from 'react';
import { useCsvDataSource } from '../../hooks/useCsvDataSource';
import EtlVLineChart, { EtlVData } from '../EtlVLineChart/EtlVLineChart';
import Filters from '../EtlVFilters/EtlVFilters';
import EtlVLineInfo from '../EtlVInfo/EtlVInfo';
import { getEtlVData } from '../EtlVLineChart/chart.utils';

const Dashboard: React.FC = () => {
  // Csv file url set to the local fallback option to speed-up the downloading, it can be easily replaced to provided url.
  const rawData = useCsvDataSource<string[]>('/local.csv');
  const [chartData, setChartData] = useState<EtlVData>();

  useEffect(() => {
    if (rawData) {
      const initialChartData = getEtlVData([], [], rawData);
      setChartData(initialChartData);
    }
  }, [rawData, setChartData]);

  return (
    <div className="adv__dashboard">
      <h1>Adverity Advertising Data ETL-V Challenge</h1>
      <EtlVLineInfo />
      {rawData && chartData && (
        <div className="adv__dashboard__data">
          <Filters rawData={rawData} onChange={setChartData} />
          <EtlVLineChart {...chartData} />
        </div>
      )}
    </div>
  );
};

export default React.memo(Dashboard);
