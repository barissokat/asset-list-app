import Link from '../../atoms/link/Link'
import ListItem from '../../atoms/listItem/ListItem'

const List = () => {
  const listItemClasses = 'list-group-item'
  const linkListClasses = 'badge bg-secondary link-light'
  const linkDetailClasses = 'badge bg-primary link-light'
  return (
    <ul className='list-group'>
      <ListItem classes={listItemClasses}>
        <Link classes={linkListClasses} link='#a'>Asset List</Link>
        <span className='mx-2'>|</span>
        <Link classes={linkDetailClasses} link='#a1'>Asset 1 Detail</Link>
      </ListItem>
      <ListItem classes={listItemClasses}>
        <Link classes={linkListClasses} link='#a'>Asset List</Link>
        <span className='mx-2'>|</span>
        <Link classes={linkDetailClasses} link='#a2'>Asset 2 Detail</Link>
      </ListItem>
      <ListItem classes={listItemClasses}>
        <Link classes={linkListClasses} link='#p'>Person List</Link>
        <span className='mx-2'>|</span>
        <Link classes={linkDetailClasses} link='#p1'>Person 1 Detail</Link>
      </ListItem>
      <ListItem classes={listItemClasses}>
        <Link classes={linkListClasses} link='#p'>Person List</Link>
        <span className='mx-2'>|</span>
        <Link classes={linkDetailClasses} link='#p2'>Person 2 Detail</Link>
      </ListItem>
    </ul>
  )
}

export default List
