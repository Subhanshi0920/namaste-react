{
  /* <div>
  <div>
    <h1>I am an h1 tag</h1>
    <h2>I am an h2 tag</h2>
  </div>
</div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "sibling1" }, "I am an h1 tag"),
    React.createElement("h2", { id: "sibling2" }, "I am an h2 tag"),
  ])
);

const heading = React.createElement("h1", {}, "Hello world from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([parent, heading]);
