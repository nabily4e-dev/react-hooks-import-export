import React from "react";
import howManyParks from "./parks/howManyParks";
import aDifferentName from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
// import { trees, wildlife } from "./parks/RockyMountain";
import * as RMFunctions from "./parks/RockyMountain";

import {
    trees as parkTrees,
    wildlife as parkWildlife,
} from "./parks/RockyMountain";

function ColoradoStateParks() {
    // howManyParks(); // => "42 parks!"
    // console.log(trees);
    // console.log(RMFunctions.trees);
    console.log(parkTrees);
    return (
        <div>
            <MesaVerde/>
        </div>
    );
    // wildlife();
    // RMFunctions.wildlife();
    parkWildlife();
    aDifferentName(); // => "42 parks!"
    return <h1>Colorado State Parks!</h1>;
    // RMFunctions.elevation();
}

export default ColoradoStateParks;