import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/myjob'}>MyJob</Link>
                <Link to={'/profile'}>Profile</Link>
            </nav>
        </>
    )
}

export default Nav