import React, { Component } from "react";
import Heading from "./components/Header";
import Button from "./components/Button";
import Quote from "./components/Quote";
import quotes from "./components/data/quotes";
import "./components/css/app.css";
class App extends Component {
  state = {
    selectedQuote: Math.floor(Math.random() * quotes.length),
    interval: null
  };
  render() {
    const quote = quotes[this.state.selectedQuote];
    return (
      <main>
        <Heading />
        <Quote quote={quote} />
        {/* {!this.state.interval && (
          <Button
            onClick={this.toggleQuotes}
            text="The Power of a real wizard"
          />
        )} */}
        <div className="center">
          <Button onClick={this.updateQuote} text="Wizard Button" />
        </div>
      </main>
    );
  }

  toggleQuotes = () => {
    const interval = setInterval(this.updateQuote, 3000);
    this.setState({
      interval
    });
  };
  updateQuote = () => {
    this.setState({
      selectedQuote: Math.floor(Math.random() * quotes.length)
    });
  };
}

export default App;
