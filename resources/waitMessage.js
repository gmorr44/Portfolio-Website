const box = document.querySelector('.optionsLink');
const words = document.querySelector('.opttext');

function count(){
    let num = .6;
    let up = true;
    setInterval(function(){
        if(up === true){
            num += 0.08;
            words.style.opacity = num.toString();
            if(num > 1.0){
                up = false;
            }
        }
        if(up === false){
            num -= 0.08;
            words.style.opacity = num.toString();
            if(num < 0.4){
                up = true;
            }
        }    
    },150) 
}
box.addEventListener('click', function(){
    words.textContent = 'Opening Project...';
    words.style.fontSize = "22px";
    words.style.color = "white";
    count();
})