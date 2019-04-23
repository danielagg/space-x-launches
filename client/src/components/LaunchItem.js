import React from "react";

export default function LaunchItem({
  launch: { flight_number, mission_name, launch_date_local, launch_success }
}) {
  return (
    <div>
      <h2>{mission_name}</h2>
      <p>{`Took place at ${launch_date_local.toString()}`}</p>
      <p>{`Was it successful? ${launch_success}`}</p>
      <button>Launch details</button>
    </div>
  );
}
