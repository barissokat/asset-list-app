const Button = props => {
  const classes = props.classes === undefined ? 'btn btn-primary' : 'btn btn-link'
  return <button className={classes}>{props.value}</button>
}

export default Button
