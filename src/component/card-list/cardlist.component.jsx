import './cardlist.styles.css'
import Card from "../card/card.component";

function CardList(props){
    const { properties } = props
    return (
        <div className="card-list">
            {properties.map((property) => {
                const { id,image,title,location,beds,bathrooms,dimension } = property
                return (
                    <Card
                        id={id}
                        image={image}
                        title={title}
                        location={location}
                        beds={beds}
                        bathrooms={bathrooms}
                        dimension={dimension}
                    />
                );
            })}
        </div>

    )
}

export default CardList;