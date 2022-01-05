import { connect } from 'react-redux'
import { addItemToTabBar } from '../../../../redux/actions/actionCreators'

import Link from '../../atoms/link/Link'
import ListItem from '../../atoms/listItem/ListItem'

const SearchResult = props => {
  const listItemClasses = 'list-group-item'
  const linkListClasses = 'badge bg-secondary link-light'
  const linkDetailClasses = 'badge bg-primary link-light'
  return (
    <ul className='list-group'>
      {props.dataList.map((data, i) => (
        <ListItem classes={listItemClasses} key={i}>
          <Link onClick={() => props.addItemToTabBar.bind(null, data)} id={data.id} classes={linkListClasses} link={data.category === 'assets' ? '#a' : '#p'}>{data.category}</Link>
          <span className='mx-2'>|</span>
          <Link onClick={() => props.addItemToTabBar.bind(null, data)} id={data.id} classes={linkDetailClasses} link={data.url}>{data.name}</Link>
          <button onClick={() => props.addItemToTabBar(data)}> seç</button>
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

const mapActionToProps = { addItemToTabBar }

export default connect(mapStateToProps, mapActionToProps)(SearchResult)
