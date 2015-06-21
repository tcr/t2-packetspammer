{
  'targets': [
    {
      "target_name": "packetspammer",
      'sources': [
        'packetspammer.c',
        'radiotap.c',
        'main.cc',
      ],
      'libraries': [
        '-lpcap'
      ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ],
    }
  ]
}
