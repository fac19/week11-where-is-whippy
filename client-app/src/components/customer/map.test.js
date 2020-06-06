import React from "react";
import MapForCustomer from "./map";
import renderer from "react-test-renderer";
import GoogleMapReact from "google-map-react";

test("Customer map renders to page", () => {
  const customerMapComponent = renderer.create(<GoogleMapReact />);
  const tree = customerMapComponent.toJSON();
  expect(tree).toMatchSnapshot();
});
