import './card.styles.css'

function Card(props){
    const { id,image,title,location,beds,bathrooms,dimension} = props;
    return (
        <div className="card-container" key={id}>
        <div>
            <img
                className='card-image'
                alt={title}
                src={image}
            />
        </div>    
        <div className='card-details'>
            <h2>{title}</h2>
            <h3>{location}</h3>
            <h4>{beds}beds</h4>
            <h4>{bathrooms}bathrooms</h4>
            <h4>{dimension}dimension</h4>
        </div>
        </div>
    )
}

export default Card;