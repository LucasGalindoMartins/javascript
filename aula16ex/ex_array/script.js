let num = document.getElementById('txtn')
let res = document.getElementById('res')
let n = Number(num.value)
let vet = [n]

function add()
{
    if (n < 1 || n > 100)
    {
        window.alert('Valor inválido ou já adicionado na lista!!')
    }

    else
    {
        let pos = vet.indexOf(n)
        if(pos == -1 )
        {
            let item = document.createElement('option')
            item.text = `Valor ${n} adicionado`
            tab.appendChild(item)
        }

        else
        {
            window.alert('Valor inválido ou já adicionado na lista!!')
        }
    }
}

function finish()
{
    vet.sort()
    res.innerHTML = `Ao todo, temos ${vet.length} números cadastrados`

    res.innerHTML += `O maior valor informado foi ${vet[0]}`

    res.innerHTML += `O menor valor informado foi ${vet[0]}`

}