import React,{Component} from 'react'

class ErrorBoundry extends Component {
    constructor(porps) {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {

        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError){
            return <h1>Error: this element fale to render </h1>
        }

        return this.props.children
    }

}

export default ErrorBoundry;