'use client'
import { use } from 'react'

async function fetchData() {
  const res = await fetch('http://localhost:3000/api/hello')
  return res.json()
}

export default function ClientFetchOkPage() {
  const data = use(fetchData())

  return <div>{JSON.stringify(data)}</div>
}
