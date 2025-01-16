function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.querySelector('div#res')
    var img = document.getElementById('img')

    if(fano.value.length == 0 || Number(fano.value) > ano)
    {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else
    {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var gen = ''

        if(fsex[0].checked)
        {
            gen = 'Homem' 
            if(idade >= 0 && idade < 15)
            {
                img.src= "img/crianca_mas.png"
            }
            else if (idade < 21)
            {
                img.src= "img/jovem_mas.png"
            }
            else if (idade < 60)
            {
                img.src= "img/adulto.png"
            }
            else
            {
                img.src= "img/idoso.png"
            }
        }
        else if (fsex[1].checked)
        {
            gen = 'Mulher'
            if(idade >= 0 && idade < 15)
                {
                    img.src= "img/crianca_fem.png"
                }
                else if (idade < 21)
                {
                    img.src= "img/jovem_fem.png"
                }
                else if (idade < 60)
                {
                    img.src= "img/adulta.png"
                }
                else
                {
                    img.src= "img/idosa.png"
                }
        }
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img) 
        
    }
}