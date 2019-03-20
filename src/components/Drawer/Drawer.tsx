import * as React from "react";
import { Component } from "react";

interface Props {
  slideIn?: boolean;
  slideOut?: boolean;
  onShouldSlideOut?(): void;
  children?: React.ReactNode;
}

export default class Drawer extends Component<Props, any> {
  render() {
    let { DrawerMenu, DrawerTapoutArea, props } = this;

    if (props.slideIn || props.slideOut)
      return (
        <div className={props.slideOut ? "drawer no-pointer-events" : "drawer"}>
          <DrawerMenu {...props}>{this.props.children}</DrawerMenu>
          <DrawerTapoutArea {...props} />
        </div>
      );
    else return null;
  }

  DrawerMenu = (props: {
    slideIn?: boolean;
    slideOut?: boolean;
    children: React.ReactNode;
  }) => {
    if (props.slideIn) {
      return (
        <div className="drawer-menu animated slideInLeft">{props.children}</div>
      );
    } else if (props.slideOut)
      return (
        <div className="drawer-menu animated slideOutLeft">
          {props.children}
        </div>
      );
    else return null;
  };

  DrawerTapoutArea = (props: {
    slideIn?: boolean;
    onShouldSlideOut?(): void;
  }) => {
    if (props.slideIn)
      return (
        <div className="drawer-tapout-area" onClick={props.onShouldSlideOut} />
      );
    else return null;
  };
}
