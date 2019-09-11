document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

/* globalCompositeOperation :
normal | multiply | screen | overlay |
darken | lighten | color-dodge | color-burn | hard-light |
soft-light | difference | exclusion | hue | saturation |
color | luminosity
*/
ctx.globalCompositeOperation = 'multiply';

const lightBlue = "#008cff";
const blue = "#062840";
const blue2 = "#04204A";
const blue3 = "#030C40";
const black = "#000000";
const green1 = "#04454A";
const green2 = "#034033";

var granimInstance = new Granim({
    element: '#canvas',
    name: 'granim',

    opacity: [1, 1],
    states : {
    "default-state": {
        gradients: [
            // [black, blue],
            // [lightBlue, blue],
            // [blue, lightBlue],
            // [black, blue]
            [blue, blue3],
            [blue3, blue2],
            [blue, green1],
            [green1, green2]
        ]
    }
    }
});

})


