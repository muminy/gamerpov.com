export const pageview = (url: string, GAID: string) => {
  window.gtag("config", GAID, {
    path_url: url,
  })
}
