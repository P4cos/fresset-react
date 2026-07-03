
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Ofertas from "./pages/Ofertas";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Login from "./pages/Login";
import Carrito from "./pages/Carrito";
import Checkout from "./pages/Checkout";
import PedidoExitoso from "./pages/PedidoExitoso";
import Favoritos from "./pages/Favoritos";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import FloatingWhatsapp from "./components/Common/FloatingWhatsapp";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carrito" element={<Carrito />} />

          <Route path="/checkout" element={<Checkout />} />
          <Route path="/pedido-exitoso" element={<PedidoExitoso />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <FloatingWhatsapp />
    </BrowserRouter>
  );
}

export default App;