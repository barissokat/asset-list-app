import ListItem from '../../atoms/listItem/ListItem'
import Tab from '../../molecules/tab/Tab'

const TabBar = props => {
  const listItemClasses = 'nav-item'
  return (
    <ul className='nav nav-pills border-bottom'>
      <ListItem classes={listItemClasses}><Tab link='/'>Search</Tab></ListItem>
      <ListItem classes={listItemClasses}><Tab link='/list'>Asset List</Tab></ListItem>
      <ListItem classes={listItemClasses}><Tab link='/details'>Asset 1 Detail</Tab></ListItem>
      <ListItem classes={listItemClasses}><Tab link='/list'>Person List</Tab></ListItem>
      <ListItem classes={listItemClasses}><Tab link='/details'>Person 1 Detail</Tab></ListItem>
    </ul>
  )
}

export default TabBar
