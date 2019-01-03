'use strict';

const NavButton = (props) => {
  return (
    <a href = {"/" + props.name.toLowerCase() + ".html"}>
      <div className = "navbutton">
        {props.name}
      </div>
    </a>
  );
}


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                    paths: ['ABOUT', 'BLOG', 'CV', 'LINKS']
                 }
  }

  render() {
    return (
      <span>
        <a href = "/">
          <img src = "../static/profile-img.jpg" id = "profile"></img>
          <h1>
            Findlay<br></br>Smith
          </h1>
        </a>
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