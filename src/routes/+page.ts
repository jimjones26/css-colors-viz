import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
  const dataUrl: string = 'https://gist.githubusercontent.com/jimjones26/e247e70b645214321d3328b21c205277/raw/cssNamedColors.csv'
  const res = await fetch(dataUrl)
  const data = await res.text()
  return { data };
};