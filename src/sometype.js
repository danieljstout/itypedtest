import React, { Component } from "react";
import { init } from "ityped";

export default class SomeType extends Component {
  componentDidMount() {
    const myElement = document.querySelector("#myElement");
    init(myElement, {
      showCursor: false,
      strings: [
        "   ",
        "   ",
        "   ",
        "Help me!",
        "Ashley! PLEASE",
        "HELP!!!",
        "I'm stuck inside a computer...",
      ],
      loop: false,
      cursorChar: "|",
      onFinished: function () {
        myElement.classList.add("fader");
      },
    });
  }
  render() {
    return <div id="myElement"></div>;
  }
}
