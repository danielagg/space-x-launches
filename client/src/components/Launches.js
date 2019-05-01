import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import LaunchItem from "./LaunchItem";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

export class Launches extends Component {
  render() {
    return (
      <>
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading)
              return (
                <h5 className="text-center font-weight-light">
                  Loading launches...
                </h5>
              );
            if (error) console.log(error);

            return (
              <>
                <div className="row">
                  {data.launches.map(launch => (
                    <LaunchItem key={launch.flight_number} launch={launch} />
                  ))}
                </div>
              </>
            );
          }}
        </Query>
      </>
    );
  }
}

export default Launches;
