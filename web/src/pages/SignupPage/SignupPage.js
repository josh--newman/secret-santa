import { Form, TextField, PasswordField, Submit } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { routes, navigate } from '@redwoodjs/router'
import GlobalLayout from 'src/layouts/GlobalLayout/GlobalLayout'

const CREATE_USER = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`

const SignupPage = () => {
  const { client } = useAuth()
  const [error, setError] = React.useState(null)
  const [createUser] = useMutation(CREATE_USER)

  const onSubmit = async (data) => {
    setError(null)

    try {
      await client.signup(data.email, data.password)
      await createUser({
        variables: {
          input: {
            name: data.name,
            email: data.email,
          },
        },
      }).then(() => navigate(routes.login()))
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <GlobalLayout>
      <h1>Sign Up</h1>
      <Form onSubmit={onSubmit}>
        {error && <p>{error}</p>}
        <TextField name="name" placeholder="name" />
        <TextField name="email" placeholder="email" />
        <PasswordField name="password" placeholder="password" />
        <Submit>Sign Up</Submit>
      </Form>
    </GlobalLayout>
  )
}

export default SignupPage
