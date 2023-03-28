import React, { useState, useRef } from "react";
function StaffAppBK() {
    const [staffs, setStaffs] = useState(["Khoa", "Trọng Anh", "Trung"])
    const [staff, setStaff] = useState("");

    const nameRef = useRef();

    const handleAddStaff = () => {
        setStaffs([
            ...staffs,
            staff
        ])
        setStaff("")
        nameRef.current.focus();
    }
    return (
        <div>
            <h1>Staff Application</h1>
            <input 
                type="text" 
                value={staff} 
                name="name" 
                ref={nameRef}
                onInput={(e) => setStaff(e.target.value)} />
            <button onClick={handleAddStaff}>Add</button>
            <div>
                <ul>
                    {
                        staffs.map((item) => {
                            return <li>{ item } <span span title = "remove staff" >&times;</span></li>
                        })
                    }
                </ul>
            </div >
        </div >
    )
}

export default StaffAppBK;