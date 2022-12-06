import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/MoreDropdown.module.css";

const Settings = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fa-solid fa-gear"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

export const MoreDropdown = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className="ml-auto align-items-md-end" drop="left">
      <Dropdown.Toggle as={Settings} />

      <Dropdown.Menu
        className="text-center"
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item
          onClick={handleEdit}
          aria-label="edit"
        >
          <i className="fa-solid fa-pen" >Edit</i>
        </Dropdown.Item>
        <Dropdown.Item
          onClick={handleDelete}
          aria-label="delete"
        >
          <span className={styles.DropdownItem}><i className="fa-solid fa-trash"  >Delete</i></span>

        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};