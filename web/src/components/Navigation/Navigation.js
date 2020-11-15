import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import LogoutButton from 'src/components/LogoutButton/LogoutButton'

const Navigation = () => {
  const { isAuthenticated } = useAuth()
  return (
    <nav>
      {isAuthenticated ? (
        <LogoutButton />
      ) : (
        <>
          <Link to={routes.signup()}>Sign up</Link>
          <Link to={routes.login()}>Log in</Link>
        </>
      )}
    </nav>
  )
}

export default Navigation
