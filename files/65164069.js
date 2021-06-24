window.onload = async (e) => {
    e.preventDefault();
    setSpinner(false);
    console.log('hello');
    const authResult = await session.signIn(email, password);
    setSpinner(true);
    console.log(session);
    authResult ? setStatus(authResult) : history.push('/dashboard');

}
