class Fetcher {
  constructor(config) {
    this.config = config
  }

  async get ({url, cb, headers}) {
    const resp = await fetch(url, {
      method: 'GET',
      headers: {
        ...this.config.commonHeaders,
        ...headers
      }
    })

    if (cb) {
      return cb(await resp.json())
    }

    return await resp.json()
  }

  async post ({url, data, cb, headers}) {
    const resp = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        ...this.config.commonHeaders,
        ...headers
      }
    })

    if (cb) {
      return cb(await resp.json())
    }

    return await resp.json()
  }

  async delete ({url, cb, headers}) {
    const resp = await fetch(url, {
      method: 'DELETE',
      headers: {
        ...this.config.commonHeaders,
        ...headers
      }
    })

    if (cb) {
      return cb(await resp.json())
    }

    return await resp.json()
  }

  async put ({url, data, cb, headers}) {
    const resp = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        ...this.config.commonHeaders,
        ...headers
      }
    })

    if (cb) {
      return cb(await resp.json())
    }

    return await resp.json()
  }
}

export default Fetcher
