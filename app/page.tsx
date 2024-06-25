export default async function Home() {
  const res = await fetch("https://667a9ab8bd627f0dcc8fb34b.mockapi.io/athlete")
  const data = await res.json()
  return <><h1>ALL PLAYER</h1>{
    data && data.map((v: any, i: any) => {
      return <h3>{v.name}</h3>
    })
  }</>
}
