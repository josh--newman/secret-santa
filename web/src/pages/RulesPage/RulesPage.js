import { Link, routes } from '@redwoodjs/router'

const RulesPage = () => {
  return (
    <>
      <h1>RulesPage</h1>
      <p>
        Find me in <code>./web/src/pages/RulesPage/RulesPage.js</code>
      </p>
      <p>
        My default route is named <code>rules</code>, link to me with `
        <Link to={routes.rules()}>Rules</Link>`
      </p>
    </>
  )
}

export default RulesPage
