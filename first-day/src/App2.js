
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Cart } from './pages/cart';
import { Home } from './pages/home';
import { Layout } from './pages/layout';
import { Products } from './pages/products';
const App = () => {
  return (
    //presentation logic goes here

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}
export default App;
