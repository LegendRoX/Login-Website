import React, {Component} from 'react';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName : ' ',
            passWord : ' ',
            email : ' ',
            name : ' ',

            redirectToReferrer : false,
        };

        this.Signup = this.signup.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    signup() {
        if (this.state.userName && this.state.passWord && this.state.email && this.state.name) {
            PostData('signup', this.state).then((result) => {
                let responseJSON = result;
                if (responseJSON.userData){
                    sessionStorage.setItem('userData', JSON.stringify(responseJSON));
                    this.setState({redirectToReferrer: true});
                }
                else 
                    alert(result.error);
            });
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    render(){
        if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {
            return (<Redirect to={'/home'}/>)
        }

        return(
            <div className='row' id='sBody'>
                <div className='medium-12-columns'>
                    <h4>Sign Up</h4>
                    <input type="text" name='email' placeholder='Email Address' onChange={this.onChange} />
                    <input type="text" name='name' placeholder='Name' onChange={this.onChange} />
                    <input type="text" name='username' placeholder='Username' onChange={this.onChange} />
                    <input type="password" name='password' placeholder='Password' onChange={this.onChange} />
                    <a href='/login'>Login</a>
                </div>
            </div>
        );
    }
}

export default Signup;