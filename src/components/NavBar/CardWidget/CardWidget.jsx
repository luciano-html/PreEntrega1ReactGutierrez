import carritoImg from "../../../assets/img/carritoImg.png"

let cantidadCarro = 0
function Carrito() {
    return (
        <a className="carro" href="">
            <span className="cantCarro">
                <p className="">{cantidadCarro}</p>
            </span>
            <img className='carroImg' src={carritoImg} alt=""></img>
        </a>


    )
}
export default Carrito;