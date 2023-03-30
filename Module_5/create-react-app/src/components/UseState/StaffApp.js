import React, { useState } from "react";
import { Link } from "react-router-dom";
// import * as Khoa from "react";
const key = "staff_db";
function StaffApp() {
    const [staffs, setStaffs] = useState(() => {
        let array = [];
        if (window.localStorage.getItem(key) == null) {
            array = ["Khoa", "Phước"];
            window.localStorage.setItem(key, JSON.stringify(array));
        }
        else {
            array = JSON.parse(window.localStorage.getItem(key))
        }
        return array;
    })
    const [staff, setStaff] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // setStaffs([
        //     ...staffs,
        //     staff
        // ]);
        // window.localStorage.setItem(key, JSON.stringify(staffs));

        setStaffs(() => {
            let newStaffs = [...staffs, staff];
            window.localStorage.setItem(key, JSON.stringify(newStaffs));
            return newStaffs;
        })
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
                                    return <li key={index}>
                                        <div>
                                            <Link to={`staff-detail/${item}/${index}`}>{item}</Link>
                                            <span span title="remove staff" onClick={() => removeStaff(index)}>&times;</span>
                                        </div>
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