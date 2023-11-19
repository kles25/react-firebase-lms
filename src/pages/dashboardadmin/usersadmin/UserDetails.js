import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import EditIcon from '@mui/icons-material/Edit';
import EditOffIcon from '@mui/icons-material/EditOff';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./usersadmin.css"

const UserDetails = () => {
    const { userId } = useParams();
    const [userDetails, setUserDetails] = useState(null);
    const [editedDetails, setEditedDetails] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

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
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
            }, 3000);
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
            <div className={`notification-up ${showNotification ? 'notification-ups' : ''}`}>
                Saved Succesfully!
            </div>
            <div className="user-details-holder">
                <div className="db-header-holder ">
                    <Link className="editsss" style={{ textDecoration: "none" }} to='/admin/users'><ArrowBackIcon /><h3 className="db-edit">Back to List</h3></Link>
                    {isEditing ? (
                        <div className="editsss" onClick={handleCancelEdit} style={{ cursor: "pointer" }}>
                            <EditOffIcon />
                            <h3 className="db-edit">Edit Profile</h3>
                        </div>

                    ) : (
                        <div className="editsss" onClick={handleEdit} style={{ cursor: "pointer" }}>
                            <EditIcon />
                            <h3 className="db-edit">Edit Profile</h3>
                        </div>
                    )}
                </div>
                <div className="pages-row">
                    <div className="pages-col-6">
                        <div className="db-profile-img" style={{ backgroundImage: `url(${userDetails.img})` }}></div>
                    </div>
                    <div className="pages-col-6">
                        {isEditing ? (
                            <div className="db-up-holder">
                                <label>Name:</label>
                                <input
                                    type="text"
                                    name="displayName"
                                    value={editedDetails.displayName || ''}
                                    onChange={handleInputChange}
                                />
                                <label>Username:</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={editedDetails.username || ''}
                                    onChange={handleInputChange}
                                    className="lowercase-up"
                                />
                                <label>Role:</label>
                                <input
                                    type="text"
                                    name="role"
                                    value={editedDetails.role || ''}
                                    onChange={handleInputChange}
                                />
                                <label>Birthdate:</label>
                                <input
                                    type="date"
                                    name="birthday"
                                    value={editedDetails.birthday || ''}
                                    onChange={handleInputChange}
                                />
                                <label>Gender:</label>
                                <input
                                    type="text"
                                    name="gender"
                                    value={editedDetails.gender || ''}
                                    onChange={handleInputChange}
                                />
                                <label>Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={editedDetails.email || ''}
                                    onChange={handleInputChange}
                                    className="lowercase-up"
                                />
                                <label>Contact:</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={editedDetails.phone || ''}
                                    onChange={handleInputChange}
                                />
                                <label>Address:</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={editedDetails.address || ''}
                                    onChange={handleInputChange}
                                />
                                {/* Additional input fields for other details */}
                                {/* ... */}
                                <button onClick={handleUpdateUserDetails}>Save</button>
                                <button onClick={handleCancelEdit}>Cancel</button>
                            </div>
                        ) : (
                            <div className="db-up-holder">
                                <label>Name:</label>
                                <input placeholder={userDetails.displayName} readOnly />
                                <label>Username:</label>
                                <input className="lowercase-up" placeholder={userDetails.username} readOnly />
                                <label>Role:</label>
                                <input placeholder={userDetails.role} readOnly />
                                <label>Birthdate:</label>
                                <input placeholder={userDetails.birthday} readOnly />
                                <label>Gender:</label>
                                <input placeholder={userDetails.gender} readOnly />
                                <label >Email:</label>
                                <input className="lowercase-up" placeholder={userDetails.email} readOnly />
                                <label>Contact:</label>
                                <input placeholder={userDetails.phone} readOnly />
                                <label>Address:</label>
                                <input placeholder={userDetails.address} readOnly />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;