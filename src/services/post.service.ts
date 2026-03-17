export async function GetListPost(): Promise<
  {
    id: number;
    userId: number;
    title: string;
    body: string;
  }[]
> {
  const url = `https://jsonplaceholder.typicode.com/posts?_limit=5`;
  const res = await fetch(url, {
    method: "GET",
  });
  const result = await res.json();
  return result;
}

export async function FindOnePost(id: string): Promise<{
  id: number;
  userId: number;
  title: string;
  body: string;
}> {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const res = await fetch(url, {
    method: "GET",
  });
  const result = await res.json();
  return result;
}
