import React, { Component, PropTypes } from 'react'
import Plottable from 'plottable'
import { Spin, message } from 'antd'

import { createChart } from '../../utils/chart'

class DowjonesChart extends Component {
  static proptypes = {
    search: PropTypes.string,
    loading: PropTypes.bool,
    error: PropTypes.bool,
    selectedDowjones: PropTypes.array,
    startTime: PropTypes.object,
    endTime: PropTypes.object,
    loadDowjonesDetail: PropTypes.func
  }

  chart = createChart()

  componentDidMount(){
    const { 
      search,
      loadDowjonesDetail
    } = this.props
    const items = search.trim().slice(1).split('&')

    loadDowjonesDetail(items)
  }

  componentWillReceiveProps(props){
    const { loading } = props
    if (!loading) {
      this.chart.renderTo('#chart')
    }
  }

  render(){
    const {
      loading,
      error,
      selectedDowjones,
      startTime,
      endTime
    } = this.props

    const svg = <svg id='chart' />
    const spin = (
      <Spin size='large'>
        <div
          style={{ height: 200}} 
        />
      </Spin>
    )

    if (error){
      message.error("加载数据错误！")
    }

    return (
      <div>
        {
          loading? spin: ''
        }
        { svg }
      </div>
    )
  }
}

export default DowjonesChart