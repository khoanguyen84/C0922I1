import React, { useState } from "react";
function StaffApp() {
    const [staffs, setStaffs] = useState([])
    const [staff, setStaff] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setStaffs([
            ...staffs,
            staff
        ])
        setStaff("")
    }

    const removeStaff = (pos) => {
        // let newStaffs = staffs.filter((staff, index) => index !== pos);
        // setStaffs(newStaffs);
        // setStaffs((prev) => {
        //     let newStaffs = prev.filter((staff, index) => index !== pos);
        //     return newStaffs;
        // })
        setStaffs((prev) => {
            return prev.filter((staff, index) => index !== pos)
        })
    }
    return (
        <div>
            <h1>Staff Application</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={staff}
                    name="name"
                    onInput={(e) => setStaff(e.target.value)} />
                <button type="submit">Add</button>
            </form>

            <div>
                {
                    !staffs.length ? <p>There is no staff</p> : (
                        <ul>
                            {
                                staffs.map((item, index) => {
                                    return <li key={index}>{item}
                                        <span span title="remove staff" onClick={() => removeStaff(index)}>&times;</span>
                                    </li>
                                })
                            }
                        </ul>
                    )
                }
            </div >
        </div >
    )
}

export default StaffApp;