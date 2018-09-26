import { shallow } from 'enzyme'

import Component from '.'

const requiredProps = {
  posts: [],
  dispatch: jest.fn(),
}

it('is rendered', () => {
  shallow(pug`Component(...requiredProps)`)
})
