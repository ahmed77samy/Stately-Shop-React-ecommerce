import React from "react";

class Middleware extends React.Component {
        
    // state = {loading : true}
    
    componentDidMount() {
        let {history, route} = this.props

        // check on middleware if return th value
        if(route.middleware) {
            for (const middleware of route.middleware) {
                (async () => {
                    let output = await middleware(history, route);
                    if (output !== false) {
                        // this.setState({loading: false})
                        return output();
                    }else {
                        // this.setState({loading: false})
                    }
                })()
            }
        } else {
            // this.setState({loading: false})
        }
    }


    render() {
        let {history, route} = this.props
        // scroll to the top page when navigating to new page
        window.scrollTo(0, 0);
        return <route.component history={history} />
    }
    
}

export default Middleware