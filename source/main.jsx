import React from 'react'

import { withRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import {CombineRoutes} from '../routes/common.route.jsx'

function mapStateToProps(state) {
    return {
    	...state
    }
}

@withRouter
@connect(mapStateToProps)
export default class Main extends React.Component {

	constructor(props){
		super(props);
	}

	render() {
		return (
          <CombineRoutes />
        )

	}

}
