function contar()
{
    let start = document.getElementById('iini')
    let end = document.getElementById('ifim')
    let pass = document.getElementById('ipas')
    let res = document.getElementById('res')
    
    if(start.value.length == 0 || end.value.length == 0 || pass.value.length == 0)
    {
        res.innerHTML = "Impossível contar! (faltam dados)"
        // window.alert('[ERRO] Faltam dados!!')
    }
    else
    {
        res.innerHTML = `Contando: <br>`
        let s = Number(start.value)
        let e = Number(end.value)
        let p = Number(pass.value)

        if(p <= 0)
        {
            window.alert('Passo inválido!! Considerando passo 1')
            p = 1
        }

        if(s < e)
        {
            for(let c = s; c <= e; c += p)
            {
                res.innerHTML += `${c} \u{27A1}`
            }
        }
        else
        {
            for(let c = s; c >= e; c -= p)
            {
                res.innerHTML += `${c} \u{27A1}` 
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}