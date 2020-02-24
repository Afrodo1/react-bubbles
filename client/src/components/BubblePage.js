import React, { Component } from "react";
import axios from "axios";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import {port} from '../App';
import {axiosWithAuth} from '../Utilities/Utilities';
export default class BubblePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorList: []
    };
  }

  componentDidMount() {
    axiosWithAuth()
      .get(`http://localhost:${port}/api/colors`)
      .then(res => this.setState({ colorList: res.data }))
      .catch(err => console.log(err.response));
  }

  render() {
    return (
      <>
      <ColorList colors={this.state.colorList} updateColors={this.setState.colorList} />
      <Bubbles colors={this.state.colorList} />
    </>
    );
  }
}





















