export const limitVideos = (videosList, index, limit = 3) => {
    let least = index - Math.floor(limit / 2);
    
    let len = videosList.length
    if(least + limit > len)
        least = len - limit

    least = (least < 0) ? 0 : least;
    
    return videosList.slice(least, least + limit);
};
