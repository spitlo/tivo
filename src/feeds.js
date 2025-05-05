const feeds = [
  [
    'Andrew Huang',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCdcemy56JtVTrsFIOoqvV8g',
  ],
  [
    'Adam Savage’s One Day Builds',
    'https://www.youtube.com/feeds/videos.xml?playlist_id=PLJtitKU0CAej22ZWBqrimPkn0Bbo6ci-r',
  ],
  [
    'Simone Giertz',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UC3KEoMzNz8eYnwBC34RaKCQ',
  ],
  [
    'Benn Jordan',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCshObcm-nLhbu8MY50EZ5Ng',
  ],
  [
    'True Cuckoo',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCOojfmX4Wq3Ww-XP_IkvviQ',
  ],
  [
    'JAde Wii',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCqjAXHR5DHTCahIHpg7vspg',
  ],
  [
    'Rhythm Roulette',
    'https://www.youtube.com/feeds/videos.xml?playlist_id=PL_QcLOtFJOUgNxURr8B4lNtf_3e9fWZzl',
  ],
  [
    'Simon The Magpie',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCnbfRvqQcfw3eL71HfjROOQ',
  ],
  [
    'Laura Kampf',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCRix1GJvSBNDpEFY561eSzw',
  ],
  [
    'So Wassup',
    'https://www.youtube.com/feeds/videos.xml?playlist_id=PLWDrXC9_8Kmgwu2zeWdDU1n6fPqIh98Xr',
  ],
  [
    'Jim Lill',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCvAovXWLq8Q6VITKAB_Rjww',
  ],
  [
    '12tone',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCTUtqcDkzw7bisadh6AOx5w',
  ],
  [
    'Nicolas Bras',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCqzB9Ks5H939XLuSuVLuPVw',
  ],
  [
    'Fuse | Crate Diggers',
    'https://www.youtube.com/feeds/videos.xml?playlist_id=PL0DA2B4BAA4791B0F',
  ],
  [
    'Vsauce',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UC6nSFpj9HTCZ5t-N3Rm3-HA',
  ],
  [
    'Computerphile',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UC9-y-6csu5WGm29I7JiwpnA',
  ],
  [
    'LEMMiNO',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCRcgy6GzDeccI7dkbbBna3Q',
  ],
  [
    'Veritasium',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCHnyfMqiRRG1u-2MsSQLbXA',
  ],
  [
    'Tiny Desk Concerts',
    'https://www.youtube.com/feeds/videos.xml?playlist_id=PL1B627337ED6F55F0',
  ],
  [
    'Love Hulthén',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UC3u4Stbc_FJ7t2KR9JEh9Aw',
  ],
  [
    'Wintergatan',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCcXhhVwCT6_WqjkEniejRJQ',
  ],
  [
    'J. Kenji López-Alt',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCqqJQ_cXSat0KIAVfIfKkVA',
  ],
  [
    'Internet Today',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCyZVCV9xhrCyz4hPehvb4Wg',
  ],
  [
    'The New York Times',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCqnbDFdCpuN8CMEg0VuEBqA',
  ],
  [
    'Look Mum No Computer',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCafxR2HWJRmMfSdyZXvZMTw',
  ],
  [
    'Sabine Hossenfelder',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UC1yNl2E66ZzKApQdRuTQ4tw',
  ],
  [
    'PBS Space Time',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UC7_gcs09iThXybpVgjHZ_7g',
  ],
  [
    'Electronoobs',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCjiVhIvGmRZixSzupD0sS9Q',
  ],
  [
    'Internet Historian',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCR1D15p_vdP3HkrH8wgjQRw',
  ],
  [
    'Mic the Snare',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UC3qbvcgOHXRIFIofXyd1vBw',
  ],
  [
    'Jameson Nathan Jones',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCamahlkvlAn7xzMsE6o5fnQ',
  ],
  [
    'Joshua Ellingson',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UClTdXAFYm7nftFdLp8fKVmA',
  ],
  [
    'Mattias Krantz',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCEgm-3RvRn4nCR-fGGVsfdQ',
  ],
  [
    'Nerd Musician',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCyqCwyBJ98fR-CPoyXUxY5w',
  ],
  [
    'Colin Furze',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCp68_FLety0O-n9QU6phsgw',
  ],
  [
    'Emily the Engineer',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UC_4YBM08hcpJqLl3vvgTqXg',
  ],
  [
    'Tom 7',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UC3azLjQuz9s5qk76KEXaTvA',
  ],
  [
    'Practical Engineering',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCMOqf8ab-42UUQIdVoKwjlQ',
  ],
  [
    'Digging the Greats',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCGSg3iQgRQ5M9CpluqkMAZg',
  ],
  [
    'David Hilowitz',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCCoAJ5JYKYTMubpTIsWi70w',
  ],
  [
    'OMA',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCgtSzqR7D0-BgEFcfhrmWVA',
  ],
  [
    'Internet Comment Etiquette',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCyWDmyZRjrGHeKF-ofFsT5Q',
  ],
]

export default feeds
