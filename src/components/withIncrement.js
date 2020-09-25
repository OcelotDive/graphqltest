import React, { Component } from 'react';


const withIncrement = (WrappedComponent) => {

    class WithIncrement extends Component {
        constructor(props) {
            super(props);

            this.state = {
                count: 0
            }
        }

        increment = () => {
            this.setState((ps) => {
                return {
                    count: ++ps.count
                }
            })
        }

        render() {
            return <WrappedComponent increment={this.increment} count={this.state.count} message={this.props.message}/>
        }
    }
    return WithIncrement;
}

export default withIncrement;