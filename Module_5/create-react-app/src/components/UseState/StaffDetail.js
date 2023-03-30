import React from "react";
import { useParams } from "react-router-dom";

function StaffDetail() {
    const { name, position } = useParams();
    // const [name, position] = name_position.split("_");
    return (
        <div>
            Staff Detail - {name}---- {position}
        </div>
    )
}

export default StaffDetail;