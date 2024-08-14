import './body.css';
import iphone from '../assets/iphone.png';
import redmi from '../assets/redmi.png';
import realme from '../assets/realme.png';
import samsung from '../assets/samsung.png';
import iqoo from '../assets/iqooz9.png';
import motorola from '../assets/motorola.png';


 function Body(){
    return(
      <div className='page-body'>
        <section className='home'>
       
        <div className='Heading'>
          <h1><marquee>LA LA MOBILES WELCOMES YOU !!!!</marquee></h1>
        </div>

        <table>
          <tr colspan='2'>
            <td>
        <div className='block1'>
          <div className='left'>
            <img src={iphone} alt='iphone'></img>
          </div>
          <div className='right'>
           <h2>IPHONE 15 PRO MAX</h2>
           <p>Apple's flagship offering boasts a large Super Retina XDR display, 
            powerful A17 Bionic chip, and advanced camera system with improved 
            low-light performance. It features a premium design with durable 
            materials and offers long battery life.</p>
          </div>
          </div>
          </td>
          <td>
          <div className='block2'>
          <div className='left'>
            <img src={redmi} alt='redmi'></img>
          </div>
          <div className='right'>
           <h2>REDMI NOTE 13 PRO</h2>
           <p>A mid-range contender from Xiaomi, the Redmi Note 13 Pro focuses 
            on delivering good value with a high refresh rate display, capable
             cameras, and ample battery life. It prioritizes performance and 
             features in a budget-friendly package.</p>
        </div>  
        </div>
        </td>
        </tr>
        <tr>
          <td>
        <div className='block3'>
          <div className='left'>
            <img src={realme} alt='realme'></img>
          </div>
          <div className='right'>
           <h2>REALME 13 PRO</h2>
           <p> Another mid-range option, Realme 13 Pro emphasizes stylish design,
             fast charging capabilities, and decent cameras.It aims to provide
             a premium-like experience without the premium price tag</p>
          </div>
        </div>
        </td>
        <td>
        <div className='block4'>
          <div className='left'>
            <img src={samsung} alt='samsung'></img>
          </div>
          <div className='right'>
           <h2>SAMSUNG GALAXY</h2>
           <p>Samsung's top-tier smartphone offers a cutting-edge display, 
            top-of-the-line performance, and a versatile camera setup including
           a powerful telephoto lens.It incorporates advanced features like 
            S Pen support and seamless integration with Samsung's ecosystem.</p>
          </div>
          </div>
          </td>
          </tr>
          <tr>
            <td>
          <div className='block5'>
          <div className='left'>
            <img src={motorola} alt='motorola'></img>
          </div>
          <div className='right'>
           <h2>MOTOROLA EDGE 50</h2>
           <p> Known for its clean Android experience, the Motorola Edge 50 
            prioritizes performance and a sleek design.It features a high 
            refresh rate display, capable cameras, and competitive battery life.</p>
          </div>
          </div>
          </td>
          <td>
          <div className='block6'>
          <div className='left'>
            <img src={iqoo} alt='iqoo'></img>
          </div>
          <div className='right'>
           <h2>IQOO Z9</h2>
           <p>Targeting the gaming and performance-oriented audience, the iQOO 
            Z9 offers a powerful processor, high refresh rate display, and fast
            charging.It prioritizes speed and responsiveness while maintaining 
            a competitive price point.</p>
          </div>
          </div>
          </td>
          </tr>          
          </table>
        
        </section>
      </div>
      
    );
 }
 export default Body;