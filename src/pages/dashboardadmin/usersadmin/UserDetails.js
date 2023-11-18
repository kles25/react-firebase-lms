import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import EditNoteIcon from '@mui/icons-material/EditNote';
import "./usersadmin.css"


const UserDetails = () => {
    const { userId } = useParams();
    const [userDetails, setUserDetails] = useState(null);
    const [editedDetails, setEditedDetails] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const docRef = doc(db, "users", userId);
                const userDoc = await getDoc(docRef);
                if (userDoc.exists()) {
                    setUserDetails({ id: userDoc.id, ...userDoc.data() });
                    setEditedDetails({ id: userDoc.id, ...userDoc.data() });

                } else {
                    // Handle user not found
                    console.log("User not found");
                }
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        };

        fetchUserDetails();
    }, [userId]);

    const handleUpdateUserDetails = async () => {
        try {
            const docRef = doc(db, "users", userId);
            await updateDoc(docRef, editedDetails);
            setUserDetails(editedDetails); // Update displayed details
            setIsEditing(false); // Exit edit mode
        } catch (error) {
            console.error("Error updating user details:", error);
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setEditedDetails(userDetails); // Reset edited details to current details
        setIsEditing(false); // Exit edit mode
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    if (!userDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="user-details-container">
            <div className="user-details-holder">
                <h2>User Details</h2>
                <div className="pages-row">
                    <div className="pages-col-6"></div>
                    <div className="pages-col-6">
                        {isEditing ? (
                            <div>
                                <input
                                    type="text"
                                    name="displayName"
                                    value={editedDetails.displayName || ''}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="text"
                                    name="username"
                                    value={editedDetails.username || ''}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="date"
                                    name="birthday"
                                    value={editedDetails.birthday || ''}
                                    onChange={handleInputChange}
                                />
                                {/* Additional input fields for other details */}
                                {/* ... */}
                                <button onClick={handleUpdateUserDetails}>Save</button>
                                <button onClick={handleCancelEdit}>Cancel</button>
                            </div>
                        ) : (
                            <div>
                                <p>Name: {userDetails.displayName} </p>
                                <p>Name: {userDetails.username} </p>
                                <p>Name: {userDetails.role} </p>
                                <p>Name: {userDetails.birthday}  </p>
                                <p>Name: {userDetails.gender}  </p>
                                <p>Name: {userDetails.email}  </p>
                                <p>Name: {userDetails.phone} </p>
                                <p>Name: {userDetails.address} </p>
                                <EditNoteIcon onClick={handleEdit} style={{ cursor: "pointer" }} />



                            </div>
                        )}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default UserDetails;