import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { listActions } from './DetailRedux'

class Detail extends Component {
  static propTypes = {
    list: PropTypes.object,
    listActions: PropTypes.object
  }

  render(){
    const {
      location,
      list,
      listActions,
      push
    } = this.props

    return (
      <div />
    )
  }
}

export default connect(state => {
  return {
    list: state.detail.list
  }
}, dispatch => {
  return {
    listActions: bindActionCreators(listActions, dispatch),
    push: bindActionCreators(push, dispatch)
  }
})(Detail)