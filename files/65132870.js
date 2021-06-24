btn.addEventListener('click', () => {
    let result = randomFunc[Math.floor(Math.random() * randomFunc.length)]();
    document.querySelector('#user_input').addEventListener('input', evt => {
        if (result.toString() === evt.target.value) {
            /* correct! do something here */
        } else {
            /* not correct yet... */
        }
    });
})
