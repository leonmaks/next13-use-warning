export default async function ServerFetchPage() {
  const res = fetch('http://127.0.0.1:3000/api/hello')
  const data = await (await res).json()

  return <div>{JSON.stringify(data)}</div>
}
