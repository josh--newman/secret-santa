import { useAuth } from '@redwoodjs/auth'
import GlobalLayout from 'src/layouts/GlobalLayout/GlobalLayout'

const HomePage = () => {
  const { currentUser } = useAuth()
  console.log(currentUser)
  return (
    <GlobalLayout>
      <h1>Home</h1>
      {currentUser && <p>Hi, {currentUser.name}</p>}
    </GlobalLayout>
  )
}

export default HomePage
