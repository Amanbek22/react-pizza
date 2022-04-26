import { useState } from "react";
import Api from "../../api/Api.js";
import css from "./Admin.module.css";
import { useDispatch } from 'react-redux';
import { setAuthAC } from './../../redux/actionCreators';

export default function Admin() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState(false);

  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    // TODO: add login logic
    Api.auth({
      login: login,
      password: password
    })
      .then((res) => {
        console.log(res.data);
        if(res.data?.token) {
          dispatch( setAuthAC(res.data) )
        }
      })
  }

  const handleChange = (e) => {
    setLogin(e.target.value);
  }

  return (
    <div className="container mt-5">
      <form onSubmit={submit} className={css.formWrapper}>
        <input 
          required
          type="text" 
          placeholder="Login"
          value={login}
          onChange={handleChange}
        />
        <input 
          required 
          type={passwordType ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div onClick={() => setPasswordType(!passwordType)}>Show</div>
        <button>Enter</button>
      </form>
    </div>
  )
}
