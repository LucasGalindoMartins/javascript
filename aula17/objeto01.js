let amigo = 
{
    nome: "José", 
    sexo:"M", 
    peso: 85.4,
    engordar(p)
    {
        if(p > 0)
        {
            console.log(`Engordou ${p}Kg`)
            this.peso += p
        }

        if(p == 0)
        {
            console.log(`${amigo.nome} manteve o peso!`)
        }

        if(p < 0)
        {
            console.log(`Emagreceu ${p}Kg`)
            this.peso += p
        }
    }
}

amigo.engordar(-4)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg agora.`)