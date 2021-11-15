
import React from "react";
import ReactDom from 'react-dom';
import Pet from "./components/Pet";
import SearchParams from "./components/SearchParams";




//the App is a function to return a created react element
//App should always be capitalized
// const App = () => {
// //React.createElement - This a motion of stamping something before it is rendered
// return React.createElement("div", {}, [
// React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
// //if you want to render h1 multiple times use the spread operator commented below
// // ...[1,2,3,4].map((i) => React.createElement("h1", {}, i)),
// React.createElement(Pet, {
// name: "Luna",
// animal: "Dog",
// breed: "havanese",
// }),
// React.createElement(Pet, {
// name: "Pepper",
// animal: "Bird",
// breed: "Cokatier",
// }),
// React.createElement(Pet, {
// name: "Sudo",
// animal: "Dog",
// breed: "Wheaten Terrier",
// }),
// ]);
// };
// //render the function using ReactDOM and put it in the div section with id root
// //React.createElement(App) - creates the instance of the component in this case app

const App = () => {
    return (
        <div>
            <h1>Adopt Me</h1>
            <Pet name="Luna" animal="Dog" breed="havanese" />
            <Pet name="Pepper" animal="Bird" breed="Cokatier" />
            <Pet name="Sudo" animal="Dog" breed="Wheaten Terrier" />
            <SearchParams />
        </div>
    );
};

ReactDom.render(<App />, document.getElementById("root"))
export default App