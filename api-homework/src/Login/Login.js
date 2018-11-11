import React, {Component} from 'react';


class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }
    }


    handleInput = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleLogin(this.state.username, true)
    }

    


    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleInput} placeholder="username" />
                    <input type="password" name="password" value={this.state.password} onChange={this.handleInput} placeholder="password" />
                    <button type="submit">Submit</button>

                </form>
            </div>
        )
    }
}


export default Login;