/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

WA.onInit().then(() => {
    //get map image url by replacing the {mapurl}.json/tmj with .png 
    let mapImage = WA.room.mapURL.substring(0, WA.room.mapURL.lastIndexOf(".")) + ".png";

    //get img-placeholder elemt and make sure its img
    let imgElement: HTMLImageElement = document.getElementById("mapImage") as HTMLImageElement;

    //replace imge src to mapImage url
    imgElement.src = mapImage;

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

export {} 