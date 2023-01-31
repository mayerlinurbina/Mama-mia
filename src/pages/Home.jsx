import { useContext } from "react";
import Card from "../components/Card";
import MiContext from "../mi-context"

export default function Home() {
  const context = useContext(MiContext)
  console.log(context.productos)
  return (
    <div>

      <div className='banner-main' >
        <h1 className='text-white text-center' >!Pizzeria Mama Mia¡</h1>
        <h4 className='text-white text-center'>!tenemos las mejores pizzas que podras encontrar¡</h4>

      </div>
      <div>
      <div className="row">

        {context.productos.map((producto) => (
          <Card producto={producto} key={producto.id} />
        ))}
      </div>
      </div>
    </div>

  );
}
