const BREAKPOINTS = {
  phoneMax: 600,
  tabletMax: 950,
  laptopMax: 1300,
}

export const QUERIES = {
  phone: `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`,
  tablet: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  laptop: `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
}
