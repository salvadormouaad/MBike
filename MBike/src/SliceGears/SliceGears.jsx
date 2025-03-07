import { createSlice } from "@reduxjs/toolkit";
import { images_qasques_ROAD_HERON_BLACK } from "./IMAGES_CASQUES/assets";
import { images_qasques_ROAD_HERON_BLANC } from "./IMAGES_CASQUES/assets";
import { images_qasques_ROAD_HERON_GREY_PRIZM } from "./IMAGES_CASQUES/assets";

const initVal={
    CASQUES:{

        ROAD:{
            HERON:[
                {
                    ID:1,
                    TITLE:'CUBE Helmet HERON',
                    PRICE:'199.95 EUR',
                    COLORS:['BLANC','GREY PRIZM','BLACK'],
                    DESCRIPTION:"When we set out to design the HERON, we didn't want to create just any road bike helmet. We wanted to create the ultimate road bike helmet! If you think aerodynamics come at the cost of an overheated head and painful neck – think again! After extensive wind tunnel testing, we came up with a design that directs cooling air over the entire head via deep ventilation channels yet doesn't look or feel too bulky in the process. At only 258g, our aero helmet gives you an extra portion of speed even on long-distance rides, while providing maximum comfort.",
                    CARACTERISTIQUES:["road helmet","MIPS","9 large vents","SILC 180+ Fit System with height and width adjustment can be fine-tuned with one hand for a perfect fit","triple-in-mould construction","flat dividers for optimized webbing guiding","removable, washable and antibacterial pads","other pad thicknesses available","Natural Fit concept","matt finish"],
                    COULEUR:'BLACK',
                    MATERIAU:'EPS triple-in-mould',
                    POIDS:'258 g',
                    TAILLE:["S (49-55)","M (52-57)","L (57-62)"],
                    IMAGES:images_qasques_ROAD_HERON_BLACK
                },
                {
                    ID:2,
                    TITLE:'CUBE Helmet HERON',
                    PRICE:'199.95 EUR',
                    COLORS:['GREY PRIZM','BLACK'],
                    DESCRIPTION:"When we set out to design the HERON, we didn't want to create just any road bike helmet. We wanted to create the ultimate road bike helmet! If you think aerodynamics come at the cost of an overheated head and painful neck – think again! After extensive wind tunnel testing, we came up with a design that directs cooling air over the entire head via deep ventilation channels yet doesn't look or feel too bulky in the process. At only 258g, our aero helmet gives you an extra portion of speed even on long-distance rides, while providing maximum comfort.",
                    CARACTERISTIQUES:["road helmet","MIPS","9 large vents","SILC 180+ Fit System with height and width adjustment can be fine-tuned with one hand for a perfect fit","triple-in-mould construction","flat dividers for optimized webbing guiding","removable, washable and antibacterial pads","other pad thicknesses available","Natural Fit concept","matt finish"],
                    COULEUR:"BLANC",
                    MATERIAU:"EPS triple-in-mould",
                    POIDS:"258 g",
                    TAILLE:["S (49-55)","M (52-57)","L (57-62)"],
                    IMAGES:images_qasques_ROAD_HERON_BLANC
                },
                {
                    ID:3,
                    TITLE:'CUBE Helmet HERON',
                    PRICE:"199.95 EUR",
                    COLORS:['BLANC','BLACK'],
                    DESCRIPTION:"When we set out to design the HERON, we didn't want to create just any road bike helmet. We wanted to create the ultimate road bike helmet! If you think aerodynamics come at the cost of an overheated head and painful neck – think again! After extensive wind tunnel testing, we came up with a design that directs cooling air over the entire head via deep ventilation channels yet doesn't look or feel too bulky in the process. At only 258g, our aero helmet gives you an extra portion of speed even on long-distance rides, while providing maximum comfort.",
                    CARACTERISTIQUES:["road helmet","MIPS","9 large vents","SILC 180+ Fit System with height and width adjustment can be fine-tuned with one hand for a perfect fit","triple-in-mould construction","flat dividers for optimized webbing guiding","removable, washable and antibacterial pads","other pad thicknesses available","Natural Fit concept","glossy + matt finish"],
                    COULEUR:"GREY PRIZM",
                    MATERIAU:"EPS triple-in-mould",
                    POIDS:"258 g",
                    TAILLE:["S (49-55)","M (52-57)","L (57-62)"],
                    IMAGES:images_qasques_ROAD_HERON_GREY_PRIZM
                }
            ],
            ROAD_RACE:[]
        },


        MTB:{
            STATUS_X:[],
            STROVER:[],
            TROOPER:[],
            FRISK:[],
            OFFPATH:[],
            STRAY:[]
        },


        ALL_TERRAIN:{
            EVOY_HYBRID:[],
            CINITY:[],
            FLEET:[],
            STEEP:[],
            DIRT:[]
        },


        ROOKIE:{
            LINOK:[],
            ANT:[],
            FINK:[],
        },


        ACCESSOIRES:[],


        PIECES_DETACHEES:[]

    },


    VETEMENTS:{
        HOMME:{
            MAILLOTS:[],
            VESTESGILETSPONCHOS:[],
            PANTALON_BRETELLES:[],
            SOUS_VETEHOMMETS:[],
            SWEATS_TSHIRTS:[],
            CASQUETTES_BASIQUES:[],

        },
        FEMME:{
            MAILLOTS:[],
            VESTESGILETSPONCHOS:[],
            PANTALON_BRETELLES:[],
            SOUS_VETEHOMMETS:[],
            SWEATS_TSHIRTS:[],
            CASQUETTES_BASIQUES:[],
        },
        LIGNES:{
            ROAD_XC:[],
            MTB:[],
            GRAVEL:[],
            JUNIOR:[],
            TENUE_D_APRÈS_COURSE_TRAVAIL:[],
            COUCHE_DE_BASE:[]
        }
    },


    GANTS:{
        GRAVITY:[],
        RACE:[],
        CMPT:[],
        ROOKIE:[]
    },


    CHAUSSURES:{
        ROAD:{
            SYDRIX:[]
        },
        MTB:{
            PEAK_PRO:[],
            PEAK:[],
            
        },
        ALL_TERRAIN:{
            OX_PRO:[],
            OX:[]
        },
        GRAVITY:{
            STRIX:[],
            MAZE:[]
        },
        PROTECTION_CHAUSSURE:[],
        PIECES_DETACHEES:[]
    }


};






const SliceGear=createSlice({
    name:'gear',
    initialState:initVal,
    reducers:{

    }
})

export default SliceGear.reducer ;