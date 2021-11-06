const turnOnOff = document.getElementById('turnOnOff')
const lamp = document.getElementById('lamp')

function isLampBronken () { //essa função é para saber se a lamp está quebrada
    return lamp.src.indexOf('quebrada') > -1 //o indexof procura se tem essa string dentro do source; se não tiver, ele retorna (-1), por isso que eu quero um valor maior que (-1)
}

function lampOn () {
    if ( !isLampBronken ()) { //só vai funcionar se a lampada não estiver quebrada 
        lamp.src ='./img/ligada.jpg'
        }
}

function lampOff () {
    if (!isLampBronken ()) {
        lamp.src ='./img/desligada.jpg'
        }
}

function lampBroken() {
    lamp.src ='./img/quebrada.jpg'
}

function lampOnOff () {
    if (turnOnOff.textContent == 'Ligar') {
        lampOn()
        turnOnOff.textContent = 'Desligar'
    } else {
        lampOff()
        turnOnOff.textContent = 'Ligar'
    }
}

turnOnOff.addEventListener('click', lampOnOff)



lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)

lamp.addEventListener('dblclick', lampBroken)