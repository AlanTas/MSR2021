    let user_posts = []
    const array = query.data().anunturi_postate
    for (ref of array) {
        let post = await ref.get()
        let post_data = await post.data() 
        console.log(post_data) // data looks ok
        user_posts.push(post_data)
    })

    console.log("user_posts:", user_posts)
