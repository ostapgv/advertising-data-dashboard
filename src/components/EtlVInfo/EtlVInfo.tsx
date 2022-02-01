import './EtlInfo.scss';
import React from 'react';

const EtlVLineInfo: React.FC = () => (
  <div className="adv__etl-v-info">
    <p>- Select zero to N Datasources</p>
    <p>- Select zero to N Campaigns</p>
    <p className="adv__etl-v-info__small-text">(Where zero means all)</p>
    <br />
    <p>
      Hitting apply, filters the chart to show a timeseries for both Clicks and Impressions for given Datasources and
      Campaigns - logical AND
    </p>
  </div>
);

export default React.memo(EtlVLineInfo);
