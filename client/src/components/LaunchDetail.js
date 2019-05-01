import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

export class LaunchDetail extends Component {
  render() {
    let { flight_number } = this.props.match.params;
    flight_number = parseInt(flight_number);
    return (
      <>
        <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
          {({ loading, error, data }) => {
            if (loading)
              return (
                <h5 className="font-weight-light text-center">
                  Fetching launch details...
                </h5>
              );
            if (error) console.log(error);

            const {
              mission_name,
              launch_date_local,
              launch_success,
              rocket: { rocket_id, rocket_name, rocket_type }
            } = data.launch;

            return (
              <div className="container text-center">
                <Link to="/">&larr; Go Back</Link>

                <h1 className="display-5" style={{ marginTop: "1.5em" }}>
                  {mission_name}
                </h1>

                <p>
                  This was a launch on{" "}
                  <span>
                    {" "}
                    <Moment
                      format="YYYY-MM-DD, HH:mm. "
                      date={launch_date_local}
                    />
                  </span>
                  {`The launch  ${
                    launch_success ? "was successful" : "failed"
                  }.`}
                </p>

                <h2 className="display-7" style={{ marginTop: "1.5em" }}>
                  Used rocket: {rocket_name}
                </h2>

                <ul className="list-group list-group-flush mt-3">
                  <li className="list-group-item">ID: {rocket_id}</li>
                  <li className="list-group-item">Type: {rocket_type}</li>
                </ul>
              </div>
            );
          }}
        </Query>
      </>
    );
  }
}

export default LaunchDetail;
