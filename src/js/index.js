/**
 * quando clicar no pokemon da listagem temos que esconder o cartão
 * do pokemon aberto e mostrar o cartão correspondente ao que foi
 * selecionado na listagem 
 * 
 * para isso vamos precisar trabalhar com dois elementos
 * 1 - listagem
 * 2 - cartão pokemon
 * 
 * precisamos criar duas variaveis no JS para trabalhar com os 
 * elementos da tela
 * 
 * vamos precisar trabalhar com um evento de clique feito pelo
 * usuario na linguagem de pokemons
 * - remover a classe aberto so do cartão que esta aberto
 * - ao clicar em um pokemons da listagem pegamos o id desse pokemon
 * pra saber qual cartão mostrar
 * -remover a classe ativa que marca o pokemon selecionado
 * -adicionar a classe ativo no item da lista selecionado
 * */ 

//precisamos criar duas variaveis no JS para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})