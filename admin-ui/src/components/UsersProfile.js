import React from "react";
import edit from '../assets/images/edit.png';
import del from '../assets/images/delete.png';
import './UserProfile.css';
import EditTableRow from "./EditTableRow";

// Component to display Users Details in the form of Table
const UsersProfile = ({ users, loading, setUsers }) => {
    if(loading) {
        return <h2>Loading...</h2>;
    }
    // console.log(users);

    const deleteUser = (index) => {
        const updatedUsers = users.filter((user) => {
            return user.id !== index;
        });
        setUsers(updatedUsers);
    };

    return(
        <>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            users.map(user => (
                                <>
                                    {/* <EditTableRow /> */}
                                    <tr key={user.id}>
                                        <td><input type="checkbox" name={user.id} /></td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td><img src={edit} alt="edit-button" title="edit-button" className="edit-btn" /></td>
                                        <td><img src={del} alt="delete-button" title="delete-button" className="delete-btn" onClick={() => deleteUser(user.id)} /></td>
                                    </tr>
                                </>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default UsersProfile;