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
      <div id = "navbuttons">
        {this.state.paths.map((name, i) => {
          return(<NavButton name = {name} key = {i}></NavButton>)
        })}
      </div>
    );
  }
}

const domContainer = document.querySelector('#navbar');
ReactDOM.render(<NavBar />, domContainer);