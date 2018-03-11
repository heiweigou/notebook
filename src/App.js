/**
 * Created by jiaow on 10/03/2018.
 */
import React from 'react';
import Login from './Login'
import SignUp from './SignUp'

class App extends React.Component{
    render(){
        return(
            <div className='container'>
                <Login/>
                <SignUp/>
            </div>
        )
    }
}

export default App;