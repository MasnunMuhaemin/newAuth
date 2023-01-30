import React,{ useState } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();

    const Register = async(e) =>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            });
            history.push("/");
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    }

    // const Register = (e) => {
    //     e.preventDefault();
    //     axios.post('http://localhost:5000/users', {
    //         name: name,
    //         email: email,
    //         password: password,
    //         confPassword: confPassword
    //     }).then(res => console.log(history.push("/"), res)).catch(err => setMsg(err.response.data.msg));
    // }
 
  return (
    <section className="hero hash-background-grey-light is-fullheight is-fullwidrh">
      <div className="hero-body">
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-for-4-dekstop">
                    <form onSubmit={ Register } className='box'>
                        <p className='has-text-centered'>{ msg }</p>
                        <div className="field">
                            <label className="label mt-5">Name</label>
                            <div className="control">
                                <input type="text" className="input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label mt-5">Email</label>
                            <div className="control">
                                <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label mt-5">Password</label>
                            <div className="control">
                                <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label mt-5">Confirm Password</label>
                            <div className="control">
                                <input type="password" className="input" placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <button className="button is-success is-fullwidth">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Register
