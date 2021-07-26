import React from 'react'
import { Link } from "react-router-dom";
import Avatar from 'react-avatar'
const Contact = ({contact}) => {
    return (
        <tr>
        <td>
       <div className="custom-control custom-checkbox">
         <input
           id="selectAll"
           type="checkbox"
           className="custom-control-input"
           
           />
         <label
           htmlFor="selectAll"
           className="custom-control-label"
         ></label>
       </div>
     </td>
     <td> 
         <Avatar className="mr-4" name={contact.name} size="40" round="50%"/> {contact.name}</td>
     <td>{contact.phone}</td>
     <td>{contact.email}</td>
    <td className="actions">
    <a >
          <span className="material-icons mr-2">edit</span>
        </a>
        <span
          className="material-icons  text-danger"
          
        >
          remove_circle
        </span>
    </td>
   </tr>
    )
}

export default Contact
