import React, { useState } from "react";

export default function Timetable() {
  //Editing: fetch API - SELECT * FROM routes WHERE route_name == /whatever route name chosen
  // fill in form with data
  function generateNewRow(event) {
    event.preventDefault();
    const newRows = document.querySelector(".timetable-newRows");
    return (
      <section className="timetable-new-entry">
        <label for="from" className="timetable-route__from">
          From
        </label>
        <input
          type="text"
          id="from-input__0"
          name="from"
          className="timetable-route__from"
        />

        <label for="to" className="timetable-route__to">
          To
        </label>
        <input
          type="text"
          id="to-input__0"
          name="to"
          className="timetable-route__to"
        />

        <label for="from" className="timetable-route__address">
          Address
        </label>
        <input
          type="text"
          id="address-input__0"
          name="address"
          className="timetable-route__address"
        />
      </section>
    );
  }

  return (
    <section>
      <form>
        <label for="from" className="timetable-route__from">
          From
        </label>
        <input
          type="text"
          id="from-input__0"
          name="from"
          className="timetable-route__from"
        />

        <label for="to" className="timetable-route__to">
          To
        </label>
        <input
          type="text"
          id="to-input__0"
          name="to"
          className="timetable-route__to"
        />

        <label for="from" className="timetable-route__address">
          Address
        </label>
        <input
          type="text"
          id="address-input__0"
          name="address"
          className="timetable-route__address"
        />

        <label for="from" className="timetable-route__from">
          From
        </label>
        <input
          type="text"
          id="from-input__1"
          name="from"
          className="timetable-route__from"
        />

        <label for="to" className="timetable-route__to">
          To
        </label>
        <input
          type="text"
          id="to-input__1"
          name="to"
          className="timetable-route__to"
        />

        <label for="from" className="timetable-route__address">
          Address
        </label>
        <input
          type="text"
          id="address-input__1"
          name="address"
          className="timetable-route__address"
        />
        <section className="timetable-newRows"></section>

        <button onClick={generateNewRow}>Add another row</button>

        <button className="timetable-submit">Submit</button>
      </form>
    </section>
  );
}

// function TimetableStates() {
//     const [rows, setRows] = React.useState(2)

//     //function updateState() {setRows = rows + 1}
//     //html

//     return(
//         //html * rows.

//         //<button onClick={updateState}
//     )
// }
