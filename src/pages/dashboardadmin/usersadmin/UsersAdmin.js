import { Link } from "react-router-dom";
import "./usersadmin.css"
import Datatable from "../../../components/datatable/DataTable";


function UsersAdmin() {
    return (
        <>
            <div className="pages-row cu-button-holder">
                <button><Link to='/admin/adduser'>Add Profile</Link></button>
            </div>
            <Datatable />
        </>
    )
}

export default UsersAdmin;
