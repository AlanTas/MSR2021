function queryRAWGDatabase(title) {
    return new Promise((resolve, reject) => {
        title = title.split(' ').join('-');
        var req = unirest("GET", "https://rawg-video-games-database.p.rapidapi.com/games/" + title);

        req.headers({
            "x-rapidapi-key": process.env.RAWG_GAME_DATABASE_KEY,
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "useQueryString": true
        });
        req.end(function (result) {
            if (result.error) {
                reject('Error: ' + result.error);
                return;
            };
            resolve(result.body);
        });
    })
}
