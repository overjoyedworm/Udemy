var movies = [
        {
            name: "In Bruges",
            rating: "5",
            seen: true
        },
        {
            name: "Frozen",
            rating: "4.5",
            seen: false
        },
        {
            name: "Mad Max Fury Road",
            rating: "5",
            seen: true
        },
        {
            name: "Les Miserables",
            rating: "3.5",
            seen: false
        }
    ];

function watched(){
    movies.forEach(function(movie){
    var result = "You have ";
    if(movie.seen){
        result += "watched ";
    }else{
        result += "not seen ";
    }
        result += movie.name + " - " + movie.rating + " star    ";
        console.log(result);
    })
}
