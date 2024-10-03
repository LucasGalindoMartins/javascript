function gerar()
{
    var num = document.getElementById('inum')
    var val = Number(num.value)

    if(num.value.length == 0)
    {
        window.alert("Por favor, digite um número!!")
    }

    else
    {
        tabuada.innerHTML = `SUA TABUADA: <br>`

        for(var c = 1; c <=10; c++)
        {
            var mul = val * c
            tabuada.innerHTML += `${val}x${c} = ${mul}<br>`
        }
    }
}