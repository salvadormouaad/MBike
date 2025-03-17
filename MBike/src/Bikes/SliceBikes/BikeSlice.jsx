import { Agree , Ams , Hyde } from "./BikesPic/Bikes";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    MountainBike:{
        FullSuspension : {
            AMS :[
            {
                Id : 1,
                Name : 'AMS ZERO99 C:68X SLX 29',
                Taille : ['S','M','L','XL'],
                Frein : 'Magura MT8 SL, Hydr. Disc Brake (180/160)',
                Chaine : 'Sram GX Eagle™ Transmission',
                Roues : 'Newmen Phase 30 light/light Carbon, 28/28 Spokes, 15x110mm/12x148mm, Tubeless Ready',
                Poids : '10,7 Kg',
                Price : '6599 EUR',
                Images : Ams.Ams1,
            },
            {
                Id : 2,
                Name : 'AMS ZERO99 C:68X',
                Taille : ['S','M','L','XL'],
                Frein : 'Shimano XT BR-M8100, Hydr. Disc Brake (180/160)',
                Chaine : 'Shimano CN-M6100',
                Roues : 'Newmen Beskar 30 light/light, 28/28 Spokes, 15x110mm/12x148mm, Tubeless Ready',
                Poids : '11,6 Kg',
                Price : '4999 EUR',
                Images : Ams.Ams2
            },
            {
                Id : 3,
                Name : 'AMS ZERO99 C:68X RACE 29',
                Taille : ['S','M','L','XL'],
                Frein : 'Shimano XT BR-M8100, Hydr. Disc Brake (180/160)',
                Chaine : 'Shimano CN-M6100',
                Roues : 'Newmen Beskar 30 light/light, 28/28 Spokes, 15x110mm/12x148mm, Tubeless Ready',
                Poids : '11,5 Kg',
                Price : '4999 EUR',
                Images : Ams.Ams3
            }
            ]

        }
    },
    Road : {
        RoadRace : {
            Agree : [
            {
                Id : 1,
                Name : 'AGREE C:62',
                Taille : ['47cm', '50cm', '53cm', '56cm', '58cm', '60cm', '62cm'],
                Frein : 'Sram Force AXS™ (160/160)',
                Chaine : 'Sram Force D1',
                Roues : 'Newmen Streem C.35/38 Carbon, 21/24 Spokes, 12x100mm/12x142mm, Tubeless Ready',
                Poids : '7,5 Kg',
                Price : '4399 EUR',
                Images : Agree.Agree1,

            },
            {
                Id : 2,
                Name : 'AGREE C:62',
                Taille : ['50cm', '53cm', '56cm', '58cm', '60cm', '62cm'],
                Frein : 'Shimano Dura Ace BR-R9270, Hydr. Disc Brake, Flat Mount (160/160)',
                Chaine : 'Shimano CN-M8100',
                Roues : 'Newmen Streem A.49/54 Carbon, 21/24 Spokes, 12x100mm/12x142mm, Tubeless Ready',
                Poids : '7,4 Kg',
                Price : '5399 EUR',
                Images : Agree.Agree2,

            },
            {
                Id : 3,
                Name : ' AGREE C:62',
                Taille : ['50cm', '53cm', '56cm', '58cm', '60cm', '62cm'],
                Frein : 'Shimano Ultegra BR-R8170, Hydr. Disc Brake, Flat Mount (160/160)',
                Chaine : 'Shimano CN-M8100',
                Roues : 'Newmen Streem A.49/A.54 Carbon, 21/24 Spokes, 12x100mm/12x142mm, Tubeless Ready',
                Poids : '7,7 Kg',
                Price : '4099 EUR',
                Images : Agree.Agree3,

            },

            ]
        }
    },
    Trekking : {
        City : {
            Hyde :[
            {
                Id : 1,
                Name : 'HYDE PRO',
                Taille : ['XS', 'S', 'M'],
                Freins : 'Shimano BR-MT200, Hydr. Disc Brake (160/180)',
                Jantes : 'CUBE EX25, 28H / 32H, Disc, Tubeless Ready',
                Pneus : 'Schwalbe Big Apple, ActiveL, 55-622',
                Potence : 'CUBE Performance Stem Pro, 31.8mm',
                Poids : '12,6 Kg',
                Price : '1099 EUR',
                Images : Hyde.Hyde1,
            },
            {
                Id : 2,
                Name : 'HYDE PRO',
                Taille : ['XS', 'S', 'M','L'],
                Freins : 'Shimano BR-MT200, Hydr. Disc Brake (160/180)',
                Jantes : 'CUBE EX25, 28H / 32H, Disc, Tubeless Ready',
                Pneus : 'Schwalbe Big Apple, ActiveL, 55-622',
                Potence : 'CUBE Performance Stem Pro, 31.8mm',
                Poids : '12,6 Kg',
                Price : '1099 EUR',
                Images : Hyde.Hyde2,
            },
            {
                Id : 3,
                Name : 'HYDE One',
                Taille : ['XS', 'S', 'M','L','XL'],
                Freins : 'Shimano BR-MT200, Hydr. Disc Brake (160/180)',
                Jantes : 'CUBE EX25, 28H / 32H, Disc, Tubeless Ready',
                Pneus : 'Schwalbe Big Apple, ActiveL, 55-622',
                Potence : 'CUBE Performance Stem Pro, 31.8mm',
                Poids : '12,1 Kg',
                Price : '799 EUR',
                Images : Hyde.Hyde3,
            },
            ]
        }
    }
}
const BikeSlice = createSlice({
    name:"bike",
    initialState,
    reducers : {

    }
})
export default BikeSlice.reducer;
