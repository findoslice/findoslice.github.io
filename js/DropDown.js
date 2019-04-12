
import React, { Component } from 'react';

export default class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      links: ['ABOUT', 'BLOG', 'CV', 'LINKS']
    }
    this.onClick = this.onClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  onClick() {
      this.setState({showMenu:!this.state.showMenu})
  }

  handleClickOutside() {
    console.log("deactivate")
    this.setState({showMenu:false})
  }

  render() {
    console.log(this.state.showMenu)
    return (
      <div>
        <div className="fas fa-bars" onClick = {this.onClick} id="droptoggle">
        </div>
        {
          this.state.showMenu
            ? (
              <div id="dropmenu">
                {this.state.links.map((el, index) => {
                return (
                    <a href = {"/" + el.toLowerCase()} key={index}>
                        <div className = "dropdownbutton">
                          {el}
                        </div>
                    </a>)
                })
                }
                <div className = "dropdownbutton" onClick={this.props.darkMode}>
                    {this.props.dark?"Light":"Dark"}
                </div>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}