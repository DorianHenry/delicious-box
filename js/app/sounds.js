//Batterie


var batteriegrosseCaisse = new Wad({ source : 'Sounds/Batterie/Kick/Dep_K.wav' });
var batteriecharlet = new Wad({ source : 'Sounds/Batterie/Charlet/Bld_H1.wav' });
var batterietom = new Wad({ source : 'Sounds/Batterie/Tom/Hi_Tom1.wav' });
var batteriecaisseClaire = new Wad({ source : 'Sounds/Batterie/CaisseClaire/Bck_Snr.wav' });
var batteriecymbale  = new Wad({ source : 'Sounds/Batterie/Cymbale/Dry_Ohh.wav' });


//Guitare


var bassedefault= new Wad({
    source : 'triangle',
    volume: 1.0,
    env : {
        attack : 0,
        decay : 0,
        sustain: 0.8,
        release : 0.2
    }
});

var synthe=  new Wad({
    source  : 'triangle',
    volume  : 1.0,   // Peak volume can range from 0 to an arbitrarily high number, but you probably shouldn't set it higher than 1.
    env     : {      // This is the ADSR envelope.
        attack  : 0.09,  // Time in seconds from onset to peak volume.  Common values for oscillators may range from 0.05 to 0.3.
        decay   : 0,  // Time in seconds from peak volume to sustain volume.
        sustain : 1,  // Sustain volume level. This is a percent of the peak volume, so sensible values are between 0 and 1.
        release : 0.1     // Time in seconds from the end of the hold period to zero volume, or from calling stop() to zero volume.
    }
//    filter  : {
//        type      : 'High Shelf', // What type of filter is applied.
//        frequency : 12000,       // The frequency, in hertz, to which the filter is applied.
//        q         : 1,         // Q-factor.  No one knows what this does. The default value is 1. Sensible values are from 0 to 10.
//        env       : {          // Filter envelope.
//            frequency : 12000, // If this is set, filter frequency will slide from filter.frequency to filter.env.frequency when a note is triggered.
//            attack    : 0.5  // Time in seconds for the filter frequency to slide from filter.frequency to filter.env.frequency
//        }
//    },
//    vibrato : { // A vibrating pitch effect.  Only works for oscillators.
//        shape     : 'triangle', // shape of the lfo waveform. Possible values are 'sine', 'sawtooth', 'square', and 'triangle'.
//        magnitude : 9.91,      // how much the pitch changes. Sensible values are from 1 to 10.
//        speed     : 10,      // How quickly the pitch changes, in cycles per second.  Sensible values are from 0.1 to 10.
//        attack    : 0.8       // Time in seconds for the vibrato effect to reach peak magnitude.
//    }
});

var pianodefault= new Wad({
    source : 'square', 
    env : {
        attack : .01, 
        decay : .005, 
        sustain : .2, 
        hold : .015, 
        release : .3
    }, 
    filter : {
        type : 'lowpass', 
        frequency : 1200, 
        q : 8.5, 
        env : {
            attack : .2, 
            frequency : 600
        }
    }
});