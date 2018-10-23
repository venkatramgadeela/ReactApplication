import React from "react";

export class View extends React.Component {
  constructor() {
    super();
    alert(this.props);
  }
  componentWillReceiveProps(newProps) {
    alert(newProps);
  }

  render() {
    return <div>view {this.props.usere}</div>;
  }
}
