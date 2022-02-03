import React from 'react';

let renderIndex = 0;

export default () => {
  renderIndex++;
  return (
    <div data-testid="chart-wrapper">
      <span data-testid="canvas-render-index">{renderIndex}</span>
      <canvas data-testid="canvas" />
    </div>
  );
};
