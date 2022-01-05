import NextLink from '../nextLink/NextLink'
import Button from '../../atoms/Button/Button'
const Tab = props => {
  const linkClasses = 'nav-link'
  return (
    <div className='d-flex border'>
      <NextLink classes={linkClasses} link={props.link}>
        {props.children}
      </NextLink>
      <Button classes='btn btn-link m-0' value='X' />
    </div>
  )
}

export default Tab
