'use client'
import { use } from 'react'

export default function ClientFetchErrorPage() {
  const data = use(
    fetch('http://localhost:3000/api/hello').then((res) => res.json())
  )

  return <div>{JSON.stringify(data)}</div>
}
