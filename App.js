import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
                "div", {id: "parent", key: "parent"},

               [
                 React.createElement("div", {id: "child", key: "child"}, 
                      [
                        React.createElement("h1", {key:"h1-1"}, "I'm a h1 tag"),
                       React.createElement("h1", {key: "h-2"}, "I'm a h2 tag")
                      ]),

                React.createElement("div", {id: "child2", key: "child2  "},
                      [React.createElement("h1", {key: "h1-3"}, "I'm a h1 tag"),
                       React.createElement("h1", {key: "h1-4"}, "I'm a h2 tag"), 
                       React.createElement("h1", {key: "h1-5"}, "I am a h1 again"),
                       React.createElement("h1", {key: "h1-6"}, "I am a h1 again"),
                       React.createElement("h1", {key: "h1-7"}, "I am a h1 again")
                    ])
               ]
               );

const children = React.createElement(
    "div", {id: "children", key: "children"}, 
    React.createElement(
        "h6", {key: "h6-1"}, "I am a h6 tag in grand parent"
    )
);

console.log(parent);  // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([children, parent]);