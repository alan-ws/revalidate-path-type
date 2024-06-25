export async function fetchData(id: string) {
  const res = await fetch(`https://667a9ab8bd627f0dcc8fb34b.mockapi.io/athlete/${id}`)
  const data = await res.json()

  console.log(`[Next.js] Fetching data for /${id}`);

  return {
    name: data.name,
    bio: data.biography,
    city: data.city
  };
}
