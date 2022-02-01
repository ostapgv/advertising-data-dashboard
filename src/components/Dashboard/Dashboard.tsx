import './Dashboard.scss';
import React, { useState } from 'react';
import { useCsvDataSource } from '../../hooks/useCsvDataSource';
import EtlVLineChart, { EtlVData } from '../EtlVLineChart/EtlVLineChart';
import Filters from '../EtlVFilters/EtlVFilters';
import EtlVLineInfo from '../EtlVInfo/EtlVInfo';

const Dashboard: React.FC = () => {
  const rawData = useCsvDataSource<string[]>('/local.csv');
  const [chartData, setChartData] = useState<EtlVData>();

  return (
    <div className="adv__dashboard">
      <h1>Adverity Advertising Data ETL-V Challenge</h1>
      <EtlVLineInfo />
      <div className="adv__dashboard__data">
        {rawData && <Filters rawData={rawData} onChange={setChartData} />}
        {chartData && <EtlVLineChart {...chartData} />}
      </div>
    </div>
  );
};

export default React.memo(Dashboard);
