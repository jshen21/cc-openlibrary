import React, { Component } from 'react'
import { connect } from 'react-redux'
import { requestBooks } from '../store'

export class SearchBox extends Component {
    constructor () {
        super()
        this.state = {
            searchSelect: 'q',
            searchInput: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (event) {
        console.log('Hit',event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit (event) {
        event.preventDefault();
        const searchSelect = this.state.searchSelect;
        const searchInput = this.state.searchInput.split(' ').join('+');
        this.props.requestBooks(searchSelect, searchInput)
    }

    render () {
        const { searchSelect, searchInput } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <select name='searchSelect' value={searchSelect} onChange={this.handleChange}>
                        <option value="q">All</option>
                        <option value="title">Title</option>
                        <option value="author">Author</option>
                    </select>
                    <div>
                        <input 
                            type='text' 
                            name='searchInput' 
                            value={searchInput} 
                            onChange={this.handleChange}
                            placeholder='Search books...' />  
                        <button type="submit">Search</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatch = dispatch => {
    return {
      requestBooks: (searchSelect, searchInput) => dispatch(requestBooks(searchSelect, searchInput)) 
    }
}

export default connect (null, mapDispatch)(SearchBox)