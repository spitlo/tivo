import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

import Parser from 'rss-parser'
import { compile } from 'yeahjs'
import { get } from 'httpie'

import feeds from '../src/feeds.js'

const INPUT_TEMPLATE = 'src/template.html'
const OUTPUT_HTML_FILE = 'dist/index.html'
const OUTPUT_JSON_FILE = 'dist/index.json'
const TEST_FILE = 'src/data.json'
const YOUTUBE_URL = 'yewtu.be'
const NOW = new Date()
const YEAR_IN_MS = 31536000000

const PARSER = new Parser({
  customFields: {
    item: [['media:group', 'group']],
  },
})

// Parse XML or JSON feeds
function parseFeed(response) {
  const contentType = response.headers['content-type']
    ? response.headers['content-type'].split(';')[0]
    : false

  if (!contentType) return false

  const contentTypes = [
    'application/json',
    'application/atom+xml',
    'application/rss+xml',
    'application/xml',
    'text/xml',
    'text/html', // This is kind of a gamble
  ]

  if (contentTypes.includes(contentType)) {
    return response.data
  }

  return false
}

export async function render(dev = false, write = false) {
  let videos = {}

  if (dev) {
    videos = JSON.parse(readFileSync(resolve(TEST_FILE)), { encoding: 'utf8' })
  } else {
    for (const [_channel, feed] of feeds) {
      try {
        const body = await get(feed).then(parseFeed)

        const contents =
          typeof body == 'string' ? await PARSER.parseString(body) : body

        contents.items.forEach((item) => {
          const pubDate = new Date(item.pubDate)
          const month = pubDate.getMonth() + 1
          const date = pubDate.getDate()
          const dateStr = `${pubDate.getFullYear()}-${
            month < 10 ? `0${month}` : month
          }-${date < 10 ? `0${date}` : date}`

          if (!videos[dateStr]) videos[dateStr] = []

          videos[dateStr].push({
            ...item,
            dateStr,
            youtube: item.link,
            link: `https://${YOUTUBE_URL}${item.link.split('youtube.com')[1]}`,
            thumbnail: item.group['media:thumbnail'][0]['$'].url,
            channel:
              `https://${YOUTUBE_URL}${contents.link.split('youtube.com')[1]}`,
          })
        })
      } catch (e) {
        console.error(e)
      }
    }

    if (write) {
      writeFileSync(resolve(TEST_FILE), JSON.stringify(videos), 'utf8')
    }
  }

  for (let day in videos) {
    // Sort videos per day by pubDate
    videos[day].sort((a, b) => {
      return a.pubDate < b.pubDate ? 1 : -1
    })
  }

  // Get a sorted list of days
  const days = Object.keys(videos).sort((a, b) => {
    return a < b ? 1 : -1
  })

  const now = NOW.toJSON()
  // const nowFormatted = `${NOW.toISOString().split('T')[0]} ${NOW.toISOString().split('T')[1].substring(0, 5)}`
  const nowFormatted = NOW.toISOString()

  const source = readFileSync(resolve(INPUT_TEMPLATE), { encoding: 'utf8' })
  const template = compile(source, { localsName: 'it' })
  const html = template({ videos, days, now, nowFormatted })
  writeFileSync(resolve(OUTPUT_HTML_FILE), html, { encoding: 'utf8' })
  writeFileSync(resolve(OUTPUT_JSON_FILE), JSON.stringify(videos, null, 2), {
    encoding: 'utf8',
  })
}

// function getNowDate() {
//   const offset = -4.0
//   let d = new Date()
//   const utc = d.getTime() + d.getTimezoneOffset() * 60000
//   d = new Date(utc + 3600000 * offset)
//   return d
// }
