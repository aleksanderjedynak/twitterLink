import React from "react";
import ListWrapper from "./components/ListWrapper";
import "./index.css";
import Form from "./components/Form";

const initialStateItems = [
  {
    name: "Aleksander",
    description: "React Developer",
    twitterLink: "https://twitter.com"
  }
];

class App extends React.Component {
  state = {
    items: [...initialStateItems],
  };

  addItem = e => {
    e.preventDefault();

    const newItem = {
      name: e.target[0].value,
      twitterLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value
    };

    this.setState(prevState => ({
      items: [...prevState.items, newItem]
    }));

    e.target.reset();
  };

  render() {
    return (
      <div>
        <ListWrapper items={this.state.items} />
        <Form submitFn={this.addItem} />
      </div>
    );
  }
}

export default App;
