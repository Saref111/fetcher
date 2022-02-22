const commonHeaders = { 
 'Content-Type': 'application/json', 
}; 
class Fetcher { 
 async get(url, cb, headers) { 
  const resp = await fetch(url, { 
   method: 'GET', 
   headers: { 
    ...commonHeaders, 
    ...headers, 
   }, 
  }); 
 
  if (cb) { 
   return cb(await resp.json()); 
  } 
 
  return await resp.json(); 
 } 
 
 async post(url, data, cb, headers) { 
  const resp = await fetch(url, { 
   method: 'POST', 
   body: JSON.stringify(data), 
   headers: { 
    ...commonHeaders, 
    ...headers, 
   }, 
  }); 
 
  if (cb) { 
   return cb(await resp.json()); 
  } 
 
  return await resp.json(); 
 } 
 
 async delete(url, cb, headers) { 
  const resp = await fetch(url, { 
   method: 'DELETE', 
   headers: { 
    ...commonHeaders, 
    ...headers, 
   }, 
  }); 
 
  if (cb) { 
   return cb(resp); 
  } 
 
  return resp; 
 } 
 
 async put(url, data, cb, headers) { 
  const resp = await fetch(url, { 
   method: 'PUT', 
   body: JSON.stringify(data), 
   headers: { 
    ...commonHeaders, 
    ...headers, 
   }, 
  }); 
 
  if (cb) { 
   return cb(await resp.json()); 
  } 
 
  return await resp.json(); 
 } 
} 
 
export default new Fetcher();