
let login = {
    email: "",
    password: "",
    fullname: ""
};
// const handleInputEmail = (e) => {
//     login.email = e.target.value;
// }
// const handleInputPw = (e) => {
//     login.password = e.target.value;
// }

const handleInput = (e) => {
    console.log(e.target.name, e.target.value);
    login = {
        ...login,
        [e.target.name] : e.target.value
    }
}
const handleLogin = () => {
    // call api
    alert(JSON.stringify(login))
}
const container = (
    <form className="w-25">
        <div className="form-group">
            <label htmlFor="email" className='form-label'>Email</label>
            <input id='email' type="email" name="email" className='form-control' onInput={handleInput} />
        </div>
        <div className='form-group'>
            <label htmlFor="password" className='form-label'>Password</label>
            <input id='password' type="password" name="password" className='form-control' onInput={handleInput}/>
        </div>
        <div className='form-group'>
            <label htmlFor="fullname" className='form-label'>FullName</label>
            <input id='fullname' type="text" name="fullname" className='form-control' onInput={handleInput}/>
        </div>
        <div className="form-group">
            <button type="button" className='btn btn-warning'
                onClick={handleLogin}
            >Login</button>
        </div>
    </form>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container)