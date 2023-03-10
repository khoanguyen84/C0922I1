function showPassword(){
    if(document.getElementById('pw').type == 'password'){
        document.getElementById('pw').type = 'text';
        document.getElementById('btnShow').innerText = 'Hide'
    }
    else{
        document.getElementById('pw').type = 'password';
        document.getElementById('btnShow').innerText = 'Show'
    }
}