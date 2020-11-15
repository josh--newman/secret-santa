import { Form, TextField, PasswordField, Submit } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import GlobalLayout from 'src/layouts/GlobalLayout/GlobalLayout'

const LoginPage = () => {
  const { logIn } = useAuth()
  const [error, setError] = React.useState(null)

  const onSubmit = (data) => {
    setError(null)
    logIn({ email: data.email, password: data.password, remember: true })
      .then(() => navigate(routes.home()))
      .catch((error) => setError(error.message))
  }

  return (
    <GlobalLayout>
      <h1>Log in</h1>
      <Form onSubmit={onSubmit}>
        {error && <p>{error}</p>}
        <TextField name="email" placeholder="email" />
        <PasswordField name="password" placeholder="password" />
        <Submit>Log in</Submit>
      </Form>
    </GlobalLayout>
  )
}

export default LoginPage
