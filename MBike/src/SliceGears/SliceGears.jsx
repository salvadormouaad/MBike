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
            maillots: [],
            vestesgiletspochos: [],
            pantalon_bretelles: [],
            sous_vetehomemts: [],
            sweats_tshirts: [],
            casquettes_basiques: [],
        },
        femme: {
            maillots: [],
            vestesgiletspochos: [],
            pantalon_bretelles: [],
            sous_vetehomemts: [],
            sweats_tshirts: [],
            casquettes_basiques: [],
        },
    },
    gants: {
        gravity: [],
        race: [],
        cmpt: [],
        rookie: []
    },
    chaussures: {
        road: {
            sydrix: []
        },
        mtb: {
            peak_pro: [],
            peak: [],
        },
        all_terrain: {
            ox_pro: [],
            ox: []
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