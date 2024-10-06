let num = [5,8,2,9,3]

num.push(1) // adiciona um elemento no final da array
num.sort() // organiza a array em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

// Buscar um valor em um array
let pos = num.indexOf(8)
if (pos == -1)
{
    console.log(`O valor não foi encontrado!!`)
}
else
{
    console.log(`O valor 8 está na posição ${pos}`)
}

// let pos = num.indexOf(8)
// console.log(`O valor 8 está na posição ${pos}`)

// let num = [5,8,2,9,3]

// console.log(`Nosso vetor é o ${num}`)