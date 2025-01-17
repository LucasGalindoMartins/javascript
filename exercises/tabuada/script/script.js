function gerar()
{
    let num = document.getElementById('inum')
    let res = document.getElementById('res')

    if(num.value.length == 0)
    {
        window.alert('Preencha o campo "Número"')
    }
    else
    {
        let n = Number(num.value)
        res.innerHTML = ''

        for(c = 1; c <= 10; c += 1)
        {
            res.innerHTML += `${n} x ${c} = ${n*c} <br>`
        }
    }
}