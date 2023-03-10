import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();

    const Auth = async(e) =>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', {
                email: email,
                password: password,
            });
            history.push("/dashboard");
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    }

  return (
    <section className="hero hash-background-grey-light is-fullheight is-fullwidrh">
      <div className="hero-body">
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-for-4-dekstop">
                    <form onSubmit={ Auth } className='box'>
                        <p className='has-text-centered'>{msg}</p>
                        <div className="field">
                            <label className="label mt-5">Email or Username</label>
                            <div className="control">
                                <input type="text" className="input" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label mt-5">Password</label>
                            <div className="control">
                                <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <button className="button is-success is-fullwidth">Login</button>
                        </div>
                    </form>
                    <div className='text'>
                           <a href="/register">Tidak mempunyai akun?</a> 
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Login
