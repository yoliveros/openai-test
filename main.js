import './style.css'
import { getRecommendations } from './recomendado.js'

document.querySelector('#app').innerHTML = `
     <div class="container">
        <h1>Recomendación de Películas</h1>
        <p>Ingrese al menos cinco de sus películas favoritas:</p>
        <form id="moviesForm">
            <input type="text" id="movie1" placeholder="Película 1">
            <input type="text" id="movie2" placeholder="Película 2">
            <input type="text" id="movie3" placeholder="Película 3">
            <input type="text" id="movie4" placeholder="Película 4">
            <input type="text" id="movie5" placeholder="Película 5">
            <button type="button">Obtener Recomendaciones</button>
        </form>
        <div id="recommendations"></div>
    </div>
`

document.querySelector('button').addEventListener('click', getRecommendations)
