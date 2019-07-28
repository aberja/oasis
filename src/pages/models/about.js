'use strict'
const cooler = require('./lib/cooler')
const markdown = require('./lib/markdown')

const nullImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='

module.exports = {
  name: async (feedId) => {
    const ssb = await cooler.connect()
    return cooler.get(
      ssb.about.socialValue, {
        key: 'name',
        dest: feedId
      })
  },
  image: async (feedId) => {
    const ssb = await cooler.connect()
    const raw = await cooler.get(
      ssb.about.socialValue, {
        key: 'image',
        dest: feedId
      }
    )

    if (raw == null || raw.link == null) {
      return nullImage
    } else if (typeof raw.link === 'string') {
      return raw.link
    } else {
      return raw
    }
  },
  description: async (feedId) => {
    const ssb = await cooler.connect()
    const raw = await cooler.get(
      ssb.about.socialValue, {
        key: 'description',
        dest: feedId
      })
    return markdown(raw)
  }
}
