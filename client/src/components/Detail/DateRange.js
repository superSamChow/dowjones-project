import React, { Component, PropTypes } from 'react'
import { DatePicker } from 'antd'

const { RangePicker } = DatePicker


class DataRange extends Component {
  static propTypes = {
    startTime: PropTypes.object,
    endTime: PropTypes.object,
    setTimeRanges: PropTypes.func
  }

  handleChange = (date, dateStr)=> {
    const { setTimeRanges } = this.props
    setTimeRanges(date[0], date[1])
  }

  render(){
    return (
      <RangePicker
        style={{ marginBottom:'16px' }}
        onChanege= { this.handleChange }
      />
    )
  }
}

export default DataRange