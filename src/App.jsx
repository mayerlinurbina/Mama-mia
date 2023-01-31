import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pizzas from "./pages/Pizzas";
import Pizza from "./pages/Pizza";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { useState } from "react";
import MiContext from './mi-context'


export default function App() {

  const [productos, setProductos] = useState([
    {
      id:1,
      nombre:'Pizza napolitana',
      ingredientes: [
        'Mozarella', 'Tomate', 'Jamon', 'Oregano'
      ],
      precio: 5990,
      imagen: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c'
    },
    {
      id:2,
      nombre:'Pizza Española',
      ingredientes: [
        'Mozarella', 'Tomate', 'Jamon', 'Choricillo'
      ],
      precio: 6250,
      imagen: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c'
    },
    {
      id:3,
      nombre:'Pizza Salame',
      ingredientes: [
        'Mozarella', 'Tomate', 'Salame', 'Oregano'
      ],
      precio: 7890,
      imagen: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c'
    },
    {
      id:4,
      nombre:'Pizza Cuatro estaciones',
      ingredientes: [
        'Mozarella', 'Salame', 'Aceitunas', 'Champiñones'
      ],
      precio: 9450,
      imagen: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c'
    }

  ])


  return (
    <div>
      <Navbar />

      <MiContext.Provider value={{ productos }}>
        <main className="container">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/pizzas"
              element={<Pizzas />}
            />
            <Route
              path="/pizzas/:id"
              element={<Pizza />}
            />
            <Route
              path="/cart"
              element={<Cart />}
            />
            {/* Agregar ruta 404 */}
          </Routes>
        </main>
      </MiContext.Provider>

    </div>
  );
}
