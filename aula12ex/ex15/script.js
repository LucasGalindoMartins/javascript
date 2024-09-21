function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano)
    {
        window.alert('[ERRO] Verifique os dados e tente novamente!!')
    }

    else
    {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked)
        {
            gen = 'MASCULINO'

            if(idade >= 0 && idade < 12)
            {
                img.setAttribute('src', 'crianca_mas.png')
            }

            else if(idade >=13 && idade <= 21)
            {
                img.setAttribute('src', 'jovem_mas.png')
            }

            else if(idade > 21 && idade < 60)
            {
                img.setAttribute('src', 'adulto.png')
            }

            else
            {
                img.setAttribute('src', 'idoso.png')
            }
        }

        else if(fsex[1].checked)
        {
            gen = 'FEMININO'

            if(idade >= 0 && idade < 12)
            {
                img.setAttribute('src', 'crianca_fem.png')
            }

            else if(idade >=13 && idade <= 21)
            {
                img.setAttribute('src', 'jovem_fem.png')
            }

            else if(idade > 21 && idade < 60)
            {
                img.setAttribute('src', 'adulta.png')
            }

            else
            {
                img.setAttribute('src', 'idosa.png')
            }
        }
        
        res.innerHTML = `Detectamos o gênero ${gen} com idade de ${idade} anos.`
        res.appendChild(img)
    }

}