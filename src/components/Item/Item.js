import './Item.css'

const Item = ({producto}) => {
  return (
  <div className='principal'> 
    
    <div className='caja-juegos'>
        
      <div className="productos">
      <img className='imagen-juegos' alt={producto.title} src={`/images/${producto.imagen}.jpeg`}/>
        <h2>{producto.title}</h2>
        <h3>Caterogíra: {producto.category}</h3>
        <h3>Precio: {producto.price}</h3>
      </div>
  
    </div>
  </div> 
  )
};

export default Item