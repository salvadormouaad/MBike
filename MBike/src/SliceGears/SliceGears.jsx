import { createSlice } from "@reduxjs/toolkit";
import { images_qasques_ROAD_HERON_BLACK } from "./IMAGES_CASQUES/assets";
import { images_qasques_ROAD_HERON_BLANC } from "./IMAGES_CASQUES/assets";
import { images_qasques_ROAD_HERON_GREY_PRIZM } from "./IMAGES_CASQUES/assets";

import { images_qasques_ROAD_RACE_YELLOW } from "./IMAGES_CASQUES/assets";
import { images_qasques_ROAD_RACE_BLANC } from "./IMAGES_CASQUES/assets";

import { images_qasques_MTB_STATUS_X_BLACK } from "./IMAGES_CASQUES/assets";

import { images_qasques_MTB_STROVER_BLACK } from "./IMAGES_CASQUES/assets";
import { images_qasques_MTB_STROVER_BLANC } from "./IMAGES_CASQUES/assets";

import { images_qasques_MTB_TROOPER_BLACK } from "./IMAGES_CASQUES/assets";
import { images_qasques_MTB_TROOPER_BLUE } from "./IMAGES_CASQUES/assets";


import { images_qasques_MTB_FRISK_BLACK } from "./IMAGES_CASQUES/assets";
import { images_qasques_MTB_FRISK_RED } from "./IMAGES_CASQUES/assets";

import { images_qasques_MTB_OFFPATH_BLACK } from "./IMAGES_CASQUES/assets";
import { images_qasques_MTB_OFFPATH_GREEN } from "./IMAGES_CASQUES/assets"; 


import { images_qasques_MTB_STRAY_BLACK } from "./IMAGES_CASQUES/assets";
import { images_qasques_MTB_STRAY_ORANGE } from "./IMAGES_CASQUES/assets";


import { images_vetements_HOMME_MAILLOTS_BLUE } from "./IMAGES_CASQUES/assets";
import { images_vetements_HOMME_MAILLOTS_BLACK } from "./IMAGES_CASQUES/assets";


import { images_vetements_HOMME_PANTALON_BRETELLES_WHITE } from "./IMAGES_CASQUES/assets";
import { images_vetements_HOMME_PANTALON_BRETELLES_BLACK } from "./IMAGES_CASQUES/assets";


import { images_vetements_HOMME_SWEATS_TSHIRTS_BLACK } from "./IMAGES_CASQUES/assets";
import { images_vetements_HOMME_SWEATS_TSHIRTS_PETROLE } from "./IMAGES_CASQUES/assets";

import { images_vetements_HOMME_CASQUETTES_BASIQUES_BLACK } from "./IMAGES_CASQUES/assets";
import { images_vetements_HOMME_CASQUETTES_BASIQUES_GRIS } from "./IMAGES_CASQUES/assets";


import { images_vetements_FEMME_MAILLOTS_BLUE } from "./IMAGES_CASQUES/assets";
import { images_vetements_FEMME_MAILLOTS_BLACK } from "./IMAGES_CASQUES/assets";

import { images_vetements_FEMME_PANTALON_BRETELLES_WHITE } from "./IMAGES_CASQUES/assets";
import { images_vetements_FEMME_PANTALON_BRETELLES_BLACK } from "./IMAGES_CASQUES/assets";

import { images_vetements_FEMME_SWEATS_TSHIRTS_BLACK } from "./IMAGES_CASQUES/assets";
import { images_vetements_FEMME_SWEATS_TSHIRTS_WHITE } from "./IMAGES_CASQUES/assets";

import { images_gants_GRAVITY_OLIVE } from "./IMAGES_CASQUES/assets";
import { images_gants_GRAVITY_BLUE } from "./IMAGES_CASQUES/assets";

import { images_gants_RACE_BLANC } from "./IMAGES_CASQUES/assets";
import { images_gants_RACE_BLACK } from "./IMAGES_CASQUES/assets";

import { images_chaussures_MTB_PEACK_PRO_BLACK } from "./IMAGES_CASQUES/assets";

import { images_chaussures_MTB_PEACK_BLACK } from "./IMAGES_CASQUES/assets";


import { images_chaussures_ALL_TERRAIN_OX_PRO_GREY } from "./IMAGES_CASQUES/assets";

import { images_chaussures_ALL_TERRAIN_OX_GREY } from "./IMAGES_CASQUES/assets";

