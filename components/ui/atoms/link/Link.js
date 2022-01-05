const Link = props => {
  return <a id={props.id} href={props.link} className={props.classes}>{props.children}</a>
}

export default Link
