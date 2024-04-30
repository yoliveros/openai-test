import OpenAI from 'openai';

export async function getRecommendations() {

    const movies = [];
    for (let i = 1; i <= 5; i++) {
        const movie = document.getElementById(`movie${i}`).value.trim();
        if (movie !== '') {
            movies.push(movie);
        }
    }

    if (movies.length < 5) {
        alert('Ingrese al menos cinco películas.');
        return;
    }

    try {
        const response = await openai.chat.completions.create({
            model: 'davinci-002',
            messages: [
                {
                    role: 'user',
                    content: `Basado en las películas ${movies.join(', ')}, recomiendame algunas películas similares.`,
                }
            ]
        })


        const recommendations = response.data.choices[0].text.trim().split('\n');
        displayRecommendations(recommendations);
    } catch (error) {
        console.error('Error al obtener recomendaciones:', error);
        alert('Hubo un error al obtener las recomendaciones. Por favor, inténtalo de nuevo más tarde.');
    }
}

function displayRecommendations(recommendations) {
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = '<h2>Recomendaciones:</h2>';
    const ul = document.createElement('ul');
    recommendations.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = movie;
        ul.appendChild(li);
    });
    recommendationsDiv.appendChild(ul);
}
