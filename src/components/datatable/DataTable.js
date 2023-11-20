import "./datatable.css";
import { userColumns } from "../../DataTableSource";
import { useEffect, useState } from "react";
import {
    collection,
    deleteDoc,
    doc,
    onSnapshot,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";


const Datatable = () => {
    const [data, setData] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);




    useEffect(() => {
        // const fetchData = async () => {
        //   let list = [];
        //   try {
        //     const querySnapshot = await getDocs(collection(db, "users"));
        //     querySnapshot.forEach((doc) => {
        //       list.push({ id: doc.id, ...doc.data() });
        //     });
        //     setData(list);
        //     console.log(list);
        //   } catch (err) {
        //     console.log(err);
        //   }
        // };
        // fetchData();

        // LISTEN (REALTIME)
        const unsub = onSnapshot(
            collection(db, "users"),
            (snapShot) => {
                let list = [];
                snapShot.docs.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                });
                setData(list);
                console.log(list)
            },
            (error) => {
                console.log(error);
            }
        );

        return () => {
            unsub();
        };
    }, []);




    const handleDelete = (id) => {
        setSelectedItemId(id); // Set the selected item ID for deletion
        setShowConfirmation(true); // Show the confirmation dialog
    };

    const UserDetailsLink = ({ id }) => (
        <Link to={`/admin/${id}`} style={{ textDecoration: "none" }}>
            <button className="viewButton">View</button>
        </Link>
    );



    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cell-action">
                        <UserDetailsLink id={params.row.id} />
                        <button
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete
                        </button>
                    </div>
                );
            },
        },
    ];

    const confirmDelete = async () => {
        try {
            await deleteDoc(doc(db, 'users', selectedItemId));
            setData(prevData => prevData.filter((item) => item.id !== selectedItemId));
            setShowConfirmation(false); // Close the confirmation dialog after successful deletion
        } catch (err) {
            console.log(err);
        }
    };

    const cancelDelete = () => {
        setShowConfirmation(false); // Close the confirmation dialog
    };




    return (
        <div className="datatable">
            {showConfirmation && (
                <div className="notification">
                    <div className="notification-holder">
                        <p>Are you sure you want to delete this?</p>
                        <div className="nh-button-holder">
                            <button onClick={confirmDelete}>Confirm</button>
                            <button onClick={cancelDelete}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
            <DataGrid
                className="datagrid"
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
};

export default Datatable;
