import {normal, difference} from "color-blend"
export default function colorCreator(colorA, colorB){

    fetch('https://color-mixer-361.herokuapp.com/', {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(colorData),
    })
    .then(res => res = res.text())
    .then(data => {
        data = data.replace(/^"(.*)"$/, '$1');
        return data
    }
    )
  }    
