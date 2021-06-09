import React, { Component } from 'react'
import { CSSTransition , TransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { URL } from '../../../config'

class NewsList extends Component {

    state = {
        items: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }

    componentWillMount(){
        axios.get(``)
    }

    render() {
        return (
            <div>
                hello
            </div>
        )
    }
}

export default NewsList;