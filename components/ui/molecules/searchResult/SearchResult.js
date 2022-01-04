import Link from '../../atoms/link/Link'
import ListItem from '../../atoms/listItem/ListItem'

const List = () => {
  const listItemClasses = 'list-group-item'
  const linkClasses = 'badge badge-primary'
  return (
    <ul className='list-group'>
      <ListItem classes={listItemClasses}><Link classes={linkClasses}>Asset List</Link><Link classes={linkClasses}>Asset 1 Detail</Link></ListItem>
      <ListItem classes={listItemClasses}><Link classes={linkClasses}>Asset List</Link><Link classes={linkClasses}>Asset 2 Detail</Link></ListItem>
      <ListItem classes={listItemClasses}><Link classes={linkClasses}>Asset List</Link><Link classes={linkClasses}>Asset  Detail</Link></ListItem>
    </ul>
  )
}

export default List
