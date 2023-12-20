export default async function getOnePost(id) {
  // Fetch data from external API
  const res = await fetch(
    `https://api.lever.co/v0/postings/lucca/${id}?mode=json`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}
