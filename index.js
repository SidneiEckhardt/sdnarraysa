// const nome= prompt("nome?:")
// console.log(`o"${nome}" é turista`) 
// para usar o interogação utilizar Alt Gr w template string

// const nome= prompt ("insira seu nome?:")
// console.log(`A cor favorita de"${nome}" é COR`)

// const nome= prompt("Insira seu nome?:")
// const cor= prompt("sua cor favorita?:")
// console.log(`A cor favorita de ${nome} é ${cor}`)
// const nome= prompt("Digite seu nome")
// nome.length === 0 ?
// console.log("voce precisa digitar algo"):
// console.log("O nome é",nome)

// Letras maiusculas e minusculas
// const sobrenome="ZUKemberg"
// console.log(sobrenome.toLowerCase())
// console.log(sobrenome.toUpperCase())

// serve para retirar os espaços no inicio da string
// const nome= "   maria antonieta"
// console.log(nome.trim())

// serve para validar true ou falso
// const receita="bolo de cenoura"
// console.log(receita.includes("abacaxi"))

// const receita="  bolo de abacaxi"
// const novaReceita= receita.replace("abacaxi","cenoura")
// console.log(novaReceita);
// console.log(receita.trim().toLowerCase().includes("cenoura"))

// console.log(Math.random())
// exercício 2
// const escreva= prompt("escreva o que deseja")
// const novaEscrita= escreva.replaceAll("o","i")
// console.log(novaEscrita.toUpperCase())
// console.log(novaEscrita.length)

// arrays :podemos colocar elementos de qualquer tipo;"strings","numeros""boleanos"
// numeros[1,2,3,4] 
// nomes["felip","claudia","pedro"]
// const numeros= [1,2,3,4,5]
// console.log (numeros)
// const numeros= [14,245,345,456]
// console.log (numeros[2])

// const cachorros= ["vira-lata","buldog","caramelo","shitzu","puldo"]
// // cachorros.pop()
// cachorros.splice(3,1)
// console.log(cachorros.includes("caramelo"))
// console.log(cachorros.length)
// // const insiraUmaRaça=  prompt("insira um cachorro")
// // cachorros.push(insiraUmaRaça)
// // cachorros.push("outro cachoro qualquer")
// console.log (cachorros)
// const numeros= Number (prompt("insira um número entre 0 e 4"))
// // para não retornar undfined quando é digitado um número maior que quatro.
// cachorros[numeros] === undefined ?
// console.log ("você deve informar numeros entre 0 e 4"):

// console.log(cachorros[numeros])
// "push" serve para iserir um elemento no array"pop" remove o ultimo elemento
// "splice(i,n)" remove n elementos

const numeros=[1,2,3,4,5,6]
console.log (numeros.length)
numeros.push(7)
console.log(numeros)
numeros.splice(3,2)
console.log(numeros)
console.log(numeros.length)