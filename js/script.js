
// ================ slides de imagens ================
const imgs_slides = _ => {
    var img_baner = document.querySelector('.div-corrosceu-baner').children;
    var contador = 0, limite = img_baner.length, inicio = true;

    setInterval(function () {

        if (contador == limite) {
            contador = 0
            img_baner[limite - 1].setAttribute('class', 'de')
        }
        
        if (contador >= 1) img_baner[contador - 1].setAttribute('class', 'de')

        if(inicio){
            img_baner[contador + 1].setAttribute('class', 'ley')
            inicio = false;
        }else{
            img_baner[contador].setAttribute('class', 'ley')
        }

        contador++

    }, 3000)
}

window.addEventListener('load', imgs_slides)


// ================ animação de deslocamento lateral dos artigos ==========
var verificaScroll = setInterval(intervalo, 100)

function intervalo() {

    let dtopo1 = document.querySelector('.ptf1').offsetTop;
    let dtopo2 = document.querySelector('.ptf2').offsetTop;
    if (window.scrollY > (dtopo1 - 200)) animacao(1);
    if (window.scrollY > (dtopo2 - 200)) animacao(2);

}

const animacao = (a) => {
    if (a == 1) $('#div_animacao').animate({ marginLeft: `+${5}px` }, 700)
    if (a == 2) {
        $('#div_animacao2').animate({ marginLeft: `+${0}px` }, 700)
        clearInterval(verificaScroll)
    }
}


// ===================== menu ======================
var stateMenu = 0;
document.querySelector('#menu').addEventListener('click', ()=>{
    if(stateMenu == 0){
        var t = 1000;
        $('.menu-a').slideDown(t).css('display', 'flex')
        stateMenu = 1
        return;
    }
    if(stateMenu == 1){
        var t = 1000;
        $('.menu-a').slideUp(t)
        stateMenu = 0
    }
})