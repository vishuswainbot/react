// const heading = React.createElement("h1", {id: "heading"}, "Hello World From React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I'm a h1 tag"),
        React.createElement("h1", {}, "I'm a h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "I'm a h1 tag"),
        React.createElement("h1", {}, "I'm a h2 tag"),
        React.createElement("h1", {}, "I am a h1 again"),
        React.createElement("h1", {}, "I am a h11 again"),
        React.createElement("h1", {}, "I am a h11 again")
    ])
]);
const children = React.createElement("div", {
    id: "children"
}, React.createElement("h6", {}, "I am a h6 tag in grand parent"));
console.log(parent); // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([
    children,
    parent
]);

//# sourceMappingURL=namaste_react.6bd02f5a.js.map
