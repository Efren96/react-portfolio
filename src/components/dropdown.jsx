import React, { useState } from "react";

const Dropdown = ({ isOpen }) => {
    const [formState, setFormState] = useState({
        commentText: '',
    });
    return (
        <div className="dropdown-div" >
        <li className="dropdown-list">
            <ul className="ul-styling" >About Me</ul>
            <ul className="ul-styling">Projects</ul>
            <ul className="ul-styling">Resume</ul>
            <ul className="ul-styling">Contact</ul>
        </li>
    </div>
    );
}
export default Dropdown;