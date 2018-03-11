/**
 * Created by jiaow on 10/03/2018.
 */
import React from 'react';
import passwordValidator from 'password-validator';
let isFirstPressed = true;
class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            error: [],

        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)

    }

    passwordErrorClass = () => {
        let classname = null;

        if (isFirstPressed) {

            classname = 'form-control';
            isFirstPressed = !isFirstPressed;
        }
        else {

            if (this.state.error.length === 0)
                classname = 'form-control is-valid';
            else
                classname = 'form-control is-invalid';
        }
        return classname
    }




    handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        if (name === 'userPassword') {
            this.validate(value);
            console.log(value)
            if (this.state.error.length === 0) {

                this.setState({
                    data: {
                        [name]: value
                    }
                })
            }
            else
                return
        }
        else {
            this.setState({
                ...this.state,
                data: {
                    ...this.state.data, [name]: value
                }
            })

        }

    }
    validate = (input) => {
        const schema = new passwordValidator();
        schema
            .is().min(8)
            .is().max(12)
            .has().uppercase()
            .has().lowercase()
            .has().digits()
            .has().not().spaces();
        this.setState({
            error: schema.validate(input, {list: true})
        })
    }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label>user name</label>
                        <input className="form-control" type="text" name="userName" onChange={this.handleInput}/>
                    </div>

                    <div className="form-group">
                        <label>user password</label>
                        <input className={this.passwordErrorClass()} type="password" name="userPassword"
                               onChange={this.handleInput}/>
                        { this.state.error.map(item=>{
                            return <p className="text-danger">{item}</p>
                        })}
                    </div>

                    <div className="form-group">
                        <label>date of birth</label>
                        <input className="form-control" type="date" name="dob" onChange={this.handleInput}/>
                    </div>
                    <div className="form-group">
                        <label>address</label>
                        <input className="form-control" type="text" name="address" onChange={this.handleInput}/>
                    </div>
                    <div className="form-group">

                        <div className="form-check row">
                            <label className="form-check-label col-md-11 text-right">I agree with terms</label>
                            <input className="form-check-input col-md-1" type="checkbox" name="isAgree"
                                   onChange={this.handleInput}/>
                        </div>
                    </div>
                    <button className="btn btn-primary float-right" onClick={this.onSubmit}>register</button>
                </form>
            </div>
        )
    }
}

export default SignUp;