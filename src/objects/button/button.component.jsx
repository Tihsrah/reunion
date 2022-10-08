import './button.styles.css'
function Button(props) {
    return (
        <div className="button-card">
        <button onClick={props.onChange} className={props.style}>{props.name}</button>
        </div>
    )
}

export default Button;