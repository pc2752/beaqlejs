// configure the test here
var TestConfig = {
  "TestName": "Source Separation Evaluation",
  "LoopByDefault": true,
  "ShowFileIDs": false,
  "ShowResults": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": true,
  "BeaqleServiceURL": "/sourcesepeval/web_service/beaqleJS_Service.php",
  "SupervisorContact": "",
  "RandomizeTestOrder": false,
  "MaxTestsPerRun": 45,
  "AudioRoot": "",
  "Testsets": [
    //
    {
      "Name": "Intelligibility 1",
      "TestID": "id1",
      "Files": {
        "A": "audio/21063_chorus_1_FASST.mp3",
        "B": "audio/21063_chorus_1_predf0.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 2",
      "TestID": "id2",
      "Files": {
        "A": "audio/21084_verse_1_predf0.mp3",
        "B": "audio/21084_verse_1_DCS.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 3",
      "TestID": "id3",
      "Files": {
        "A": "audio/31129_chorus_4_FASST.mp3",
        "B": "audio/31129_chorus_4_predf0.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 4",
      "TestID": "id4",
      "Files": {
        "A": "audio/31114_verse_3_FASST.mp3",
        "B": "audio/31114_verse_3_DCS.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 5",
      "TestID": "id5",
      "Files": {
        "A": "audio/45435_verse_1_predf0.mp3",
        "B": "audio/45435_verse_1_DCS.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 6",
      "TestID": "id6",
      "Files": {
        "A": "audio/31114_verse_1_FASST.mp3",
        "B": "audio/31114_verse_1_DCS.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 7",
      "TestID": "id7",
      "Files": {
        "A": "audio/31114_verse_2_FASST.mp3",
        "B": "audio/31114_verse_2_DCS.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 8",
      "TestID": "id3",
      "Files": {
        "A": "audio/31129_chorus_1_FASST.mp3",
        "B": "audio/31129_chorus_1_predf0.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 9",
      "TestID": "id3",
      "Files": {
        "A": "audio/31129_chorus_2_DCS.mp3",
        "B": "audio/31129_chorus_2_predf0.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 10",
      "TestID": "id10",
      "Files": {
        "A": "audio/21084_verse_3_predf0.mp3",
        "B": "audio/21084_verse_3_DCS.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 11",
      "TestID": "id11",
      "Files": {
        "A": "audio/31101_verse_2_FASST.mp3",
        "B": "audio/31101_verse_2_predf0.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 12",
      "TestID": "id12",
      "Files": {
        "A": "audio/31136_verse_1_FASST.mp3",
        "B": "audio/31136_verse_1_DCS.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 13",
      "TestID": "id13",
      "Files": {
        "A": "audio/21063_chorus_2_FASST.mp3",
        "B": "audio/21063_chorus_2_predf0.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 14",
      "TestID": "id14",
      "Files": {
        "A": "audio/31101_verse_3_predf0.mp3",
        "B": "audio/31101_verse_3_DCS.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 15",
      "TestID": "id15",
      "Files": {
        "A": "audio/31101_verse_1_DCS.mp3",
        "B": "audio/31101_verse_1_FASST.mp3",
        "X": " ",
        "Y": " ",
      }
    },    //
    {
      "Name": "Separation 1",
      "TestID": "id1",
      "Files": {
        "A": "audio/21063_chorus_1_FASST.mp3",
        "B": "audio/21063_chorus_1_predf0.mp3",
        "X": "audio/21063_chorus_1_ori.mp3 ",
        "Y": "audio/21063_chorus_1_mix.mp3 ",
      }
    },
    {
      "Name": "Separation 2",
      "TestID": "id2",
      "Files": {
        "A": "audio/21084_verse_1_predf0.mp3",
        "B": "audio/21084_verse_1_DCS.mp3",
        "X": "audio/21084_verse_1_ori.mp3",
        "Y": "audio/21084_verse_1_mix.mp3",
      }
    },
    {
      "Name": "Separation 3",
      "TestID": "id3",
      "Files": {
        "A": "audio/31129_chorus_4_FASST.mp3",
        "B": "audio/31129_chorus_4_predf0.mp3",
        "X": "audio/31129_chorus_4_ori.mp3",
        "Y": "audio/31129_chorus_4_mix.mp3",
      }
    },
    {
      "Name": "Separation 4",
      "TestID": "id4",
      "Files": {
        "A": "audio/31114_verse_3_FASST.mp3",
        "B": "audio/31114_verse_3_DCS.mp3",
        "X": "audio/31114_verse_3_ori.mp3",
        "Y": "audio/31114_verse_3_mix.mp3",
      }
    },
    {
      "Name": "Separation 5",
      "TestID": "id5",
      "Files": {
        "A": "audio/45435_verse_1_predf0.mp3",
        "B": "audio/45435_verse_1_DCS.mp3",
        "X": "audio/45435_verse_1_ori.mp3",
        "Y": "audio/45435_verse_1_mix.mp3",
      }
    },
    {
      "Name": "Separation 6",
      "TestID": "id6",
      "Files": {
        "A": "audio/31114_verse_1_FASST.mp3",
        "B": "audio/31114_verse_1_DCS.mp3",
        "X": "audio/31114_verse_1_ori.mp3",
        "Y": "audio/31114_verse_1_mix.mp3",
      }
    },
    {
      "Name": "Separation 7",
      "TestID": "id7",
      "Files": {
        "A": "audio/31114_verse_2_FASST.mp3",
        "B": "audio/31114_verse_2_DCS.mp3",
        "X": "audio/31114_verse_2_ori.mp3",
        "Y": "audio/31114_verse_2_mix.mp3",
      }
    },
    {
      "Name": "Separation 8",
      "TestID": "id3",
      "Files": {
        "A": "audio/31129_chorus_1_FASST.mp3",
        "B": "audio/31129_chorus_1_predf0.mp3",
        "X": "audio/31129_chorus_1_ori.mp3",
        "Y": "audio/31129_chorus_1_mix.mp3",
      }
    },
    {
      "Name": "Separation 9",
      "TestID": "id3",
      "Files": {
        "A": "audio/31129_chorus_2_DCS.mp3",
        "B": "audio/31129_chorus_2_predf0.mp3",
        "X": "audio/31129_chorus_2_ori.mp3",
        "Y": "audio/31129_chorus_2_mix.mp3",
      }
    },
    {
      "Name": "Separation 10",
      "TestID": "id10",
      "Files": {
        "A": "audio/21084_verse_3_predf0.mp3",
        "B": "audio/21084_verse_3_DCS.mp3",
        "X": "audio/21084_verse_3_ori.mp3",
        "Y": "audio/21084_verse_3_mix.mp3",
      }
    },
    {
      "Name": "Separation 11",
      "TestID": "id11",
      "Files": {
        "A": "audio/31101_verse_2_FASST.mp3",
        "B": "audio/31101_verse_2_predf0.mp3",
        "X": "audio/31101_verse_2_ori.mp3",
        "Y": "audio/31101_verse_2_mix.mp3",
      }
    },
    {
      "Name": "Separation 12",
      "TestID": "id12",
      "Files": {
        "A": "audio/31136_verse_1_FASST.mp3",
        "B": "audio/31136_verse_1_DCS.mp3",
        "X": "audio/31136_verse_1_ori.mp3",
        "Y": "audio/31136_verse_1_mix.mp3",
      }
    },
    {
      "Name": "Separation 13",
      "TestID": "id13",
      "Files": {
        "A": "audio/21063_chorus_2_FASST.mp3",
        "B": "audio/21063_chorus_2_predf0.mp3",
        "X": "audio/21063_chorus_2_ori.mp3",
        "Y": "audio/21063_chorus_2_mix.mp3",
      }
    },
    {
      "Name": "Separation 14",
      "TestID": "id14",
      "Files": {
        "A": "audio/31101_verse_3_predf0.mp3",
        "B": "audio/31101_verse_3_DCS.mp3",
        "X": "audio/31101_verse_3_ori.mp3",
        "Y": "audio/31101_verse_3_mix.mp3",
      }
    },
    {
      "Name": "Separation 15",
      "TestID": "id15",
      "Files": {
        "A": "audio/31101_verse_1_DCS.mp3",
        "B": "audio/31101_verse_1_FASST.mp3",
        "X": "audio/31101_verse_1_ori.mp3",
        "Y": "audio/31101_verse_1_mix.mp3",
      }
    },

    {
      "Name": "Audio Quality 1",
      "TestID": "id1",
      "Files": {
        "A": "audio/21063_chorus_1_FASST.mp3",
        "B": "audio/21063_chorus_1_predf0.mp3",
        "X": "audio/21063_chorus_1_ori.mp3 ",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 2",
      "TestID": "id2",
      "Files": {
        "A": "audio/21084_verse_1_predf0.mp3",
        "B": "audio/21084_verse_1_DCS.mp3",
        "X": "audio/21084_verse_1_ori.mp3",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 3",
      "TestID": "id3",
      "Files": {
        "A": "audio/31129_chorus_4_FASST.mp3",
        "B": "audio/31129_chorus_4_predf0.mp3",
        "X": "audio/31129_chorus_4_ori.mp3",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 4",
      "TestID": "id4",
      "Files": {
        "A": "audio/31114_verse_3_FASST.mp3",
        "B": "audio/31114_verse_3_DCS.mp3",
        "X": "audio/31114_verse_3_ori.mp3",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 5",
      "TestID": "id5",
      "Files": {
        "A": "audio/45435_verse_1_predf0.mp3",
        "B": "audio/45435_verse_1_DCS.mp3",
        "X": "audio/45435_verse_1_ori.mp3",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 6",
      "TestID": "id6",
      "Files": {
        "A": "audio/31114_verse_1_FASST.mp3",
        "B": "audio/31114_verse_1_DCS.mp3",
        "X": "audio/31114_verse_1_ori.mp3",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 7",
      "TestID": "id7",
      "Files": {
        "A": "audio/31114_verse_2_FASST.mp3",
        "B": "audio/31114_verse_2_DCS.mp3",
        "X": "audio/31114_verse_2_ori.mp3",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 8",
      "TestID": "id3",
      "Files": {
        "A": "audio/31129_chorus_1_FASST.mp3",
        "B": "audio/31129_chorus_1_predf0.mp3",
        "X": "audio/31129_chorus_1_ori.mp3",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 9",
      "TestID": "id3",
      "Files": {
        "A": "audio/31129_chorus_2_DCS.mp3",
        "B": "audio/31129_chorus_2_predf0.mp3",
        "X": "audio/31129_chorus_2_ori.mp3",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 10",
      "TestID": "id10",
      "Files": {
        "A": "audio/21084_verse_3_predf0.mp3",
        "B": "audio/21084_verse_3_DCS.mp3",
        "X": "audio/21084_verse_3_ori.mp3",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 11",
      "TestID": "id11",
      "Files": {
        "A": "audio/31101_verse_2_FASST.mp3",
        "B": "audio/31101_verse_2_predf0.mp3",
        "X": "audio/31101_verse_2_ori.mp3",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 12",
      "TestID": "id12",
      "Files": {
        "A": "audio/31136_verse_1_FASST.mp3",
        "B": "audio/31136_verse_1_DCS.mp3",
        "X": "audio/31136_verse_1_ori.mp3",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 13",
      "TestID": "id13",
      "Files": {
        "A": "audio/21063_chorus_2_FASST.mp3",
        "B": "audio/21063_chorus_2_predf0.mp3",
        "X": "audio/21063_chorus_2_ori.mp3",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 14",
      "TestID": "id14",
      "Files": {
        "A": "audio/31101_verse_3_predf0.mp3",
        "B": "audio/31101_verse_3_DCS.mp3",
        "X": "audio/31101_verse_3_ori.mp3",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 15",
      "TestID": "id15",
      "Files": {
        "A": "audio/31101_verse_1_DCS.mp3",
        "B": "audio/31101_verse_1_FASST.mp3",
        "X": "audio/31101_verse_1_ori.mp3",
        "Y": " ",
      }
    },
  ]
}
