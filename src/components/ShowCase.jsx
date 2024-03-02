import React from "react";
import './ShowCase.css'
function Header({ value, onChange }) {
    return (
        <div className="container-header">
            <div className="label-header">
                ตัวกรอง:
            </div>
            <select value={value} onChange={onChange} className="select-header">
                <option value="รายจ่าย">รายจ่าย</option>
                <option value="รายรับ">รายรับ</option>
            </select>
        </div>

    )
}

export default Header;
