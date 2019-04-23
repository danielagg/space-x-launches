import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

export default function LaunchItem({
  launch: { flight_number, mission_name, launch_date_local, launch_success }
}) {
  return (
    <div>
      <h2>{mission_name}</h2>
      <p>
        Took place at:{" "}
        <Moment format="YYYY-MM-DD, HH:MM">{launch_date_local}</Moment>
      </p>

      <p>{`Was it successful? ${launch_success}`}</p>
      <Link to={`/launch/${flight_number}`}>Launch details</Link>
    </div>
  );
}
