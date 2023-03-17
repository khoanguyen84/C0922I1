// React.createElement(type, props, childrens)
// type: element
//      component
// props: là một đối tượng dùng để khai báo các thuộc tính (attributes)
// children(s)
//      - text
//      - element khác
// wrap

// const h1 = React.createElement("h1", {
//     className: "heading_1",
//     id: "h_1"
// }, "Learning React");

// const h2 = React.createElement("h2", null, "Heading 2");

// // const div = React.createElement("div", null, h1, h2)
// const container = React.createElement(React.Fragment, null, h1, h2)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(div);
// root.render(container);

const container = React.createElement(React.Fragment, null,
    React.createElement("h3", null, "Hướng dẫn"),
    React.createElement("ul", null,
        React.createElement('li', null, "Amet elit ad anim labore nulla ea voluptate consequat."),
        React.createElement('li', null, "Aute aliqua veniam amet exercitation in dolore cupidatat.")),
    React.createElement("button", {
        onDoubleClick: () => alert("Xin chào")
    }, "Detail"));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container)