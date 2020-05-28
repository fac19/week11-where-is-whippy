// consider window.location object in order to assign domain appropriately
const hostname = window && window.location && window.location.hostname;
const domain =
  hostname === "localhost"
    ? "http://localhost:8080"
    : "https://where-is-whippy.herokuapp.com/customers/coords";

const getRequest = () => {
  return (
    fetch("http://localhost:8080/customers/coords")
      // http://localhost:8080/customers/coords
      // localhosthttp://localhost:8080
      .then((res) => res.json())
      .then((jsonObj) => {
        jsonObj.map((coords) => {
          console.log(coords.latitude, coords.longitude);
        });
      })
      .catch((err) => console.log(err))
  );
};

export default getRequest;
