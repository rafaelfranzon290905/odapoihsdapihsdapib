import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 
    const navigate = useNavigate()

    const saveuserinfoLocalStorage = (token) => {
        localStorage.setItem('token', token)
        localStorage.setItem('email', email)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const credentials = {email, password}

        axios.post('http://localhost:8000/login', credentials, {
            headers:{
                'Content-Type': 'application/json',
            },
        }).then(response => {
            alert(response.data.message)
            saveuserinfoLocalStorage(response.data.token)
            navigate('home')
        }).catch(error => console.log(error))
    }

    return (
      <>
      <form onSubmit={handleSubmit}>
        <label>E-mail</label>
        <input type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}>
        </input>

        <label>Senha</label>
        <input type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}>
        </input>

        <button type="submit">Entrar</button>
      </form>
      </>
    );
  }
  
  export default Login;
  