import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

const LogoutButton = () => {
  const { logOut } = useAuth()

  const onClick = () => {
    logOut().then(() => navigate(routes.home()))
  }
  return <button onClick={() => onClick()}>Log out</button>
}

export default LogoutButton
