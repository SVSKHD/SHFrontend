import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const DesiredCarousel = () =>{
  
  return(
    <Carousel
    plugins={[
    'centered',
    'infinite',
    'arrows',
    {
      resolve: slidesToShowPlugin,
      options: {
       numberOfSlides: 2,
      },
    },
  ]}   
>
  <img src="../static/images/tirupati.jpg" />
  
</Carousel>
  )
}
export default DesiredCarousel