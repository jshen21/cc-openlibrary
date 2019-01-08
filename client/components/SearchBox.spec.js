import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { SearchBox } from './SearchBox'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Search Box', () => {
    let wrapper
    let fakeData = ['All', 'Titile', 'Author']

    beforeEach(() => {
        wrapper = shallow(<SearchBox searchSelect={fakeData} />)
    })

    it('renders the search form', () => {
        expect(wrapper.find('form').length).to.be.equal(1)
    })

    it('renders the select menu', () => {
        expect(wrapper.find('select').length).to.be.equal(1)
    })

    it('renders all of the search select options', () => {
        expect(wrapper.find('option').length).to.be.equal(3)
    })

    it('renders the input tag', () => {
        expect(wrapper.find('input').length).to.be.equal(1)
    })

    it('renders the search button',() => {
        expect(wrapper.find('button').length).to.be.equal(1)
    })
})