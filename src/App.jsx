import './App.scss';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import ProductImagesSlider from './components/product-images-slider';
import { productImages } from './assets'

function App() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        width: '800px',
        height: '700px',
        backgroundColor: '#fff',
        padding: '20px'
      }}>
        <ProductImagesSlider images={productImages} />
      </div>
    </div>
  );
}

export default App;
