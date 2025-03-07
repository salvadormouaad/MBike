import { createSlice } from "@reduxjs/toolkit";

const initVal={
    CASQUES:{

        ROAD:{
            HERON:[],
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