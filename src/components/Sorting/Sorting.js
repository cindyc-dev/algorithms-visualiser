import React from 'react';
import Card from '../Card';
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Sorting() {
  const layouts = {
    lg: [
      { i: 'input', x: 0, y: 0, w: 3, h: 3 },
      { i: 'cases', x: 0, y: 1, w: 3, h: 2 },
      { i: 'controls', x: 4, y: 2, w: 9, h: 1 },
      { i: 'visualisation', x: 4, y: 3, w: 9, h: 3 },
      { i: 'explanation', x: 4, y: 4, w: 9, h: 1 },
    ],
    md: [
      { i: 'input', x: 0, y: 0, w: 3, h: 3 },
      { i: 'cases', x: 0, y: 1, w: 3, h: 2 },
      { i: 'controls', x: 3, y: 2, w: 7, h: 1 },
      { i: 'visualisation', x: 3, y: 3, w: 7, h: 3 },
      { i: 'explanation', x: 3, y: 4, w: 7, h: 1 },
    ],
    sm: [
      { i: 'input', x: 0, y: 0, w: 2, h: 3 },
      { i: 'cases', x: 0, y: 1, w: 2, h: 2 },
      { i: 'controls', x: 2, y: 2, w: 4, h: 1 },
      { i: 'visualisation', x: 2, y: 3, w: 4, h: 3 },
      { i: 'explanation', x: 2, y: 4, w: 4, h: 1 },
    ],
    xs: [
      { i: 'input', x: 0, y: 0, w: 4, h: 1 },
      { i: 'cases', x: 0, y: 6, w: 4, h: 1 },
      { i: 'controls', x: 0, y: 1, w: 4, h: 1 },
      { i: 'visualisation', x: 0, y: 2, w: 4, h: 3 },
      { i: 'explanation', x: 0, y: 3, w: 4, h: 1 },
    ],
    xxs: [
      { i: 'input', x: 0, y: 0, w: 2, h: 1 },
      { i: 'cases', x: 0, y: 6, w: 2, h: 1 },
      { i: 'controls', x: 0, y: 1, w: 2, h: 1 },
      { i: 'visualisation', x: 0, y: 2, w: 2, h: 3 },
      { i: 'explanation', x: 0, y: 3, w: 2, h: 1 },
    ]
  }
  return (
    <div>
      <div className='title'>SORTING</div>
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        draggableHandle='.card-drag-handle'
        margin={[10, 10]}
      >
        <div key='input'><Card colour='orange' header='input'/></div>
        <div key='cases'><Card colour='red' header='cases'/></div>
        <div key='controls'><Card colour='pink' header='controls'/></div>
        <div key='visualisation'><Card colour='purple' header='visualisation'/></div>
        <div key='explanation'><Card colour='mint' header='explanation'/></div>
      </ResponsiveGridLayout>
    </div>
  );
}
