import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>
          Hello from <span className='hello-ts'>{this.props.compiler}&nbsp;</span>
          and <span className='hello-react'>{this.props.framework}&nbsp;</span>
          and <span className='hello-sass'>Sass</span>!
        </h1>;
    }
}
