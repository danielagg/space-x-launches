import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

export default function LaunchItem({
  launch: { flight_number, mission_name, launch_date_local, launch_success }
}) {
  return (
    <div className="col-md-6" style={{ marginBottom: "1em" }}>
      <div className="card mb-6 p-10 m-10">
        <div className="card-body">
          <h2>{mission_name}</h2>
          <p>
            Took place at:{" "}
            <span>
              <Moment format="YYYY-MM-DD, HH:mm." date={launch_date_local} />
            </span>
          </p>

          <p>{`Was it successful? ${launch_success ? "Yes" : "No"}.`}</p>
          <Link to={`/launch/${flight_number}`}>Launch details &rarr;</Link>
        </div>
      </div>
    </div>
  );
}
