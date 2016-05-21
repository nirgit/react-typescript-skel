import * as React from "react";
import * as ReactDOM from "react-dom";

// import SCSS!
import "./main.scss";

import { Hello } from "./components/Hello";

const mainEl = document.getElementById("main");
ReactDOM.render(<Hello compiler="TypeScript" framework="React" />, mainEl);
