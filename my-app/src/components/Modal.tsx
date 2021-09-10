import React, { Component } from 'react'
import ReactDom from 'react-dom'

interface Props {

}
export default class Modal extends Component<Props> {


    element: HTMLDivElement

    constructor(props: Props) {
        super(props)
        this.element = document.createElement("div")
        this.element.id = "modal-root"
    }

    componentDidMount() {
        document.body.appendChild(this.element)
    }

    componentWillUnmount() {
        document.body.removeChild(this.element)
    }

    render() {
        return (
            ReactDom.createPortal(
                <div className="centeredContent , fullscreen">
                    {this.props.children}
                </div>,
                this.element
            )
        )
    }

}
