export default function Card({ producto }) {
  return (
    <article className="mb-2 col-12 col-md-6 col-xl-3">
      <div className="card">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
          className="card-img-top"
          alt="card description"
        />
        <div className="card-body">
          <h2>
  <b>{producto.nombre}</b>
          </h2>
          <h6>Ingredientes</h6>
          <ul>
            {producto.ingredientes.map((ingrediente)=>(
              <li>
                {ingrediente}
              </li>
            ))}
            
          </ul>
          <h5>
            <b>${producto.precio}</b>
          </h5>
          <div className="d-flex gap-2">
            <a
              href="/cart"
              className="btn btn-outline-primary"
            >
              Comprar
            </a>
            <a
              href={`/pizzas/${producto.id}`}
              className="btn btn-outline-danger"
            >
              Ver detalles
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
