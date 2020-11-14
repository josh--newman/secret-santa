import { render } from '@redwoodjs/testing'

import RulesPage from './RulesPage'

describe('RulesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RulesPage />)
    }).not.toThrow()
  })
})
