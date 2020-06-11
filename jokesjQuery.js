$(function() {
    const jokeButton = document.querySelector('.getJoke');
    const jokeHolder = document.querySelector('.acudit p');
    
    const endpoint = 'http://api.icndb.com/jokes/random';
    const jokePromise = fetch(endpoint);
    
    
    function getJoke() {
        $.ajax({
            url: 'http://api.icndb.com/jokes/random',
            type: 'get',
            dataType: 'json',
            success: function(data) {
                jokeHolder.textContent = data.value.joke;
            },
            error: function(xhr, status, error) {
                console.log(xhr);
                console.log(status);
                console.log(error);
            }
        })
    }
    
    jokeButton.addEventListener('click', getJoke);
    
    
    
    const buttonText = [
        'lol',
        'Ugh',
        'omg',
        'please stop',
        'that was the worst one',
    ];
});
