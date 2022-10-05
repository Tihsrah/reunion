import { Grid } from '@mui/material';
import data from '../../data/data'
import './house.style.css'

function House(props){
    const { id,image,title,location,beds,bathrooms,dimension} = props;
    return (
        <Grid item xs={12} container spacing={2}>
            {
            data.map(dat =>{
                return(
                    <Grid item lg={4}>
                    <div className='content'>
                    <div className='image fill'>
                    <img
                        className='card-image'
                        alt={dat.title}
                        src={dat.image}
                    />
                    </div>  
                      
                    <div className='card-details'>
                        <h2 className='card-inner-details'>{dat.title}</h2>
                        <h3 className='card-inner-details'>{dat.location}</h3>
                        <h4 className='card-inner-details'>{dat.beds}beds</h4>
                        <h4 className='card-inner-details'>{dat.bathrooms}bathrooms</h4>
                        <h4 className='card-inner-details'>{dat.dimension}dimension</h4>
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