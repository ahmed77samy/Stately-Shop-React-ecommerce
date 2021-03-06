import React from "react";
import user from "modules/users/users"
import Loading from "shared/components/layout/loading";

class Middleware extends React.Component {  
    /**
     * {@inheritdoc}
     * @param {*} props 
     */
    constructor(props) {
        super(props)
        this.Mounted = true
    }
    
    state = {loaded: true}
    
    /**
     * {@inheritdoc}
     */
    componentDidMount () {
        if(this.Mounted) {
            user.refresh()
            .then(() => {
                let {history, route} = this.props
                // check on middleware if return the value
                if(route.middleware) {
                    for (const middleware of route.middleware) {
                        let output = middleware(history, route);
                        if (output !== false) {
                            return output();
                        } else {
                            return this.setState({loaded: false})
                        }
                    }
                }
                return this.setState({loaded: false})
            })
        }
    }
    /**
     * {@inheritdoc}
     */
    componentWillUnmount() {
        return this.Mounted = false
    }
    /**
     * {@inheritdoc}
     */
    render() {
        let {history, route, props} = this.props
        // scroll to the top page when navigating to new page
        window.scrollTo(0, 0);
        return this.state.loaded ? <Loading /> : <route.component history={history} props={props} />;
    }
    
}

export default Middleware