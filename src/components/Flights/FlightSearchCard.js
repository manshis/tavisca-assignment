import React from "react";
import "./FlightSearchCard.css";

function FlightSearchCard({ serachedFlight }) {
  return (
    <div className="flight-card">
      <div className="flight-header">{serachedFlight.airlines}</div>
      <div className="flight-details">
        <div>
          {" "}
          <div>{serachedFlight.departure}</div>
          <div>{serachedFlight.departureTime}</div>
        </div>
        <div>
          <div>{serachedFlight.journey}</div>
          <div>-></div>
          <div>{serachedFlight.stop}</div>
        </div>
        <div>
          <div>{serachedFlight.arival}</div>
          <div>{serachedFlight.arivalTime}</div>
        </div>
      </div>
      <div className="flight-cost">
        {serachedFlight.price &&
          serachedFlight.price.map(p => {
            return (
              <div key={p.amount} className="flight-cost-details">
                <div>{p.amount}</div>
                <div>{p.classType}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default FlightSearchCard;
