import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // The constructor function can help you crate state like so:
  // constructor(props) {
  //     super(props);

  //     this.state = { lat: null, errorMessage: '' }
  // }

  state = { lat: null, errorMessage: "" };

  //lifecycle methods
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    );
  }

  componentDidUpdate() {
    console.log("component did rerender!");
  }
  //----

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return (
      <Spinner message="Please turn on your location" />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
