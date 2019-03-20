import * as React from "react";
import { Component } from "react";
import styled from "styled-components";

export default class WarningMessage extends Component {
  render() {
    return (
      <Message>
        <span>{this.props.children}</span>
      </Message>
    );
  }
}

const Message = styled.div`
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 500px;
  height: 100px;
  padding-left: 15px;
  padding-right: 15px;
  border: 10px solid black;
  background-color: papayawhip;
  z-index: 1000;

  span {
    position: absolute;
    top: 50%;
    transform: perspective(1px) translateY(-50%);
    vertical-align: middle;
  }

  @media only screen and (max-width: 500px) {
    width: 325px;
  }

  @supports (display: grid) {
    display: none;
  }
`;
