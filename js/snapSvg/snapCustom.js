
    
    
    Snap.load('img/logoBlanc.svg', function(f)
    {
        var a = Snap("#svgLogo");
        aa= f.select('g');
        a.append(aa);
    });
    
    Snap.load('img/batterie.svg', function(f)
    {
        var b = Snap("#svgBatterie");
        ba= f.select('g');
        b.append(ba);
        var grosseCaisse=ba.select('#Brosse_caisse');
        var snareDroite=ba.select('#snareDroite');
        var snareGauche=ba.select('#snareGauche');
        var tomGauche=ba.select('#tomGauche');
        var cymbale=ba.select('#Cymbale');
        var charlet1=ba.select('#charlet1');
        var charlet2=ba.select('#charlet2');
//        ba.hover(hover);
//        
//        function hover(color)
//        {
//            grosseCaisse.attr({
//                fill: color
//            });
//            
//            snareDroite.attr(
//                    {
//                        fill:color
//                    });
//            
//            snareGauche.attr(
//                    {
//                        fill:color
//                    });
//            
//            tomGauche.attr(
//                    {
//                        fill:color
//                    });
//            cymbale.attr(
//                    {
//                        fill:color
//                    })
//            charlet1.attr(
//                    {
//                        fill:color
//                    })
//            charlet2.attr(
//                    {
//                        fill:color
//                    })
//        };
    });
    
    Snap.load('img/guitare.svg', function(f)
    {
        var c = Snap("#svgsynthe-lead");
        ca= f.select('g');
        c.append(ca);
    });
    
    Snap.load('img/basse.svg', function(f)
    {
        var d = Snap("#svgBasse");
        da= f.select('g');
        d.append(da);
    });
    
     Snap.load('img/piano.svg', function(f)
    {
        var e = Snap("#svgPiano");
        ea= f.select('g');
        e.append(ea);
    });
    
//    Snap.load('img/batteriePetit.svg', function(f)
//    {
//        var fa = Snap("#svgBatteriePetit");
//        batP= f.select('g');
//        fa.append(batP);
//    });
    
    
//    
//hoverover = function() { ba.animate({ transform: 's2r45,150,150' }, 1000, mina.bounce ) };
//hoverout = function() { ba.animate({ transform: 's1r0,150,150' }, 1000, mina.bounce ) };
