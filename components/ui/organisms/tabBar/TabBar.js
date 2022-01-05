import { connect } from 'react-redux'
import { removeItemToTabBar } from '../../../../redux/actions/actionCreators'

import ListItem from '../../atoms/listItem/ListItem'
import Tab from '../../molecules/tab/Tab'

const TabBar = props => {
  const listItemClasses = 'nav-item'
  console.log(props.tabBar)
  return (
    <ul className='nav nav-pills border-bottom'>
      <ListItem classes={listItemClasses}><Tab link='/'>Search</Tab></ListItem>
      {props.tabBar.map((data, i) => (
        <ListItem key={i} classes={listItemClasses}>
          <Tab link={data.url}>{data.name}</Tab>
        </ListItem>
      ))}
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    dataList: state.dataList,
    tabBar: state.tabBar
  }
}

const mapActionToProps = { removeItemToTabBar }

export default connect(mapStateToProps, mapActionToProps)(TabBar)
