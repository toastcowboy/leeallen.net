import Typography from 'typography';

const fontStack = [
  'Raleway',
  'Helvetica Neue',
  'Helvetica',
  'Arial',
  'sans-serif',
];

export default new Typography(
  {
    baseFontSize: '16px',
    baseLineHeight: 1.5,
    scaleRatio: 1.5,
    googleFonts: [
      {
        name: 'Raleway',
        styles: [
          '400',
          '600',
        ],
      },
    ],
    headerFontFamily: fontStack,
    bodyFontFamily: fontStack,
    headerColor: 'inherit',
    bodyColor: 'hsl(0, 0%, 0%, 0.8)',
    headerWeight: 600,
    bodyWeight: 400,
    boldWeight: 600,
    blockMarginBottom: '24px',
    includeNormalize: true,
    overrideStyles: ({adjustFontSizeTo, rhythm}, options, styles) => ({
      '.typography-regular': {
        fontWeight: 400,
      },
      '.typography-semi-bold': {
        fontWeight: 600,
      },
      '.typography-small': {
        ...adjustFontSizeTo('12px'),
      },
    }),
  },
);
