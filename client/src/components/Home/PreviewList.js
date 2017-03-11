import React, {Component, PropTypes} from 'react'
import { Table, Spin, message } from 'antd'



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

    const columns = [{
      title: 'Ticker-Name',
      dataIndex: 'ticker',
      render: text => text.toUpperCase()
    }, {
      title: 'Company-Name',
      dataIndex: 'Company-Name'
    }, {
      title: 'Exchange-Name',
      dataIndex: 'Exchange-Name'
    }, {
      title: 'previous_close_price',
      dataIndex: 'previous_close_price'
    }, {
      title: 'last_update',
      render: () => '2017-3-10'
    }]

    let table = (
      <Table 
        columns={columns} 
        dataSource={dowjonesList} 
      />
    )

    if (error) {
      message.error("加载数据错误！")
    }

    if (loading) {
      return (
        <Spin size="large" >
          {table}
        </Spin>
      )
    }

    return table
  }
}

export default PreviewList