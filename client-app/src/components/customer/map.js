//Map page for customer - having logged in would like to see nearby vendors and signal interest.
import React from "react";
import LondonMap from "../../utils/london-map.js";

export default function CustomerMap() {
  function signalInterest(e) {
    e.preventDefault;
    //API post request to customer location table INSERT INTO customer_location
  }

  return (
    <section>
      <LondonMap />
      <button onClick={signalInterest}>
        Let Vendors Know You Would Like Some Ice Cream
      </button>
    </section>
  );
}
