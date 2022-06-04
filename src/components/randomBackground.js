
let i = 0;
function randomBackground(){
    i += 1
    i %= 5

    const colorPalate = ["#F4743B", "#BEEE62", "#70AE6E", "#3C6E71", "#483C46"]
    return(
        colorPalate[i]
    )
}

export default randomBackground;