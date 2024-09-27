function contar()
{
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var numi = Number(inicio.value)
    var numf = Number(fim.value)
    var nump = Number(passo.value)

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 || numi > numf)
    {
        res.innerHTML = "IMPOSSÍVEL CONTAR!!"
    }

    else if(nump == 0)
    {
        window.alert("Passo inválido!! Considerando PASSO 1")
        nump = 1

        res.innerHTML = `Contando: <br>`

        for(var c = numi; c <= numf; c = c + nump)
        {
            res.innerHTML += `${c} &#x1F449;`
        }

        res.innerHTML += `&#x1F3C1;`
    }

    else if(nump != 0)
    {
        res.innerHTML = `Contando: <br>`

        for(var c = numi; c <= numf; c = c + nump)
        {
            res.innerHTML += `${c} &#x1F449;`
        }

        res.innerHTML += `&#x1F3C1;`
    }
}