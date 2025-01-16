function carregar()
{
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()
    // var hora = 14

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 4 && hora < 12)
    {
        img.src = 'img/manha.png'
        document.body.style.background = '#e2cd9f'
    }
    else if (hora >= 12 && hora < 18)
    {
        img.src = 'img/tarde.png'
        document.body.style.background = '#b9846f'
    }
    else if (hora >= 18)
    {
        img.src = 'img/noite.png'
        document.body.style.background = 'rgba(2, 1, 77, 0.986)'
    }
    else 
    {
        img.src = 'img/madrugada.png'
        document.body.style.backgorund = 'rgba(14, 1, 71, 0.986)'
    }
}

