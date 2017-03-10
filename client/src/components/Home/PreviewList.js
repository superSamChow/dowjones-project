import React, {Component, PropTypes} from 'react'


class PreviewList extends Component {
  static propTypes = {
    dowjonesList: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.bool,
    loading: PropTypes.bool,
    loadDowjones: PropTypes.func
  }

  componentDidMount(){
    this.props.loadDowjones()
  }

  render(){
    const {
      loading,
      error,
      dowjonesList
    } = this.props

    if (error) {
      return <p>没有成功加载数据！</p>
    }

    if (loading) {
      return <p>数据加载中...</p>
    }

    return (
      <div />
    )
  }
}

export default PreviewList