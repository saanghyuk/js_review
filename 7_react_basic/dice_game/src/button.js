import './button.css'

function Button ({color='blue', children, onClick, className = ''}){
  const classNames = `Button ${color} ${className}`
  return <button className={classNames} onClick={onClick} >{children}</button>
}

export default Button;