import Typography from 'typography';

const typography = new Typography(
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
    headerFontFamily: ['Raleway', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif',],
    bodyFontFamily: ['Raleway', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif',],
    headerGray: 20,
    headerGrayHue: 0,
    bodyGray: 20,
    bodyGrayHue: 0,
    headerWeight: 600,
    bodyWeight: 400,
    boldWeight: 600,
    blockMarginBottom: '24px',
    includeNormalize: true,
    // overrideStyles: ({adjustFontSizeTo, rhythm}, options, styles) => ({
    //   h1: {
    //     fontFamily: ['Montserrat', 'sans-serif'].join(','),
    //   },
    //   blockquote: {
    //     ...adjustFontSizeTo('19px'),
    //     color: gray(41),
    //     fontStyle: 'italic',
    //     paddingLeft: rhythm(13 / 16),
    //     marginLeft: rhythm(-1),
    //     borderLeft: `${rhythm(3 / 16)} solid ${gray(10)}`,
    //   },
    //   'blockquote > :last-child': {
    //     marginBottom: 0,
    //   },
    // }),
  },
);

export default typography;
