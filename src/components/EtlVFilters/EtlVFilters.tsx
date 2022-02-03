import './EtlVFilters.scss';
import React, { useState } from 'react';
import { useUniqColumnValues } from '../../hooks/useUniqColumnValues';
import MultiSelect from '../sdk/MultiSelect/MultiSelect';
import { getEtlVData } from '../EtlVLineChart/chart.utils';
import { EtlVData } from '../EtlVLineChart/EtlVLineChart';

export interface EtlVFiltersProps {
  rawData: string[][];
  onChange: (chartData: EtlVData | undefined) => void;
}

const EtlVFilters: React.FC<EtlVFiltersProps> = ({ rawData, onChange }) => {
  const dataSources = useUniqColumnValues(1, rawData);
  const campaigns = useUniqColumnValues(2, rawData);
  const [selectedDataSources, setSelectedDataSources] = useState<string[]>([]);
  const [selectedCampaigns, setSelectedCampaigns] = useState<string[]>([]);

  const handleApplyFilters = () => {
    onChange(getEtlVData(selectedDataSources, selectedCampaigns, rawData));
  };

  return (
    <div className="adv__etl-v-filters">
      <label htmlFor="dataSources">Data sources</label>
      <MultiSelect name="dataSources" size={4} options={dataSources} onChange={setSelectedDataSources} />

      <label htmlFor="campaigns">Campaigns</label>
      <MultiSelect name="campaigns" size={10} options={campaigns} onChange={setSelectedCampaigns} />

      <button onClick={handleApplyFilters}>Apply</button>
    </div>
  );
};

export default React.memo(EtlVFilters);
