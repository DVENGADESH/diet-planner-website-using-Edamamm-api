document.getElementById('dietForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const diet = document.getElementById('diet').value;
    const meals = document.getElementById('meals').value;

    // Edamam API details
    const appId = '498d60af';
    const appKey = '4827c3c584d9540949595ebc0e85ccc4';

    // Example API call (modify according to your needs)
    const url = `https://api.edamam.com/search?q=${diet}&app_id=${appId}&app_key=${appKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Process the data and display results
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '<h2>Results:</h2>';
            data.hits.forEach(hit => {
                const recipe = hit.recipe;
                resultsDiv.innerHTML += `
                    <div class="recipe">
                        <h3>${recipe.label}</h3>
                        <img src="${recipe.image}" alt="${recipe.label}">
                        <p>Calories: ${recipe.calories.toFixed(2)}</p>
                        <p>Diet Labels: ${recipe.dietLabels.join(', ')}</p>
                    </div>
                `;
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
