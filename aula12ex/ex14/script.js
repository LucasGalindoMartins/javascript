function carregar()
{
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 5 && hora <= 12)
    {
        img.src = 'manha.png'
        document.body.style.background = 'rgba(197, 63, 2, 0.623)'
    }

    else if(hora > 12 && hora <=18)
    {
        img.src = 'tarde.png'
        document.body.style.background = 'rgba(143, 65, 1, 0.712)'
    }

    else if(hora > 18 && hora <= 23)
    {
        img.src = 'noite.png'
        document.body.style.background = 'rgba(2, 1, 77, 0.986)'
    }

    else
    {
        img.src = 'madrugada.png'
        document.body.style.background = 'rgba(14, 1, 71, 0.986)'
    }
}

