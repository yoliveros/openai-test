import OpenAI from 'openai';
const openai = new OpenAI({
  apiKey: "aqui-va-la-api-key",
  dangerouslyAllowBrowser: true,
});

export async function getRecommendations(e ) {
    e.preventDefault()
    
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
        console.log('enter in try')
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: `Basado en las películas ${movies.join(', ')}, recomiendame algunas películas similares.`,
                }
            ]
        })

        console.log(response)


        const recommendations = response.choices[0].message.content.trim().split('\n');
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
