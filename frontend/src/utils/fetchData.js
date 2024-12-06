export async function fetchData(endpoint) {
    const res = await fetch(`http://localhost:4000${endpoint}`)
    const data = await res.json()
    return data
  }
  