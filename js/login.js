const validate = () => {
    const username = document.formLogin.inputUser.value;
    const password = document.formLogin.inputPass.value;
    if(!username || !password) {
        swal('Ops', 'Digite o usuario e a senha.', 'warning');
        return false;
    } else {
        switch (true) {
            case username === 'your user' && password === 'your password':
                const user = { username, password };
                localStorage.setItem('user',JSON.stringify(user));
                return true;
            break;
                
            default:
                swal('Ops', 'Digite o usuario e a senha validos.', 'error');
                return false;
            break;
        }
    }
}