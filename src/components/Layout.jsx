import { Link,Outlet } from "react-router-dom"

export function Layout(){
    return(
        <>
            <div>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/usuarios"}>Usuarios</Link>
                            </li>
                            <li>
                                <Link to={"/productos"}>Productos</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <Outlet/>
                </main>
            </div>
        </>
    )
}