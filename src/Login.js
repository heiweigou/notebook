/**
 * Created by jiaow on 10/03/2018.
 */
import React from 'react'
class Login extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <div className="form-group">
                        <label>user name</label>
                        <input type="text" className="form-control" placeholder="enter your user name"/>
                    </div>

                    <div className="form-group">
                        <label>password</label>
                        <input type="password" className="form-control" placeholder="enter your password"/>
                    </div>
                    <div className="form-group">
                        <p className="d-inline position-relative">Forget your password?</p>
                        <input type="submit" className="btn btn-primary float-right" value='login'/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login