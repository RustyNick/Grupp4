import React, {Component, CSSProperties} from 'react';
import { centeredContent } from '../css'


interface Props {}
interface State {
    hasErro: boolean
}




export default class ErrorBoundary extends Component<Props, State> {
    
    constructor(props: Props) {
    super(props)

    this.state = { hasError: false }
    }

componentDidCatch() {
    this.setState({hasError: true })
}

    render () {
        if(this.state.hasError) {
            return (
                <div style={{ ...centeredContent, ...apperance }}>
            <h2>iCould not load component!</h2>
            <b><a href="" onClick={this.reloadPage}>Reload</a></b>
            </div>
            ) 
        }
    }
}

export function testErrorBoundary() {
    const nullVariable: any = null;
    console.log(nullVariable.somethingThatDoesNotExist);
}

Const appearance: CSSProperties = {
    background: 'white',
    color: '#1E1E1E',
    height: '100%'
};