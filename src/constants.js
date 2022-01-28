const colourMap ={
  orange: {
    header: '#FDAC6A',
    dot1: {
      background: '#FEA4C2',
      border: '#E03361'
    },
    dot2: {
      background: '#FF817A',
      border: '#C23F47',
    }
  },
  red: {
    header: '#FF817A',
    dot1: {
      background: '#69E7D6',
      border: '#518F8A'
    },
    dot2: {
      background: '#51B7E2',
      border: '#2B6EB2'
    }
  },
  pink: {
    header: '#FEA4C2',
    dot1: {
      background: '#A3A3D5',
      border: '#3A4C8E'
    },
    dot2: {
      background: '#69E7D6',
      border: '#518F8A'
    }
  },
  purple: {
    header: '#A3A3D5',
    dot1: {
      background: '#FDAC6A',
      border: '#F77052'
    },
    dot2: {
      background: '#51B7E2',
      border: '#2B6EB2'
    }
  },
  mint: {
    header: '#69E7D6',
    dot1: {
      background: '#FF817A',
      border: '#C23F47'
    },
    dot2: {
      background: '#FDAC6A',
      border: '#F77052'
    }
  }
}

// ResponsiveGridLayout constants
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
};
const breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };
const cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };
const margin = [10, 10]

const sortingColoursMap = {
  'default': {
    background: '#51B8E2',
    border: '#2B6EB2'
  },
  'compare': {
    background: '#FDAC6A',
    border: '#F77052'
  },
  'swap': {
    background: '#FFD65A',
    border: '#DAAF2F'
  },
  'sorted': {
    background: '#11C059',
    border: '#0B622F'
  }
}

export { colourMap, layouts, breakpoints, cols, margin, sortingColoursMap };