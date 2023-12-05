let rgb = 0
const animatebackground = () =>{
    if(rgb <= 255){
        rgb++;
        document.body.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`;
        requestAnimationFrame(animatebackground)
    }

}
requestAnimationFrame(animatebackground)
