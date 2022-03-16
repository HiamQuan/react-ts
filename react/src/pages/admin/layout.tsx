import { NavLink, Routes,Route } from "react-router-dom";
import Dashboard from "./dashboard";
import ProductsList from "./list";

const AdminPage = (props) =>{
    return(
    <div className="admin-page">
        <aside><ul>
            <li>
                <NavLink to="/admin/dashboard">Dashboard</NavLink>
            </li>
            <li>
                <NavLink to="/admin/products">Products</NavLink>
            </li>
        </ul>
        </aside>
        <main>
            <Routes>
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="products" element={<h1>Noi dung thay doi</h1>}/>
            </Routes>
        </main>
    </div>
    )
}

export default AdminPage;