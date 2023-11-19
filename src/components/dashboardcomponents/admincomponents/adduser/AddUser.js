import "./adduser.css"
import React, { useEffect, useState } from "react";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import {
    doc,
    serverTimestamp,
    setDoc,
} from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, auth, storage } from "../../../../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const AddUser = ({ inputs, title }) => {

    const [file, setFile] = useState("");
    const [data, setData] = useState({});
    const [per, setPerc] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        const uploadFile = () => {
            const name = new Date().getTime() + file.name;

            console.log(name);
            const storageRef = ref(storage, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                    setPerc(progress);
                    switch (snapshot.state) {
                        case "paused":
                            console.log("Upload is paused");
                            break;
                        case "running":
                            console.log("Upload is running");
                            break;
                        default:
                            break;
                    }
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setData((prev) => ({ ...prev, img: downloadURL }));
                    });
                }
            );
        };
        file && uploadFile();
    }, [file]);


    const handleInput = (e) => {
        const id = e.target.id;
        const value = e.target.value;

        setData({ ...data, [id]: value });
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );
            await setDoc(doc(db, "users", res.user.uid), {
                ...data,
                timeStamp: serverTimestamp(),
            });
            navigate(-1);
        } catch (err) {
            console.log(err);
        }
    };



    return (
        <div className="add-user-profile">
            <div className="db-header-holder">
                <Link className="editsss" style={{ textDecoration: "none" }} to='/admin/users'><ArrowBackIcon /><h3 className="db-edit">Back to List</h3></Link>
                <h2 className="db-edit">{title}</h2>
            </div>
            <div className="pages-row form-holder">
                <div className="pages-col-6 image-upload">
                    <img className=""
                        src={
                            file
                                ? URL.createObjectURL(file)
                                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                        }
                        alt=""
                    />
                </div>
                <div className="pages-col-6">
                    <form onSubmit={handleAdd}>
                        <div className="form-input img-upload">
                            <label>
                                Upload Image:
                            </label>
                            <label htmlFor="file"><DriveFolderUploadIcon /></label>
                            <input
                                type="file"
                                id="file"
                                onChange={(e) => setFile(e.target.files[0])}
                                style={{ display: "none" }}
                            />
                        </div>
                        {inputs.map((input) => (
                            <div className="form-input" key={input.id}>
                                <label>{input.label}</label>
                                {input.type === "select" ? (
                                    <select
                                        id={input.id}
                                        onChange={handleInput}
                                        defaultValue="" // Set default value to the placeholder
                                    >
                                        {input.options.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        id={input.id}
                                        type={input.type}
                                        placeholder={input.placeholder}
                                        onChange={handleInput}
                                    />
                                )}
                            </div>
                        ))}
                        <button className="form-button" disabled={per !== null && per < 100} type="submit">Add</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default AddUser;
