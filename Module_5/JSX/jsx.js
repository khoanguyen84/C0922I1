const name = "Khoa Nguyễn";
const handleClick = () => alert('Hello anh em');
const handleInput = () => {
    console.log(document.getElementById('inp').value);
}
const handleShowName = (name) => {
    name = name.toUpperCase();
    name = `Mr.${name}`;
    alert(name)
}
const container = (
    <div>
        <h3>{name} Hướng dẫn</h3>
        <ul>
            <li>Occaecat non minim ullamco esse labore irure deserunt ea pariatur commodo dolore.</li>
            <li>Ipsum pariatur cillum commodo deserunt.</li>
        </ul>
        <input type="text" onInput={(e) => console.log(e.target.value)} />
        <button onClick={handleClick}>Hello</button>
        <br/>
        <button onClick={() => handleShowName("Khoa")}>Show Name</button>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container)