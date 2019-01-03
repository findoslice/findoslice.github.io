'use strict';

const NavButton = (props) => {
  return (
    <a href = {"/"+props.name}>
      <div class = "navbutton">
        {props.name}
      </div>
    </a>
  );
}


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                    paths: ['about', 'blog', 'CV', 'contact']
                 }
  }

  render() {
    return (
      <span>
        <img src = "../static/profile-img.jpg" id = "profile"></img>
        <h1>
          Findlay<br></br>Smith
        </h1>
        <p>
          Physicist|Hacker|Pizza Enthusiast
        </p>
        <div id = "navbuttons">
          {this.state.paths.map((name, i) => {
            return(<NavButton name = {name} key = {i}></NavButton>)
          })}
        </div>
      </span>
    );
  }
}

const domContainer = document.querySelector('#navbar');
ReactDOM.render(<NavBar />, domContainer);