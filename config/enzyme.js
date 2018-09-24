/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'

jest.mock('react-redux', () => ({
 connect: () => component => component,
}))

configure({
 adapter: new Adapter(),
})

