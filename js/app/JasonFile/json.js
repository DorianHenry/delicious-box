var instruments= {
  "batterie": {
  "text": "Batterie",
  "add": false,
  "elements": [new Element('batterie', 'grosseCaisse'), new Element('batterie', 'caisseClaire'), new Element('batterie','tom'), new Element('batterie','charlet'), new Element('batterie','cymbale')]
},
  "synthelead": {
  "text": "synthe-lead",
  "add": false,
 "elements": [{"pitch":"C", "tempsIni":1, "key":"A"},
            {"pitch":"C#", "tempsIni":1, "key":"Z"},
            {"pitch": "D", "tempsIni":1, "key":"E"},
            {"pitch": "D#", "tempsIni":1, "key":"R"},
            {"pitch": "Eb", "tempsIni":1, "key":"T"},
            {"pitch": "E", "tempsIni":1, "key":"Q"},
            {"pitch": "F", "tempsIni":1, "key":"S"},
            {"pitch": "F#", "tempsIni":1, "key":"D"},
            {"pitch": "G", "tempsIni":1, "key":"F"},
            {"pitch": "G#", "tempsIni":1, "key":"G"},
            {"pitch": "A", "tempsIni":1, "key":"W"},
            {"pitch": "A#", "tempsIni":1, "key":"X"},
            {"pitch": "B", "tempsIni":1, "key":"C"}
            ],
  "nbreTemps":[1,2,3,4]
},

  "basse": {
  "text": "Basse",
  "add": false,
 "elements": [{"pitch":"C", "tempsIni":1, "key":"A"},
            {"pitch":"C#", "tempsIni":1, "key":"Z"},
            {"pitch": "D", "tempsIni":1, "key":"E"},
            {"pitch": "D#", "tempsIni":1, "key":"R"},
            {"pitch": "Eb", "tempsIni":1, "key":"T"},
            {"pitch": "E", "tempsIni":1, "key":"Q"},
            {"pitch": "F", "tempsIni":1, "key":"S"},
            {"pitch": "F#", "tempsIni":1, "key":"D"},
            {"pitch": "G", "tempsIni":1, "key":"F"},
            {"pitch": "G#", "tempsIni":1, "key":"G"},
            {"pitch": "A", "tempsIni":1, "key":"W"},
            {"pitch": "A#", "tempsIni":1, "key":"X"},
            {"pitch": "B", "tempsIni":1, "key":"C"}
            ],
  "nbreTemps":[1,2,3,4]
},

  "synthe": {
  "text": "Piano",
  "add": false,
"elements": [{"pitch":"C", "tempsIni":1, "key":"A"},
            {"pitch":"C#", "tempsIni":1, "key":"Z"},
            {"pitch": "D", "tempsIni":1, "key":"E"},
            {"pitch": "D#", "tempsIni":1, "key":"R"},
            {"pitch": "Eb", "tempsIni":1, "key":"T"},
            {"pitch": "E", "tempsIni":1, "key":"Q"},
            {"pitch": "F", "tempsIni":1, "key":"S"},
            {"pitch": "F#", "tempsIni":1, "key":"D"},
            {"pitch": "G", "tempsIni":1, "key":"F"},
            {"pitch": "G#", "tempsIni":1, "key":"G"},
            {"pitch": "A", "tempsIni":1, "key":"W"},
            {"pitch": "A#", "tempsIni":1, "key":"X"},
            {"pitch": "B", "tempsIni":1, "key":"C"}
            ],
  "nbreTemps":[1, 2, 3, 4]
}
};


 function Element(instrument, key)
     {
        this.key = key;
        this.instrument=instrument;
     }



