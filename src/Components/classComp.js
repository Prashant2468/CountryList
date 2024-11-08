import React from "react";
import "../index.css";
export class BookClass extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    alert(this.props.price);
  }
  render() {
    return (
      <>
        <div>
          <h3> {this.props.title}</h3>
          <h3>by {this.props.author}</h3>
          <h3>Rs {this.props.price}/- Only</h3>
          <button onClick={this.handleClick}>Buy</button>
        </div>
      </>
    );
  }
}
