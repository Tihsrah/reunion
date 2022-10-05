
import './searchbox.styles.css'
function SearchBox(props){
    return (
        <input
            placeholder={props.placeholder}
            className="input-box"
            onChange={props.onChange}
        />
    )
}

export default SearchBox;