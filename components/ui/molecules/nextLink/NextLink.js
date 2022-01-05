import Link from 'next/link'

const NextLink = props => {
  return (
    <Link href={props.link}>
      <a className={props.classes}>{props.children}</a>
    </Link>
  )
}

export default NextLink
