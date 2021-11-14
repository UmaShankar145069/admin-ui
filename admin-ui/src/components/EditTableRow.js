import React from 'react';

const EditTableRow = () => {
    return(
        <tr>
            <td>
                <input type="text" required placeholder="Enter Name" name="fullname" />
            </td>
            <td>
                <input type="email" required placeholder="Enter Email" name="email" />
            </td>
            <td>
                <input type="text" required placeholder="Enter Role" name="role" />
            </td>
            
        </tr>
    );
};

export default EditTableRow;