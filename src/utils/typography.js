import Typography from 'typography';

const fontStack = [
  `-apple-system`,
  `BlinkMacSystemFont`,
  `Segoe UI`,
  `Roboto`,
  `Oxygen-Sans`,
  `Ubuntu`,
  `Cantarell`,
  `Helvetica Neue`,
  `sans-serif`,
];

const typography = new Typography({
  baseFontSize: `16px`,
  baseLineHeight: 1.5,
  scaleRatio: 1.5,
  headerFontFamily: fontStack,
  bodyFontFamily: fontStack,
  headerColor: `hsl(0, 0%, 17%)`,
  bodyColor: `hsl(0, 0%, 5%)`,
  headerWeight: 600,
  bodyWeight: 400,
  boldWeight: 600,
  blockMarginBottom: `24px`,
  includeNormalize: true,
  overrideStyles: ({adjustFontSizeTo, rhythm}, options, styles) => ({
    'a': { color: `#cc3300` },
    'a:hover': { textDecoration: `none` },
    '.typography-align-left': { textAlign: `left` },
    '.typography-align-center': { textAlign: `center` },
    '.typography-align-right': { textAlign: `right` },
    '.typography-line-break-double': { marginBottom: rhythm(2) },
    '.typography-line-break-full': { marginBottom: rhythm(1) },
    '.typography-line-break-half': { marginBottom: rhythm(0.5) },
    '.typography-line-break-none': { marginBottom: rhythm(0) },
    '.typography-h1': styles.h1,
    '.typography-h2': styles.h2,
    '.typography-h3': styles.h3,
    '.typography-h4': styles.h4,
    '.typography-h5': styles.h5,
    '.typography-h6': styles.h6,
    '.typography-regular': { fontWeight: options.bodyWeight },
    '.typography-semi-bold': { fontWeight: options.boldWeight },
    '.typography-small': { ...adjustFontSizeTo(`12px`) },
  }),
});

const { rhythm, scale } = typography;

export { rhythm, scale, typography as default };
