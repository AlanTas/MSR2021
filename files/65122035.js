const getAverage = (reviews) => {
    let TotalStars = reviews.reduce((prev, curr) => (curr.stars + prev), 0)
    // TotalStars is 3.6666 
    // below use any one of them averageStars
    // let averageStars = Math.round(TotalStars/reviews.length);  // output 4
    // let averageStars = Math.floor(TotalStars/reviews.length);  // output 3
    let averageStars = Math.floor((TotalStars/reviews.length)*10)/10;// output 3.6
    return averageStars;
};

<div>
    <p className="totalReviewsTally">Average: {getAverage(reviews)} {reviews.length}</p>
</div>
