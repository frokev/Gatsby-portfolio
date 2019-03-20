import * as React from "react";
import { Component } from "react";

interface Props {
  className?: string;
  repeat: boolean;
  pauseBeforeEraseMs: number;
  pauseBeforeTypingMs: number;
}

/**
 * Takes children of type TypeWriter from npm's 'react-typewriter'.
 * Does the typewriter animation iteratively on each child.
 */
export default class TypeWriterSequencer extends Component<Props, any> {
  state = {
    index: 0,
    typingProp: 1
  };

  render() {
    // Setting props on child before returning
    let children: any = this.props.children;
    let { index, typingProp } = this.state;
    if (!React.isValidElement(children[index]))
      throw "Child is not a valid ReactElement";
    let childWProps = React.cloneElement(children[index], {
      typing: typingProp,
      onTypingEnd: this.handleTypingEnd
    });

    return <div className={this.props.className}>{childWProps}</div>;
  }

  handleTypingEnd = () => {
    let { typingProp, index } = this.state;
    let { pauseBeforeEraseMs, pauseBeforeTypingMs } = this.props;
    let lengthOfChildren = React.Children.count(this.props.children);
    // On last child, if repeat prop true then start over, else return
    if (index == lengthOfChildren - 1 && typingProp == -1) {
      if (this.props.repeat) {
        setTimeout(() => {
          this.setState({
            index: 0,
            typingProp: 1
          });
        }, pauseBeforeTypingMs);
        return;
      }
      return;
    }
    // if done typing, wait, then erase.
    if (typingProp == 1) {
      setTimeout(() => {
        this.setState({
          typingProp: -1
        });
      }, pauseBeforeEraseMs);
      return;
    }
    // if done erasing, wait, then type new child
    if (typingProp == -1) {
      setTimeout(() => {
        this.setState({
          index: index + 1,
          typingProp: 1
        });
      }, pauseBeforeTypingMs);
      return;
    }
  };
}
