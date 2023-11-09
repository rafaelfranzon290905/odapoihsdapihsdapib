import { useNavigate } from "react-router-dom"
import Card from "../../componentes/card/Card"
import { useEffect } from "react"

function Home(props) {

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(!token){
            navigate('/')
        }
    }, [navigate])

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        navigate('/')
    }

    return(
        <>
        <button onclick={handleLogout}>Logout</button>
        Home

        <Card news={props.news} setNews={props.setNews}/>
        </>
    )
}

export default Home