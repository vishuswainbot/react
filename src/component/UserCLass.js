import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    const { name, location, phoneNo } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user">
        <h1>Count={count}</h1>
        <button
          className="count"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count
        </button>

        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h3>Phone no:{phoneNo}</h3>
      </div>
    );
  }
}

export default User;

