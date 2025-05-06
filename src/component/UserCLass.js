import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https:/api.github.com/users/vishuswainbot");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    const { count, count2 } = this.state;
    return (
      <div className="user">
        <img src={avatar_url}></img>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
      </div>
    );
  }
}

export default User;
