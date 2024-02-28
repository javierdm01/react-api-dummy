

export function Home(){
    return (
        <div className="home_container">
            <div className="home_cards">
                <img className="home_img" src="./src/assets/usuarios.png" alt="" />
                <h3>Usuarios</h3>
            </div>
            <div className="home_cards">
                <img className="home_img" src="./src/assets/productos.jpg" alt="" />
                <h3>Productos</h3>
            </div>
        </div>
    )
}