import React, { useEffect, useState } from "react";
const key = "staff_db";
function StaffAppAPI() {
    const [staffs, setStaffs] = useState([])

    console.log(staffs);
    const [staff, setStaff] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setStaffs(() => {
            let newStaffs = [...staffs, staff];
            window.localStorage.setItem(key, JSON.stringify(newStaffs));
            return newStaffs;
        })
        setStaff("")
    }

    const removeStaff = (pos) => {
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

export default StaffAppAPI;