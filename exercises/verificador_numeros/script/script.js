let num = document.querySelector('input#inum')
let list = document.querySelector('select#ilist')
let res = document.querySelector('div#res')
let val = []

function isNumber(n)
{
    if(Number(n) >= 1 && Number(n) <= 100)
    {
        return true
    }
    else
    {
        return false
    }
}

function inlist(n, l)
{
    if(l.indexOf(Number(n)) != -1)
    {
        return true
    }
    else
    {
        return false
    }
}

function add()
{
    if(isNumber(num.value) && !inlist(num.value, val))
    {
        val.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        list.appendChild(item)
        res.innerHTML = ''
    }
    else
    {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finish()
{
    if(val.length == 0)
    {
        window.alert('Adicione valores antes de finalizar!')
    }
    else
    {
        let tot = val.length
        let maior = val[0]
        let menor = val[0]
        let som = 0
        let med = 0


        for(let pos in val)
        {
            som += val[pos]
            if(val[pos] > maior)
            {
                maior = val[pos]
            }

            if(val[pos] < menor)
            {
                menor = val[pos]
            }
        }

        med = som/tot

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.`
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${som}.</p>`
        res.innerHTML += `<p>A média dos valores informados é ${med}.</p>`
    }
}