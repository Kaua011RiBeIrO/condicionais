 let pessoa = {
     PrimeiroNome: 'Irmão do',
     SegundoNome: 'Jorel',
     Idade: 10,
     corDosOlhos: 'preto',
     hobbies: ['música', 'filmes', 'esportes'],
     endereço: {
         rua: 'Rua do bobos',
         número: 0,
         cidade: 'São Paulo',
         estado: 'SP',
     },
 }

 console.log(pessoa)
 console.log(pessoa.PrimeiroNome)
 console.log(pessoa.SegundoNome, pessoa.Idade)
 console.log(pessoa.hobbies [1])
 console.log(pessoa.endereço.cidade)

 //atribuição via desestruturação

 let {
     PrimeiroNome,
     SegundoNome,
     endereço:{cidade}
 } = pessoa;
 console.log(`O nome do meu cliente é ${PrimeiroNome} ${SegundoNome} e ele é da cidade de ${cidade}`)

  //atribuição via desestruturação com arrays

  const array = [1,2,3,4,5];
  let [valor01,valor02,valor03,valor04,valor05,resto] = array
  console.log(valor01)
  console.log(valor02)
  console.log(valor03)
  console.log(resto)
