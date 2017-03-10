import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { listActions } from './HomeRedux'
import PreviewList from '../components/Home/PreviewList'

class Home extends Component {
  static propTypes = {
    list: PropTypes.object,
    listActions: PropTypes.object
  }

  render(){
    const {
      list,
      listActions
    } = this.props

    return (
      <div className="home">
        <PreviewList
          {...list}
          {...listActions}
        />
      </div>
    )
  }
}

export default connect(state => {
  return {
    list: state.home.list
  }
}, dispatch => {
  return {
    listActions: bindActionCreators(listActions, dispatch)
  }
})(Home)