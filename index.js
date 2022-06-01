addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

const corsHeaders = {
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Method': 'GET',
  'Access-Control-Allow-Origin': 'localhost:4200'
}

// const getuserid = async request => {
  
// }

async function handleRequest(request) {
  if (request.method === "OPTIONS") {
    return new Response("OK", {headers: corsHeaders})
  }
  if (request.method === "POST") {
    return getuserid(request)
  }
}
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  const CLIENT_ID = "DVjydLOUaTcBBJKq9c4GqQN1WQ7yqhfvIBi_aYOHKxk"
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts", {
    headers: {
      Autherization : `Client-ID ${CLIENT_ID}`
    }
  })
  const data = await resp.json()
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json'
    }
  })


  const { query} = await request.json()
  return new Response(`Hello ${query}!`)
}