const initVal = {
    qasques: {
        road: {
            heron: [
                {
                    id: 1,
                    title: 'CUBE Helmet HERON',
                    price: '199.95 EUR',
                    colors: ['BLANC', 'GREY PRIZM', 'BLACK'],
                    description: "When we set out to design the HERON, we didn't want to create just any road bike helmet. We wanted to create the ultimate road bike helmet! If you think aerodynamics come at the cost of an overheated head and painful neck – think again! After extensive wind tunnel testing, we came up with a design that directs cooling air over the entire head via deep ventilation channels yet doesn't look or feel too bulky in the process. At only 258g, our aero helmet gives you an extra portion of speed even on long-distance rides, while providing maximum comfort.",
                    caracteristiques: ["road helmet", "MIPS", "9 large vents", "SILC 180+ Fit System with height and width adjustment can be fine-tuned with one hand for a perfect fit", "triple-in-mould construction", "flat dividers for optimized webbing guiding", "removable, washable and antibacterial pads", "other pad thicknesses available", "Natural Fit concept", "matt finish"],
                    couleur: 'BLACK',
                    materiau: 'EPS triple-in-mould',
                    poids: ['258 g'],
                    taille: ["S (49-55)", "M (52-57)", "L (57-62)"],
                    images: images_qasques_ROAD_HERON_BLACK
                },
                {
                    id: 2,
                    title: 'CUBE Helmet HERON',
                    price: '199.95 EUR',
                    colors: ['GREY PRIZM', 'BLACK'],
                    description: "When we set out to design the HERON, we didn't want to create just any road bike helmet. We wanted to create the ultimate road bike helmet! If you think aerodynamics come at the cost of an overheated head and painful neck – think again! After extensive wind tunnel testing, we came up with a design that directs cooling air over the entire head via deep ventilation channels yet doesn't look or feel too bulky in the process. At only 258g, our aero helmet gives you an extra portion of speed even on long-distance rides, while providing maximum comfort.",
                    caracteristiques: ["road helmet", "MIPS", "9 large vents", "SILC 180+ Fit System with height and width adjustment can be fine-tuned with one hand for a perfect fit", "triple-in-mould construction", "flat dividers for optimized webbing guiding", "removable, washable and antibacterial pads", "other pad thicknesses available", "Natural Fit concept", "matt finish"],
                    couleur: "BLANC",
                    materiau: "EPS triple-in-mould",
                    poids: ["258 g"],
                    taille: ["S (49-55)", "M (52-57)", "L (57-62)"],
                    images: images_qasques_ROAD_HERON_BLANC
                },
                {
                    id: 3,
                    title: 'CUBE Helmet HERON',
                    price: "199.95 EUR",
                    colors: ['BLANC', 'BLACK'],
                    description: "When we set out to design the HERON, we didn't want to create just any road bike helmet. We wanted to create the ultimate road bike helmet! If you think aerodynamics come at the cost of an overheated head and painful neck – think again! After extensive wind tunnel testing, we came up with a design that directs cooling air over the entire head via deep ventilation channels yet doesn't look or feel too bulky in the process. At only 258g, our aero helmet gives you an extra portion of speed even on long-distance rides, while providing maximum comfort.",
                    caracteristiques: ["road helmet", "MIPS", "9 large vents", "SILC 180+ Fit System with height and width adjustment can be fine-tuned with one hand for a perfect fit", "triple-in-mould construction", "flat dividers for optimized webbing guiding", "removable, washable and antibacterial pads", "other pad thicknesses available", "Natural Fit concept", "glossy + matt finish"],
                    couleur: "GREY PRIZM",
                    materiau: "EPS triple-in-mould",
                    poids: ["258 g"],
                    taille: ["S (49-55)", "M (52-57)", "L (57-62)"],
                    images: images_qasques_ROAD_HERON_GREY_PRIZM
                }
            ],
            road_race: [
                {
                    id: 1,
                    title: 'CUBE Helmet ROAD RACE',
                    price: '99.95 EUR',
                    colors: ["BLUE'N'MINT", "BLANC", "BLACK", "TEAMLINE"],
                    description: "The Ötztal Cycle Marathon is back again this year, but this time I want to be at the front of the group - and that is why it's all about riding wisely and constantly keeping the pressure on, all over more than 250 km and 5,500 altitude metres. In the end, the reserves are even enough for a little finish sprint in the breakaway group. My helmet? I completely forgot about it after the first kilometres thanks to its great ventilation and perfect fit.",
                    caracteristiques: ["road helmet", "24 large vents", "SILC 180 Fit System with height and width adjustment can be fine-tuned with one hand for a perfect fit", "removable, washable pads", "other pad thicknesses available", "double in-mould construction", "flat dividers for optimised webbing guiding", "Natural Fit concept", "reflective decals", "matte finish"],
                    couleur: "YELLOW",
                    materiau: "EPS double-in-mould",
                    poids: ["S (49-55) - 210 g", "S/M (53-57) - 246 g", "L (58-62) - 275 g"],
                    taille: ["S (49-55)", "S/M (53-57)", "L (58-62)"],
                    images: images_qasques_ROAD_RACE_YELLOW
                },
                {
                    id: 2,
                    title: "CUBE Helmet ROAD RACE",
                    price: "99.95 EUR",
                    colors: ["YELLOW", "BLUE'N'MINT", "BLACK", "TEAMLINE"],
                    description: "The Ötztal Cycle Marathon is back again this year, but this time I want to be at the front of the group - and that is why it's all about riding wisely and constantly keeping the pressure on, all over more than 250 km and 5,500 altitude metres. In the end, the reserves are even enough for a little finish sprint in the breakaway group. My helmet? I completely forgot about it after the first kilometres thanks to its great ventilation and perfect fit.",
                    caracteristiques: ["road helmet", "24 large vents", "SILC 180 Fit System with height and width adjustment can be fine-tuned with one hand for a perfect fit", "removable, washable pads", "other pad thicknesses available", "double in-mould construction", "flat dividers for optimised webbing guiding", "Natural Fit concept", "reflective decals", "matte finish"],
                    couleur: 'BLANC',
                    materiau: "EPS double-in-mould",
                    poids: ["S (49-55) - 210 g", "S/M (53-57) - 246 g", "L (58-62) - 275 g"],
                    taille: ["S (49-55)", "S/M (53-57)", "L (58-62)"],
                    images: images_qasques_ROAD_RACE_BLANC
                }
            ]
        },
        mtb: {
            status_x: [
                {
                    id: 1,
                    title: "CUBE Helmet STATUS X 100%",
                    price: "229.95 EUR",
                    colors: [],
                    description: "Go beyond your limits; CUBE meets 100% Speed Lab – the expertise of both worlds unites to create a product that's better than ever! We took the amazing 100% STATUS helmet and modified the graphics to match the CUBE colourways to create the perfect complement to our TWO15 and STEREO bikes. Maximum protection for maximum speeds and the gnarliest of terrain.",
                    caracteristiques: ["downhill/mountain bike helmet", "in collaboration with 100% Speed Lab", "ultralight fibreglass shell", "active cooling system", "improved ventilation channels", "removable, washable pads", "perfect fit", "height-adjustable visor", "chin guard with PU padding", "compatible with inflatable helmet system"],
                    couleur: 'BLACK',
                    materiau: "fibreglass/EPS",
                    poids: ["1025 g (with Visor)"],
                    taille: ["XS (53-54)", "SM (55-56)", "MD (57-58)", "LG (59-60)", "XL (61-62)", "XXL (63-64)"],
                    images: images_qasques_MTB_STATUS_X_BLACK
                }
            ],
            strover: [
                {
                    id: 1,
                    title: "CUBE Helmet STROVER",
                    price: "169.95 EUR",
                    colors: ["white'n'black"],
                    description: "Enduro is all about pure enjoyment on two wheels! That was our credo when designing the the brand-new STROVER. The result? A stylish yet safe enduro lid featuring innovative MIPS technology that offers added protection for the brain in the event of an impact. Your tours just got safer than ever. Added protection comes courtesy of the extra coverage at the rear and the CUBE Natural Fit system allows you to adjust the helmet perfectly to your head and set the height of the Fit System – all with one hand. Micro-adjusting the webbing is a cinch with our proprietary Flat Dividers and everything is kept securely in place with the magnetic Fidlock closure. Mount your action camera or head lamp for night rides quickly and securely using the integrated X-Adapter – or flip the X-Lock mount around when not in use for an unobtrusive look. The visor flips up to make space for your goggles and there are plenty of ventilation channels along with the COOLMAX padding to help you keep a cool head when the trail points up.",
                    caracteristiques: ["mtb enduro helmet","MIPS","extra coverage at the rear","14 large ventilation channels","height-adjustable visor","COOLMAX padding","magnetic Fidlock closure"],
                    couleur: 'BLACK',
                    materiau: "EPS multiple-shell construction",
                    poids: ["317 g (avec visière)"],
                    taille: ["S (49-55)","M (52-57)","L (57-62)"],
                    images: images_qasques_MTB_STROVER_BLACK
                },
                {
                    id: 2,
                    title: "CUBE Helmet STROVER",
                    price: "169.95 EUR",
                    colors: ["BLACK"],
                    description: "Enduro is all about pure enjoyment on two wheels! That was our credo when designing the the brand-new STROVER. The result? A stylish yet safe enduro lid featuring innovative MIPS technology that offers added protection for the brain in the event of an impact. Your tours just got safer than ever. Added protection comes courtesy of the extra coverage at the rear and the CUBE Natural Fit system allows you to adjust the helmet perfectly to your head and set the height of the Fit System – all with one hand. Micro-adjusting the webbing is a cinch with our proprietary Flat Dividers and everything is kept securely in place with the magnetic Fidlock closure. Mount your action camera or head lamp for night rides quickly and securely using the integrated X-Adapter – or flip the X-Lock mount around when not in use for an unobtrusive look. The visor flips up to make space for your goggles and there are plenty of ventilation channels along with the COOLMAX padding to help you keep a cool head when the trail points up.",
                    caracteristiques: ["mtb enduro helmet","MIPS","height-adjustable SILC 180+ Fit System can be adjusted with one hand for the perfect fit","height-adjustable visor","Natural Fit concept, matt & glossy finish","magnetic Fidlock closure","COOLMAX padding"],
                    couleur: 'BLANC',
                    materiau: "EPS multiple-shell construction",
                    poids: ["317 g (avec visière)"],
                    taille: ["S (49-55)","M (52-57)","L (57-62)"],
                    images: images_qasques_MTB_STROVER_BLANC
                }
            ],
            trooper: [
                {
                    id: 1,
                    title: "CUBE Helmet TROOPER",
                    price: "129.95 EUR",
                    colors: [""],
                    description: "The TROOPER is simply an unbeatable enduro helmet. The innovative Mips technology in combination with our new defense skeleton structure and added coverage in the back will protect your head better than ever before. Combined with the integrated break-away visor, torsional forces exerted on the neck and spine in case of an impact are reduced to a minimum. Improved ventilation channels help you keep a cool head when the action heats up and ensures a constant airflow both uphill and downhill. We also added our tried-and-tested Flip Adapter on top, which you can use to mount a heap of different compatible accessories like lights and action cams - which were all designed to release quickly in case of a crash. The TROOPER also comes with a solution for your glasses: simply flip them to the back of the helmet and the silicone patches will make sure that they stay there, no matter how rough the terrain. For a perfect fit it comes with an easy access Fidlock buckle, our improved padding and SILC 180+ fit system.",
                    caracteristiques: ["MTB Enduro helmet","MIPS","integrated flippable X-Adapter with X-Lock mount","height-adjustable SILC 180+ Fit System can be adjusted with one hand for the perfect fit","magnetic Fidlock closure","Natural Fit concept, matt & glossy finish","Bike glasses and goggles compatibility"],
                    couleur: 'BLACK',
                    materiau: "EPS multiple-shell construction",
                    poids: ["370 g (with visor)"],
                    taille: ["S (52-56)","M (56-59)","L (59-63)"],
                    images: images_qasques_MTB_TROOPER_BLACK
                },
                {
                    id: 2,
                    title: "CUBE Helmet TROOPER X Actionteam",
                    price: "129.95 EUR",
                    colors: ["BLACK"],
                    description: "The TROOPER is simply an unbeatable enduro helmet. The innovative Mips technology in combination with our new defense skeleton structure and added coverage in the back will protect your head better than ever before. Combined with the integrated break-away visor, torsional forces exerted on the neck and spine in case of an impact are reduced to a minimum. Improved ventilation channels help you keep a cool head when the action heats up and ensures a constant airflow both uphill and downhill. We also added our tried-and-tested Flip Adapter on top, which you can use to mount a heap of different compatible accessories like lights and action cams - which were all designed to release quickly in case of a crash. The TROOPER also comes with a solution for your glasses: simply flip them to the back of the helmet and the silicone patches will make sure that they stay there, no matter how rough the terrain. For a perfect fit it comes with an easy access Fidlock buckle, our improved padding and SILC 180+ fit system.",
                    caracteristiques: ["MTB Enduro helmet","MIPS","extra coverage at the sides","21 large ventilation channels","fixed breakaway visor","integrated flippable X-Adapter with X-Lock mount","height-adjustable SILC 180+ Fit System can be adjusted with one hand for the perfect fit","multiple-shell construction","Bike glasses and goggles compatibility"],
                    couleur: "blue'n'grey",
                    materiau: "EPS multiple-shell construction",
                    poids: ["370 g (with visor)"],
                    taille: ["S (52-56)","M (56-59)","L (59-63)"],
                    images: images_qasques_MTB_TROOPER_BLUE
                }
            ],
            frisk: [
                {
                    id: 1,
                    title: "CUBE Helmet FRISK",
                    price: "99.95 EUR",
                    colors: ["RED"],
                    description: "The FRISK is everything you need to shred the gnarliest trails! Incorporating innovative MIPS technology, this stylish helmet protects your brain in the event of an impact for added safety on every ride. Added protection comes courtesy of the extra coverage at the rear and the CUBE Natural Fit system allows you to adjust the helmet perfectly to your head and set the height of the Fit System – all with one hand. Micro-adjusting the webbing is a cinch with our proprietary Flat Dividers and everything is kept securely in place with the ratchet closure. Added safety to and from the trail comes courtesy of the integrated X-Lock mount – simply snap on your rear light and you are ready to roll out!",
                    caracteristiques: ["MTB trail helmet","MIPS","extra coverage at the rear","height-adjustable SILC 180 Fit System can be adjusted with one hand for the perfect fit","in-mould construction","padded ratchet chin closure","Natural Fit concept","matt finish","11 large ventilation channels"],
                    couleur: 'BLACK',
                    materiau: "EPS in-mould",
                    poids: ["348 g (with visor)"],
                    taille: ["S (49-55)","M (52-57)","L (57-62)"],
                    images: images_qasques_MTB_FRISK_BLACK
                },
                {
                    id: 2,
                    title: "CUBE Helmet FRISK",
                    price: "99.95 EUR",
                    colors: ["BLACK"],
                    description: "The FRISK is everything you need to shred the gnarliest trails! Incorporating innovative MIPS technology, this stylish helmet protects your brain in the event of an impact for added safety on every ride. Added protection comes courtesy of the extra coverage at the rear and the CUBE Natural Fit system allows you to adjust the helmet perfectly to your head and set the height of the Fit System – all with one hand. Micro-adjusting the webbing is a cinch with our proprietary Flat Dividers and everything is kept securely in place with the ratchet closure. Added safety to and from the trail comes courtesy of the integrated X-Lock mount – simply snap on your rear light and you are ready to roll out!",
                    caracteristiques: ["MTB trail helmet","height-adjustable visor","MIPS","height-adjustable SILC 180 Fit System can be adjusted with one hand for the perfect fit","in-mould construction","Flat Dividers for dual-sided webbing adjustment","padded ratchet chin closure","Natural Fit concept","matt finish"],
                    couleur: 'RED',
                    materiau: "EPS in-mould",
                    poids: ["348 g (with visor)"],
                    taille: ["S (49-55)","M (52-57)","L (57-62)"],
                    images: images_qasques_MTB_FRISK_RED
                }
            ],
            offpath: [
                {
                    id: 1,
                    title: "CUBE Helmet OFFPATH",
                    price: "89.95 EUR",
                    colors: ["GREEN"],
                    description: "The new CUBE Helmet OFFPATH is the more compact successor to our PATHOS mtb race helmet. Double in-mould construction, 19 large air vents and improved ventilation channels let you keep a cool head on the hottest of trails! Maximum comfort and a perfect fit are courtesy of our proprietary Natural Fit system developed in-house. The SNAP 360 Fit System with MIPS integration adjusts with one hand, and because we know all heads are different, we also made the height adjustable. Different padding thickness are included so you can fine-tune the fit and comfort even further. Removable, washable pads are just how we roll, and the visor is removable too. Matte or glossy finish? It's a matter of taste! The integrated light and X-Lock mounting system are all rolled in as standard.",
                    caracteristiques: ["MTB race helmet for mountain bikers","19 large vents","improved ventilation channels","removable visor","SNAP 360 Fit System integrated into the MIPS layer with height and width adjustment can be fine-tuned with one hand for a perfect fit","double in-mould construction","flat dividers for optimised webbing guiding","X-Lock mounting system","removable & washable pads","other pad thicknesses available","padded ratchet chin closure"],
                    couleur: 'BLACK',
                    materiau: "EPS double-in-mould",
                    poids: ["350 g (avec visière)"],
                    taille: ["M (52-57)","L (57-62)","XL (59-64)"],
                    images: images_qasques_MTB_OFFPATH_BLACK
                },
                {
                    id: 2,
                    title: "CUBE Helmet OFFPATH",
                    price: "89.95 EUR",
                    colors: ["BLACK"],
                    description: "The new CUBE Helmet OFFPATH is the more compact successor to our PATHOS mtb race helmet. Double in-mould construction, 19 large air vents and improved ventilation channels let you keep a cool head on the hottest of trails! Maximum comfort and a perfect fit are courtesy of our proprietary Natural Fit system developed in-house. The SNAP 360 Fit System with MIPS integration adjusts with one hand, and because we know all heads are different, we also made the height adjustable. Different padding thickness are included so you can fine-tune the fit and comfort even further. Removable, washable pads are just how we roll, and the visor is removable too. Matte or glossy finish? It's a matter of taste! The integrated light and X-Lock mounting system are all rolled in as standard.",
                    caracteristiques: ["MTB race helmet for mountain bikers","19 large vents","improved ventilation channels","removable visor","SNAP 360 Fit System integrated into the MIPS layer with height and width adjustment can be fine-tuned with one hand for a perfect fit","double in-mould construction","flat dividers for optimised webbing guiding","X-Lock mounting system","removable & washable pads","other pad thicknesses available","padded ratchet chin closure"],
                    couleur: 'GREEN',
                    materiau: "EPS double-in-mould",
                    poids: ["350 g (avec visière)"],
                    taille: ["M (52-57)","L (57-62)","XL (59-64)"],
                    images: images_qasques_MTB_OFFPATH_GREEN
                }
            ],
            stray: [
                {
                    id: 1,
                    title: "CUBE Helmet STRAY",
                    price: "79.95 EUR",
                    colors: ["ORANGE"],
                    description: "",
                    caracteristiques: ["MTB Trail","MIPS","extra coverage at the back","13 large ventilation channels","fixed breakaway visor","integrated X-Lock-Adapter for ACID Accessoires","light compatible","height-adjustable Snap 360 Fit System can be adjusted with one hand for the perfect fit","In-Mould Construction","Flat Dividers for dual-sided webbing adjustment","removable and washable padding"],
                    couleur: 'BLACK',
                    materiau: "EPS in-mould",
                    poids: ["385 g (with visor)"],
                    taille: ["XS (46-51)","S (49-55)","M (52-57)","L (57-62)"],
                    images: images_qasques_MTB_STRAY_BLACK
                },
                {
                    id: 2,
                    title: "CUBE Helmet STRAY",
                    price: "79.95 EUR",
                    colors: ["BLACK"],
                    description: "Every mountain bike adventure starts when the known trail ends and you stray from the path into uncharted territories. The STRAY will make sure you get down the hills fast, safe and in style. It's equipped with the latest Mips technology, added coverage for the neck and a break-away visor to ensure maximum protection for your head. 13 vents help you to keep a cool head while riding - uphill and downhill. On the back we also integrated our new X-Lock System for mounting a heap of compatible accessories like lights and more. It comes with a Duraflex buckle, our reliable Snap 360 fit system, an easy-to-adjust webbing divider and optimised padding for a perfect fit.",
                    caracteristiques: ["MTB Trail","MIPS","extra coverage at the back","13 large ventilation channels","fixed breakaway visor","integrated X-Lock-Adapter for ACID Accessoires","light compatible","height-adjustable Snap 360 Fit System can be adjusted with one hand for the perfect fit","In-Mould Construction","Flat Dividers for dual-sided webbing adjustment","removable and washable padding"],
                    couleur: 'ORANGE',
                    materiau: "EPS in-mould",
                    poids: ["385 g (with visor)"],
                    taille: ["XS (46-51)","S (49-55)","M (52-57)","L (57-62)"],
                    images: images_qasques_MTB_STRAY_ORANGE
                }
            ]
        },
        
    },
    vetements: {
        homme: {
            maillots: [
                {
                    id: 1,
                    title: "Maillot CUBE ROAD/XC X Factory Racing S/S",
                    price: "70.95 EUR",
                    colors: ["BLACK"],
                    description: "Notre maillot à manches courtes CUBE Road/XC à la coupe athlétique et ajustée offre une grande liberté de mouvement au niveau des épaules. Grâce à la fermeture éclair sur toute la longueur à l'avant, il est facile à enfiler et à enlever. L'ourlet imprimé en silicone et le col préformé garantissent un maintien sûr sans laisser passer les courants d'air. Une poche latérale zippée étanche est cachée dans la poche arrière en 3 parties : pratique pour les objets de valeur tels que les billets de banque ou les smartphones.",
                    caracteristiques: ["coupe ajustée","ourlet élastique adhérent","fermeture éclair sur toute la longueur","poche arrière en 3 parties avec soufflet d'extension","poche déperlante à l'arrière","tissu fonctionnel à séchage rapide","sans coutures au niveau des épaules","éléments réfléchissants"],
                    couleur: 'BLUE',
                    materiau: ["85 % polyester","15 % élasthanne"],
                    taille: "XS-XXXL",
                    images: images_vetements_HOMME_MAILLOTS_BLUE
                },
                {
                    id: 2,
                    title: "Maillot CUBE ROAD/XC TEAMLINE S/S",
                    price: "70.95 EUR",
                    colors: ["BLUE"],
                    description: "Notre maillot à manches courtes CUBE Road/XC à la coupe athlétique et ajustée offre une grande liberté de mouvement au niveau des épaules. Grâce à la fermeture éclair sur toute la longueur à l'avant, il est facile à enfiler et à enlever. L'ourlet imprimé en silicone et le col préformé garantissent un maintien sûr sans laisser passer les courants d'air. Une poche latérale zippée étanche est cachée dans la poche arrière en 3 parties : pratique pour les objets de valeur tels que les billets de banque ou les smartphones.",
                    caracteristiques: ["coupe ajustée","ourlet élastique adhérent","fermeture éclair sur toute la longueur","poche arrière en 3 parties avec soufflet d'extension","poche déperlante à l'arrière","tissu fonctionnel à séchage rapide","sans coutures au niveau des épaules","éléments réfléchissants"],
                    couleur: 'BLACK',
                    materiau: ["85 % polyester","15 % élasthanne"],
                    taille: "XS-XXXL",
                    images: images_vetements_HOMME_MAILLOTS_BLACK
                },
            ],
            pantalon_bretelles: [
                {
                    id: 1,
                    title: "CUBE ROAD/XC XC Suit",
                    price: "199.95 EUR ",
                    colors: ["BLACK"],
                    description: "Constructed from a durable fabric blend, the CUBE XC Suit is designed especially to meet the rigours of cross country racing and the perfect choice for demanding racers. Harder-wearing shorts are combined with a gilet-style top and the zip opens further than on a standard jersey for maximum ventilation in the heat of competition. A practical highlight is the mesh layer over the rear pocket for slotting in your race number. The shorts come with the CUBE Team Pad chamois for the same unparalleled comfort offered by our Pro Bib Shorts.",
                    caracteristiques: ["Race Suit designed for cross country","breathable and quick drying","durable material bland","3-part rear pocket for race nutrition","CUBE Team Pad – made in Italy"],
                    couleur: "WHITE",
                    materiau: ["85 % polyester","15 % élasthanne"],
                    taille: "XS-XXXL",
                    images: images_vetements_HOMME_PANTALON_BRETELLES_WHITE
                },
                {
                    id: 2,
                    title: "CUBE ROAD/XC Bib Shorts",
                    price: "99.95 EUR",
                    colors: ["WHITE"],
                    description: "Constructed from a durable fabric blend, the CUBE XC Suit is designed especially to meet the rigours of cross country racing and the perfect choice for demanding racers. Harder-wearing shorts are combined with a gilet-style top and the zip opens further than on a standard jersey for maximum ventilation in the heat of competition. A practical highlight is the mesh layer over the rear pocket for slotting in your race number. The shorts come with the CUBE Team Pad chamois for the same unparalleled comfort offered by our Pro Bib Shorts.",
                    caracteristiques: ["Race Suit designed for cross country","breathable and quick drying","durable material bland","3-part rear pocket for race nutrition","CUBE Team Pad – made in Italy"],
                    couleur: "BLACK",
                    materiau: ["85 % polyester","15 % élasthanne"],
                    taille: "XS-XXXL",
                    images: images_vetements_HOMME_PANTALON_BRETELLES_BLACK
                }
            ],
            sweats_tshirts: [
                {
                    id: 1,
                    title: "T-shirt biologique CUBE Vert Session GTY FIT",
                    price: "50.OO EUR",
                    colors: ["PETROLE"],
                    description: "Un design décontracté et ample rencontre du coton biologique doux dans ce t-shirt à coupe gravity. Vous n'avez pas besoin de courir pour le porter, mais nous pensons qu'il est parfait pour ces vibrations d'après-course et suffisamment élégant pour être porté partout où vous voulez montrer votre amour pour CUBE.",
                    caracteristiques: ["tissu confortable","coton biologique","petit logo brodé sur le devant","taille du mannequin 182 cm","le mannequin porte une taille M"],
                    couleur: 'BLACK',
                    materiau: ["100% organic cotton"],
                    taille: "XS -XXXL",
                    images: images_vetements_HOMME_SWEATS_TSHIRTS_BLACK
                },
                {
                    id: 2,
                    title: "T-shirt biologique CUBE Trail Proven GTY FIT",
                    price: "50.OO EUR",
                    colors: ["BLACK"],
                    description: "Un design décontracté et ample rencontre du coton biologique doux dans ce t-shirt à coupe gravity. Vous n'avez pas besoin de courir pour le porter, mais nous pensons qu'il est parfait pour ces vibrations d'après-course et suffisamment élégant pour être porté partout où vous voulez montrer votre amour pour CUBE.",
                    caracteristiques: ["tissu confortable","coton biologique","petit logo brodé sur le devant","taille du mannequin 182 cm","le mannequin porte une taille M"],
                    couleur: 'PETROLE',
                    materiau: ["100% organic cotton"],
                    taille: "XS -XXXL",
                    images: images_vetements_HOMME_SWEATS_TSHIRTS_PETROLE
                }
            ],
            casquettes_basiques: [
                {
                    id: 1,
                    title: "CUBE Trail Builder Hat",
                    price: "20.00 EUR",
                    colors: ["GRIS"],
                    description: "The CUBE Trail Builder Hat is your ideal companion whilst shaping new trails for you and your friends. With its robust material and stylish design, it is ideal for track walks & a cold drink afterwards!",
                    caracteristiques: ["logo patch","adjustable strap"],
                    couleur: 'BLACK',
                    materiau: ["55 % coton biologique","45 % polyester recyclé"],
                    taille: "one size",
                    images: images_vetements_HOMME_CASQUETTES_BASIQUES_BLACK
                },
                {
                    id: 2,
                    title: "Chapeau bob CUBE",
                    price: "20.00 EUR",
                    colors: ["BLACK"],
                    description: "The CUBE Trail Builder Hat is your ideal companion whilst shaping new trails for you and your friends. With its robust material and stylish design, it is ideal for track walks & a cold drink afterwards!",
                    caracteristiques: ["logo patch","adjustable strap"],
                    couleur: 'GRIS',
                    materiau: ["55 % coton biologique","45 % polyester recyclé"],
                    taille: "one size",
                    images: images_vetements_HOMME_CASQUETTES_BASIQUES_GRIS
                }
            ],
        },
        femme: {
            maillots: [
                {
                    id: 1,
                    title: "Maillot CUBE ROAD/XC X Factory Racing S/S",
                    price: "70.95 EUR",
                    colors: ["BLACK"],
                    description: "Notre maillot à manches courtes CUBE Road/XC à la coupe athlétique et ajustée offre une grande liberté de mouvement au niveau des épaules. Grâce à la fermeture éclair sur toute la longueur à l'avant, il est facile à enfiler et à enlever. L'ourlet imprimé en silicone et le col préformé garantissent un maintien sûr sans laisser passer les courants d'air. Une poche latérale zippée étanche est cachée dans la poche arrière en 3 parties : pratique pour les objets de valeur tels que les billets de banque ou les smartphones.",
                    caracteristiques: ["coupe ajustée","ourlet élastique adhérent","fermeture éclair sur toute la longueur","poche arrière en 3 parties avec soufflet d'extension","poche déperlante à l'arrière","tissu fonctionnel à séchage rapide","sans coutures au niveau des épaules","éléments réfléchissants"],
                    couleur: 'BLUE',
                    materiau: ["85 % polyester","15 % élasthanne"],
                    taille: "XS-XXXL",
                    images: images_vetements_FEMME_MAILLOTS_BLUE
                },
                {
                    id: 1,
                    title: "Maillot CUBE ROAD/XC X Factory Racing S/S",
                    price: "70.95 EUR",
                    colors: ["BLUE"],
                    description: "Notre maillot à manches courtes CUBE Road/XC à la coupe athlétique et ajustée offre une grande liberté de mouvement au niveau des épaules. Grâce à la fermeture éclair sur toute la longueur à l'avant, il est facile à enfiler et à enlever. L'ourlet imprimé en silicone et le col préformé garantissent un maintien sûr sans laisser passer les courants d'air. Une poche latérale zippée étanche est cachée dans la poche arrière en 3 parties : pratique pour les objets de valeur tels que les billets de banque ou les smartphones.",
                    caracteristiques: ["coupe ajustée","ourlet élastique adhérent","fermeture éclair sur toute la longueur","poche arrière en 3 parties avec soufflet d'extension","poche déperlante à l'arrière","tissu fonctionnel à séchage rapide","sans coutures au niveau des épaules","éléments réfléchissants"],
                    couleur: 'BLACK',
                    materiau: ["85 % polyester","15 % élasthanne"],
                    taille: "XS-XXXL",
                    images: images_vetements_FEMME_MAILLOTS_BLACK
                }
            ],
            pantalon_bretelles: [
                {
                    id: 1,
                    title: "CUBE ROAD/XC WS Bib Shorts PRO",
                    price: "199.95 EUR ",
                    colors: ["BLACK"],
                    description: "Constructed from a durable fabric blend, the CUBE XC Suit is designed especially to meet the rigours of cross country racing and the perfect choice for demanding racers. Harder-wearing shorts are combined with a gilet-style top and the zip opens further than on a standard jersey for maximum ventilation in the heat of competition. A practical highlight is the mesh layer over the rear pocket for slotting in your race number. The shorts come with the CUBE Team Pad chamois for the same unparalleled comfort offered by our Pro Bib Shorts.",
                    caracteristiques: ["Race Suit designed for cross country","breathable and quick drying","durable material bland","3-part rear pocket for race nutrition","CUBE Team Pad – made in Italy"],
                    couleur: "WHITE",
                    materiau: ["85 % polyester","15 % élasthanne"],
                    taille: "XS-XXXL",
                    images: images_vetements_FEMME_PANTALON_BRETELLES_WHITE
                },
                {
                    id: 2,
                    title: "CUBE ROAD/XC WS Bib Shorts",
                    price: "99.95 EUR",
                    colors: ["WHITE"],
                    description: "Constructed from a durable fabric blend, the CUBE XC Suit is designed especially to meet the rigours of cross country racing and the perfect choice for demanding racers. Harder-wearing shorts are combined with a gilet-style top and the zip opens further than on a standard jersey for maximum ventilation in the heat of competition. A practical highlight is the mesh layer over the rear pocket for slotting in your race number. The shorts come with the CUBE Team Pad chamois for the same unparalleled comfort offered by our Pro Bib Shorts.",
                    caracteristiques: ["Race Suit designed for cross country","breathable and quick drying","durable material bland","3-part rear pocket for race nutrition","CUBE Team Pad – made in Italy"],
                    couleur: "BLACK",
                    materiau: ["85 % polyester","15 % élasthanne"],
                    taille: "XS-XXXL",
                    images: images_vetements_FEMME_PANTALON_BRETELLES_BLACK
                }
            ],
            sweats_tshirts: [
                {
                    id: 1,
                    title: "CUBE WS Zip Hoodie Advanced",
                    price: "89.95 EUR",
                    colors: ["WHITE"],
                    description: "Un design décontracté et ample rencontre du coton biologique doux dans ce t-shirt à coupe gravity. Vous n'avez pas besoin de courir pour le porter, mais nous pensons qu'il est parfait pour ces vibrations d'après-course et suffisamment élégant pour être porté partout où vous voulez montrer votre amour pour CUBE.",
                    caracteristiques: ["tissu confortable","coton biologique","petit logo brodé sur le devant","taille du mannequin 182 cm","le mannequin porte une taille M"],
                    couleur: 'BLACK',
                    materiau: ["100% organic cotton"],
                    taille: "XS -XXXL",
                    images: images_vetements_FEMME_SWEATS_TSHIRTS_BLACK
                },
                {
                    id: 2,
                    title: "CUBE Organic WS Sweater",
                    price: "89.95 EUR",
                    colors: ["BLACK"],
                    description: "Un design décontracté et ample rencontre du coton biologique doux dans ce t-shirt à coupe gravity. Vous n'avez pas besoin de courir pour le porter, mais nous pensons qu'il est parfait pour ces vibrations d'après-course et suffisamment élégant pour être porté partout où vous voulez montrer votre amour pour CUBE.",
                    caracteristiques: ["tissu confortable","coton biologique","petit logo brodé sur le devant","taille du mannequin 182 cm","le mannequin porte une taille M"],
                    couleur: 'WHITE',
                    materiau: ["100% organic cotton"],
                    taille: "XS -XXXL",
                    images: images_vetements_FEMME_SWEATS_TSHIRTS_WHITE
                }
            ],
            casquettes_basiques: [
                {
                    id: 1,
                    title: "CUBE Trail Builder Hat",
                    price: "20.00 EUR",
                    colors: ["GRIS"],
                    description: "The CUBE Trail Builder Hat is your ideal companion whilst shaping new trails for you and your friends. With its robust material and stylish design, it is ideal for track walks & a cold drink afterwards!",
                    caracteristiques: ["logo patch","adjustable strap"],
                    couleur: 'BLACK',
                    materiau: ["55 % coton biologique","45 % polyester recyclé"],
                    taille: "one size",
                    images: images_vetements_HOMME_CASQUETTES_BASIQUES_BLACK
                },
                {
                    id: 2,
                    title: "Chapeau bob CUBE",
                    price: "20.00 EUR",
                    colors: ["BLACK"],
                    description: "The CUBE Trail Builder Hat is your ideal companion whilst shaping new trails for you and your friends. With its robust material and stylish design, it is ideal for track walks & a cold drink afterwards!",
                    caracteristiques: ["logo patch","adjustable strap"],
                    couleur: 'GRIS',
                    materiau: ["55 % coton biologique","45 % polyester recyclé"],
                    taille: "one size",
                    images: images_vetements_HOMME_CASQUETTES_BASIQUES_GRIS
                }
            ],
        },
    },
    gants: {
        gravity: [
            {
                    id: 1,
                    title: "Gants CUBE Gravity à doigts longs TM",
                    price: "50.00 EUR",
                    colors: ["BLUE"],
                    description: "Conçus pour des performances tout-terrain extrêmes : les gants à doigts longs CUBE Gravity. La partie supérieure durable est conçue pour résister aux rigueurs d'une conduite difficile, tandis que la paume ventilée et l'impression adhérente sur le bout des doigts offrent une prise ferme sur le guidon dans toutes les situations. Un revers ajusté et des bouts de doigts sans couture offrent un confort maximal pour que vous puissiez vous concentrer sur le sentier.",
                    caracteristiques: ["matériau extérieur résistant","paume ventilée","manchette ajustée","bout des doigts avec imprimé adhérent","index avec fonction tactile","construction du bout des doigts sans couture"],
                    couleur: 'OLIVE',
                    materiau: ["main extérieure : 75 % polyester","15 % nylon","10 % élasthanne","paume : 90 % polyester","10 % élasthanne"],
                    taille: "XS (6)-XXL (11)",
                    images: images_gants_GRAVITY_OLIVE
            },
            {
                    id: 2,
                    title: "Gants CUBE Gravity à doigts longs X Actionteam",
                    price: "50.00 EUR",
                    colors: ["OLIVE"],
                    description: "Conçus pour des performances tout-terrain extrêmes : les gants à doigts longs CUBE Gravity. La partie supérieure durable est conçue pour résister aux rigueurs d'une conduite difficile, tandis que la paume ventilée et l'impression adhérente sur le bout des doigts offrent une prise ferme sur le guidon dans toutes les situations. Un revers ajusté et des bouts de doigts sans couture offrent un confort maximal pour que vous puissiez vous concentrer sur le sentier.",
                    caracteristiques: ["matériau extérieur résistant","paume ventilée","manchette ajustée","bout des doigts avec imprimé adhérent","index avec fonction tactile","construction du bout des doigts sans couture"],
                    couleur: 'BLUE',
                    materiau: ["main extérieure : 75 % polyester","15 % nylon","10 % élasthanne","paume : 90 % polyester","10 % élasthanne"],
                    taille: "XS (6)-XXL (11)",
                    images: images_gants_GRAVITY_BLUE
            }
        ],
        race: [
            {
                    id: 1,
                    title: "CUBE Gloves Race long finger",
                    price: "34.95 EUR ",
                    colors: ["BLACK"],
                    description: "The CUBE Race long-finger gloves deliver comfort and grip in spades for ambitious off-road, gravel and on-road riders. With a breathable upper material, ventilated palm and seamless cuff, they are super comfy to wear. Grip prints on the fingertips improve handlebar contact, while touchscreen pads on the thumb make these a great smartphone-friendly option.",
                    caracteristiques: ["matériau extérieur résistant","paume ventilée","manchette ajustée","bout des doigts avec imprimé adhérent","index avec fonction tactile","construction du bout des doigts sans couture"],
                    couleur: 'BLANC',
                    materiau: ["15 % nylon","10 % élasthanne","paume : 90 % polyester","10 % élasthanne"],
                    taille: "XS (6)-XXL (11)",
                    images: images_gants_RACE_BLANC
            },
            {
                id: 2,
                title: "CUBE Gloves Race long finger",
                price: "34.95 EUR ",
                colors: ["BLANC"],
                description: "The CUBE Race long-finger gloves deliver comfort and grip in spades for ambitious off-road, gravel and on-road riders. With a breathable upper material, ventilated palm and seamless cuff, they are super comfy to wear. Grip prints on the fingertips improve handlebar contact, while touchscreen pads on the thumb make these a great smartphone-friendly option.",
                caracteristiques: ["matériau extérieur résistant","paume ventilée","manchette ajustée","bout des doigts avec imprimé adhérent","index avec fonction tactile","construction du bout des doigts sans couture"],
                couleur: 'BLACK',
                materiau: ["15 % nylon","10 % élasthanne","paume : 90 % polyester","10 % élasthanne"],
                taille: "XS (6)-XXL (11)",
                images: images_gants_RACE_BLACK
            }
        ],
    },
    chaussures: {
        mtb: {
            peak_pro: [
                {
                    id: 1,
                    title: "CUBE Shoes MTB PEAK PRO",
                    price: "149.95 EUR",
                    colors: [""],
                    description: "We think the MTB PEAK PRO is particularly special. It combines safety, wearability and stiffness in one shoe. With so many handy features packed into the Peak Pro, it's hard to know where to start. From the CUBE Protection Shield and CUBE Anti Slip System to the fibre-reinforced nylon outsole to reduce weight and add stiffness, this is a shoe you can depend on. The dirt-repellent upper keeps mud and dirt at bay, while the reflective heel details let the person behind know where you are at all times.",
                    caracteristiques: ["disc closure","Natural Fit performance moulding","Natural Fit insole","asymmetric design for equal pressure distribution","CUBE Protection Shield"],
                    couleur: 'BLACK',
                    materiau: ["upper: PU","sole: fibre-reinforced nylon, rubber"],
                    taille: ["EU 36-48",'UK 3-12.5','CM 22.5-31.5'],
                    images: images_chaussures_MTB_PEACK_PRO_BLACK
                }
            ],
            peak: [
                {
                    id: 1,
                    title: "CUBE Shoes MTB PEAK",
                    price: "109.95 EUR",
                    colors: [""],
                    description: "As one of the most important contact points between you and your bike, the MTB PEAK Shoe efficiently transfers every ounce of power to the bike. Not only does it look great, but the adjustable touch fastener with grip tab makes it super easy to find the perfect fit. The asymmetrical design prevents pressure spots from developing during long days in the saddle, while air holes deliver excellent climate control.",
                    caracteristiques: ["disc closure","Natural Fit performance moulding","Natural Fit insole","asymmetric design for equal pressure distribution","CUBE Protection Shield"],
                    couleur: 'BLACK',
                    materiau: ["upper: PU | sole: fibre-reinforced nylon, rubber"],
                    taille: ["EU 36-48",'UK 3-12.5','CM 22.5-31.5'],
                    images: images_chaussures_MTB_PEACK_BLACK
            }
        ],
        },
        all_terrain: {
            ox_pro: [
                {
                    id: 1,
                    title: "CUBE Shoes ATX OX PRO",
                    price: "149.95 EUR",
                    colors: [""],
                    description: "Stand out from the crowd with the ATX OX PRO's distinctive combination of form, colour and materials. The knitted upper, mesh material and ventilation holes not only culminate in an eye-catching and super-stylish design, they also ensure perfect climate control. And the disc closure makes it easy to slip them on and off and make adjustments on the fly. Segue seamlessly from on the bike to off it, with the ATX OX PRO!",
                    caracteristiques: ["disc closure","Natural Fit performance moulding","Natural Fit insole","asymmetric design for equal pressure distribution","CUBE Protection Shield"],
                    couleur: 'GREY',
                    materiau: ["upper: mesh, PU","sole: EVA, rubber, nylon"],
                    taille: ["EU 36-48",'UK 3-12.5','CM 22.5-31.5'],
                    images: images_chaussures_ALL_TERRAIN_OX_PRO_GREY
                }
            ],
            ox: [
                {
                    id: 1,
                    title: "CUBE Shoes ATX OX",
                    price: "99.95 EUR",
                    colors: [""],
                    description: "La marque CUBE est synonyme de produits innovants et de haute qualité qui sont toujours orientés sur les tendances actuelles. Les produits sont parfaitement ajustés les uns aux autres par la coopération étroite des designers dans le développement des accessoires et des vélos et engendrent ainsi la meilleure combinaison en matière de design, de technique et d’utilisabilité.",
                    caracteristiques: ["disc closure","Natural Fit performance moulding","Natural Fit insole","asymmetric design for equal pressure distribution","CUBE Protection Shield"],
                    couleur: 'GREY',
                    materiau: ["upper: mesh, PU","sole: EVA, rubber, nylon"],
                    taille: ["EU 36-48",'UK 3-12.5','CM 22.5-31.5'],
                    images: images_chaussures_ALL_TERRAIN_OX_GREY
                }
            ]
        },
    }
};






const SliceGear=createSlice({
    name:'gear',
    initialState:initVal,
    reducers:{

    }
})

export default SliceGear.reducer ;