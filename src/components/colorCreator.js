import {normal, difference} from "color-blend"
export default function colorCreator(colorA, colorB){

    // fetch('https://color-mixer-361.herokuapp.com/', {
    // method: 'POST',
    // mode: 'no-cors',
    // headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify(colorData),
    // })
    // .then(res => res = res.text())
    // .then(data => {
    //     data = data.replace(/^"(.*)"$/, '$1');
    //     return data
    // }
    // )
    
    let color1 = hexToRgb(colorA)
    let color2 = hexToRgb(colorB)
    if(colorB == "#FFFFFF"){
      color2.a = 0
    }
    let final_color = normal(color1, color2)
    let final= rgbToHex(final_color.r,final_color.g, final_color.b )
    return final
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16), 
      a: 0.5
    } : null;
  }

function rgbToHex(r, g, b) {
    let hex =  "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    return hex.slice(0, 7)
  }