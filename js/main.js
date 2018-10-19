$(document).ready(function()
{
    keyBoard();
});

particlesJS('particles-js', {
  particles: {
    color: '#fff',
    color_random: false,
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: {
      opacity: 0.6,
      anim: {
        enable: false,
        speed: 1.5,
        opacity_min: 0,
        sync: true
      }
    },
    size: 2,
    size_random: false,
    nb: 300,
    line_linked: {
      enable_auto: true,
      distance: 100,
      color: '#fff',
      opacity: 0.7,
      width: 1,
      condensed_mode: {
        enable: false,
        rotateX: 100,
        rotateY: 100
      }
    },
    anim: {
      enable: true,
      speed: 1
    }
  },
  interactivity: {
    enable: false,
    mouse: {
      distance: 300
    },
    detect_on: 'window', // "canvas" or "window"
    mode: 'grab', // "grab" of false
    line_linked: {
      opacity: .2
    },
    events: {
      onclick: {
        enable: false,
        mode: 'push', // "push" or "remove"
        nb: 4
      },
      onresize: {
        enable: true,
        mode: 'bounce', // "out" or "bounce"
        density_auto: false,
        density_area: 10 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
      }
    }
  },
  /* Retina Display Support */
  retina_detect: false
});

    var keyBoardNote={
      65:'C',
      90:'C#',
      69:'D',
      82:'D#',
      84:'Eb',
      81:'E',
      83:'F',
      68:'F#',
      70:'G',
      71:'G#',
      87:'A',
      88:'A#',
      67:'B'  
    };
    
    var myClassActive={
        
    };
//store local reference for brevity
  var Signal = signals.Signal;

  //custom object that dispatch signals
  var keyBoardDispatcher = {
      on : new Signal(),
      up : new Signal()
  };

function keyBoard()
{
    $(window).on('keydown', function(event){
        keyBoardDispatcher.on.dispatch(event.keyCode); //dispatch signal passing custom parameters
        console.log(event.keyCode);
    });
    
    $(window).on('keyup', function(event){
        keyBoardDispatcher.up.dispatch(event.keyCode); //dispatch signal passing custom parameters
    });
}

myInstruments=
{
    basse : function myInstrumentKey(event)
            {
                var pitch = keyBoardNote[event];
                if(pitch)
                {
                    bassedefault.play({ pitch : pitch+2, env : { hold : 0.2}});
                }
            },
    synthelead : function myInstrumentKey(event)
                {
                    var pitch = keyBoardNote[event];
                    if(pitch)
                    {
                        synthe.play({ pitch : pitch+4, env : { hold : 0.2}});
                    }
                },
    synthe : function myInstrumentKey(event)
                {
                    var pitch = keyBoardNote[event];
                    if(pitch)
                    {
                        pianodefault.play({ pitch : pitch+4, env : { hold : 0.2}});
                    }
                }
};

$('#demo1').sharrre({
  share: {
    googlePlus: true,
    facebook: true,
    twitter: true
  },
  buttons: {
    googlePlus: {size: 'tall', annotation:'bubble'},
    facebook: {layout: 'box_count'},
    twitter: {count: 'vertical', via: '_JulienH'}
  },
  hover: function(api, options){
    $(api.element).find('.buttons').show();
  },
  hide: function(api, options){
    $(api.element).find('.buttons').hide();
  },
  enableTracking: true
});

