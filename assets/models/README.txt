                   .:                     :,                                          
,:::::::: ::`      :::                   :::                                          
,:::::::: ::`      :::                   :::                                          
.,,:::,,, ::`.:,   ... .. .:,     .:. ..`... ..`   ..   .:,    .. ::  .::,     .:,`   
   ,::    :::::::  ::, :::::::  `:::::::.,:: :::  ::: .::::::  ::::: ::::::  .::::::  
   ,::    :::::::: ::, :::::::: ::::::::.,:: :::  ::: :::,:::, ::::: ::::::, :::::::: 
   ,::    :::  ::: ::, :::  :::`::.  :::.,::  ::,`::`:::   ::: :::  `::,`   :::   ::: 
   ,::    ::.  ::: ::, ::`  :::.::    ::.,::  :::::: ::::::::: ::`   :::::: ::::::::: 
   ,::    ::.  ::: ::, ::`  :::.::    ::.,::  .::::: ::::::::: ::`    ::::::::::::::: 
   ,::    ::.  ::: ::, ::`  ::: ::: `:::.,::   ::::  :::`  ,,, ::`  .::  :::.::.  ,,, 
   ,::    ::.  ::: ::, ::`  ::: ::::::::.,::   ::::   :::::::` ::`   ::::::: :::::::. 
   ,::    ::.  ::: ::, ::`  :::  :::::::`,::    ::.    :::::`  ::`   ::::::   :::::.  
                                ::,  ,::                               ``             
                                ::::::::                                              
                                 ::::::                                               
                                  `,,`


http://www.thingiverse.com/thing:468651
 Parametric Cherry MX/Alps Keycap for Mechanical Keyboards by rsheldiii is licensed under the Creative Commons - Attribution - Non-Commercial - Share Alike license.
http://creativecommons.org/licenses/by-nc-sa/3.0/

# Summary

I got halfway through making a parametric novelty keycap base before I realized there are decidedly few basic keycaps on the thingiverse website, so I took a detour to make a good one. This library has slowly grown to where you can generate keycaps in four different layouts in any length or height you desire! They are not quite drop-in replacements into existing keysets yet, but work great as a set, escape key, WASD cluster, top row, or as a base for an artisan.


Heavily modified from Kekstee's original Skull keycap to refactor, remove dxf files, add a dish, parameterize, and add a square keyswitch connector: https://github.com/kekstee/3dprint  


Makerbot's customizer is great, but it's hard to zoom in and a little sluggish with spherical dishes, so you might be better served booting up OpenSCAD.  Also, using OpenSCAD opens up a whole new level of customization! Due to the complexity of the key profiles things like dish depth, top skew, etc. can only be controlled from inside OpenSCAD. There are a lot of comments as to what things do so don't be afraid to dig around!


Update 9/4/2016, all features to date:
* Many imitation key profiles supported! DCS, SA, DSA, and G20 for now. No OEM until I can find a good data sheet :(  
* Square Cherry key connector stem; easier to print, more robust than a circular one. I will make a circular one in the future.  
* Stem inset now supported! allows you to print keys that will sit lower on the keyboard than before. you'll need to print with some kind of support  
* Multiple dish types that affect the top and bottom, so keytop thickness is uniform throughout. Dishes are correctly created using a bit of trig, so they expand to arbitrary sized keycaps. Inverted dish types for spacebar / funky keyboards supported! inverted dish and extra long keycaps recently fixed! 
* Keycaps can be arbitrarily wide or tall! note that for extra large keycaps you might need to turn up rounding on the dishes
* Stabilizer supports! Not currently supported on tall keycaps (numpad enter and plus for instance)


Experimental features: 
* Experimental ALPS compatibility! 
* Experimental rounded keycaps! Requires SCAD knowledge; replace key() with minkowski_key(). Will take FOREVER for anything with a dish due to polygons. G20 does not have a dish. results are pretty, but if you don't have a really good 3d printer you can safely skip.
* Experimental ISO enter in the works. technically it is there, but it is the wrong size. you need to switch any use of shape_hull() for ISOEnterShapeHull(). I don't own any keyboards with it either so I have no idea if it actually fits or if it needs stabilizer holes (I assume so?) I just have keys I'm comparing it to from a grab bag.


Upcoming additions:
* Stem inset supports; promoting stem inset to all keycap profiles that need it
* Vertical stabilizers.
* full experimental ISO enter
* Keyswitch clearance subtraction (to make sure the keycap won't smack into the switch)
* Circular keystem
* inset and outset text on keys

# Instructions

I have tested this at .2 and .1mm layer heights with no support and it seems to print just fine, with a bit of warping on the bottom of the keytop for the first layer of bridging or so. At .1mm I increased infill to 90%, otherwise Slic3r seemed to float layers on top of nothing; at .2mm 20% infill worked great. Sometimes the stem comes undone for me during the print, mostly at low layer resolutions and more often with ABS. Make use of the brim if you find that happening to you as well, which can be customized. Also make use of the brim if you are having a hard time landing the first layer of the keystem.


You might have problems with stem fitment if you overextrude - you can either change your extrusion parameters or look into futzing with horizontal_cross_width, vertical_cross_width, extra_outer_cross_width, and extra_outer_cross_height. It is by far the tightest part of the print, and the one closest to operating tolerances in order to give as much material as possible to the stem. 


Also, different slicers handle the stem differently; I found that Slic3r printed the pieces in one contiguous spiral, which minimized retraction problems, but Simplify3d does not. YMMV.


In order to print different versions of the keycaps, change the key_profile variable. If you wish to print Alps-compatible keycaps, make sure the stem_profile is set to 1. I haven't tested all of the Alps ones so make sure the stem is in a good position before you print off 30 of them!


Comments welcome!