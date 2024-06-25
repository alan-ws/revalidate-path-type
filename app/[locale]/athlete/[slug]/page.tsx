import { fetchData } from '../../../../lib/mockapi';

export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ locale: 'en', slug: 'tennis' }, { locale: 'nl', slug: 'cricket' }]
}

export default async function Page({ params }: { params: { locale: string, slug: string } }) {
  const data = await fetchData(params.slug === "tennis" ? "1" : "2")
  return <>
    <h1>{data.name}</h1>
    <p>{data.bio}</p>
    {data.city ?? <span>{data.city}</span>}
  </>
}
