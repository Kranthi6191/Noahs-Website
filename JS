document.getElementById('jokeButton').addEventListener('click', function() {
    const jokes = [
        "Why don't programmers like nature? It has too many bugs.",
        "Why do Java developers wear glasses? Because they don't see sharp.",
        "How many programmers does it take to change a light bulb? None. It's a hardware problem.",
        "Why do websites like to party? Because they know how to 'script' the fun!"
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    document.querySelector('.joke p').innerText = randomJoke;
});
