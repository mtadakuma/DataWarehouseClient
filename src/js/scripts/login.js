document.querySelector('#login-form').addEventListener('submit', async (ev)=>{
    ev.preventDefault();

    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    const headers = new Headers();
    headers.append('Accept','application/json');
    headers.append('Content-Type', "application/json");
    headers.append('Access-Control-Allow-Origin', '*');

    try{
        const responseLogin = await fetch('https://proyecto-data-warehouse.herokuapp.com/login', {
            method: 'POST',
            body: JSON.stringify({user, password}),
            headers
        });

        const responseObject = await responseLogin.json();

        if(responseLogin.status != 200){
            alert(responseObject.error);
        } else {

            localStorage.setItem('token', responseObject.token);
            localStorage.setItem('isAdmin', responseObject.isAdmin);
            location.href = 'contacts.html';  
        }
    } catch (error){
        alert("algo salio mal intente mas tarde");
        console.error(error);
    }
})