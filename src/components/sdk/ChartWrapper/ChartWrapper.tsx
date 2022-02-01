import React, { useRef } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';

export interface ChartWrapperProps {
  chartConfiguration: ChartConfiguration;
  className?: string;
}

const ChartWrapper: React.FC<ChartWrapperProps> = ({ chartConfiguration, className }) => {
  const chartRef = useRef<Chart | null>(null);

  const canvasRefCallback = (canvas: HTMLCanvasElement | null) => {
    if (!canvas) return;
    const context = canvas.getContext('2d');

    if (context) {
      chartRef.current?.destroy();
      chartRef.current = new Chart(context, chartConfiguration);
    }
  };

  return (
    <div className={className}>
      <canvas ref={canvasRefCallback} />
    </div>
  );
};

export default React.memo(ChartWrapper);
