import { Grid } from '@mui/material';

import './house.style.css'

function House(props){
    const {searchField} = props;

    return (
        <Grid item xs={12} container spacing={2}>
            {
            searchField.map(val =>{
                return(
                    <Grid key={val.key} item lg={4}>
                    <div className='content'>
                    <div className='image fill'>
                    <img
                        className='card-image'
                        alt={val.title}
                        src={val.image}
                    />
                    </div>  
                      
                    <div className='card-details'>
                        <h3 className='card-inner-details price-text'>{val.price}<h4 className='price-month-text'>/month</h4></h3>
                        <h2 className='card-inner-details title-text'>{val.title}</h2>
                        <h3 className='card-inner-details location-text'>{val.location}</h3>
                        <h5 className='card-inner-details bed-bath-dim'>🛏️ {val.beds} beds </h5>
                        <h5 className='card-inner-details bed-bath-dim'>🚽 {val.bathrooms} bathrooms </h5>
                        <h5 className='card-inner-details bed-bath-dim'>⬜ {val.dimension} </h5>
                    </div>

                    </div>
                
                    </Grid>
                )
            })

        }
        </Grid>
    )
}

export default House;


// <div className="card-container block" key={id}>

//             <Row gutter={[24,24]}>
//             {
//                 data.map(dat=>{
//                     return(
//                         <Col lg={3} key={dat.id}>
//                             <div className='content'>
//                             <div className='image'>
//                             <img
//                                 className='card-image'
//                                 alt={dat.title}
//                                 src={dat.image}
//                             />
//                             </div>  
                              
//                             <div className='card-details'>
//                                 <h2>{dat.title}</h2>
//                                 <h3>{dat.location}</h3>
//                                 <h4>{dat.beds}beds</h4>
//                                 <h4>{dat.bathrooms}bathrooms</h4>
//                                 <h4>{dat.dimension}dimension</h4>
//                             </div>

//                             </div>
//                         </Col>
//                     )
//                 })
                
//             }
//             </Row>
//         </div>











// <Row gutter={[24, 24]}>
//   <Col span={8} />
//   <Col span={8} />
//   <Col span={8} />

//   <Col span={8} />
//   <Col span={8} />
//   <Col span={8} />
// </Row>
// <Row gutter={[24, 24]}>
//   <Col span={8} />
//   <Col span={8} />
//   <Col span={8} />
// </Row>

// <div className='content'>
//                             <div className='image'>
//                             <img
//                                 className='card-image'
//                                 alt={dat.title}
//                                 src={dat.image}
//                             />
//                             </div>  
                              
//                             <div className='card-details'>
//                                 <h2>{dat.title}</h2>
//                                 <h3>{dat.location}</h3>
//                                 <h4>{dat.beds}beds</h4>
//                                 <h4>{dat.bathrooms}bathrooms</h4>
//                                 <h4>{dat.dimension}dimension</h4>
//                             </div>

//                             </div>