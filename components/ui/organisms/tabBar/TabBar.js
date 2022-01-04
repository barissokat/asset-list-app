import ListItem from '../../atoms/listItem/ListItem'
import Tab from '../../molecules/tab/Tab'

const TabBar = props => {
  const listItemClasses = 'nav-item'
  return (
    <ul className='nav nav-tabs'>
      <ListItem classes={listItemClasses}><Tab>Asset List</Tab></ListItem>
      <ListItem classes={listItemClasses}><Tab>Asset Detail</Tab></ListItem>
      <ListItem classes={listItemClasses}><Tab>Person List</Tab></ListItem>
      <ListItem classes={listItemClasses}><Tab>Person Detail</Tab></ListItem>
    </ul>
  )
}

export default TabBar
