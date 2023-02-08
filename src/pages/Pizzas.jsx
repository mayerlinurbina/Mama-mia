import { useContext } from "react";
import Card from "../components/Card";
import MiContext from "../mi-context"

export default function Pizzas() {
  const {agregarAlCarrito, productos} = useContext(MiContext)
  return (
    <div>
      <h1>Pizzas</h1>
      <div className="row">
        {productos.map((producto) => (
          <Card agregarAlCarrito={agregarAlCarrito} producto={producto} key={producto.id} />
        ))}
      </div>
    </div>
  );
}
