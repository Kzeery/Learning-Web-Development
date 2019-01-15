var movies = [
    {
        title: "In Bruges",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Frozen",
        rating: 4.5,
        hasWatched: false
    },
    {
        title: "Mad Max Fury Road",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Les Miserables",
        rating: 3.5,
        hasWatched: false
    }
]
function createSentence(movie) {
    var result = "You have ";
    if(!movie.hasWatched) {
        result += "not ";
    }
    result += "watched \"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    console.log(result);
}
movies.forEach(createSentence);