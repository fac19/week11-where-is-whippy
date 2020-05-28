import React, { useState } from "react";
import { PinkButton, PageContainer } from "../../styles/buttons";
import { Label, Input, FormContainer } from "../../styles/form";

export default function Timetable() {
  //Editing: fetch API - SELECT * FROM routes WHERE route_name == /whatever route name chosen
  // fill in form with data
  function generateNewRow(event) {
    event.preventDefault();
    // const newRows = document.querySelector(".timetable-newRows");
    return (
      <section className="timetable-new-entry">
        <Label for="from" className="timetable-route__from">
          From
        </Label>
        <Input
          type="text"
          id="from-input__0"
          name="from"
          className="timetable-route__from"
        />

        <Label for="to" className="timetable-route__to">
          To
        </Label>
        <Input
          type="text"
          id="to-input__0"
          name="to"
          className="timetable-route__to"
        />

        <Label for="from" className="timetable-route__address">
          Address
        </Label>
        <Input
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
      <FormContainer>
        <Label for="from" className="timetable-route__from">
          From
        </Label>
        <Input
          type="text"
          id="from-input__0"
          name="from"
          className="timetable-route__from"
        />

        <Label for="to" className="timetable-route__to">
          To
        </Label>
        <Input
          type="text"
          id="to-input__0"
          name="to"
          className="timetable-route__to"
        />

        <Label for="from" className="timetable-route__address">
          Address
        </Label>
        <Input
          type="text"
          id="address-input__0"
          name="address"
          className="timetable-route__address"
        />

        <Label for="from" className="timetable-route__from">
          From
        </Label>
        <Input
          type="text"
          id="from-input__1"
          name="from"
          className="timetable-route__from"
        />

        <Label for="to" className="timetable-route__to">
          To
        </Label>
        <Input
          type="text"
          id="to-input__1"
          name="to"
          className="timetable-route__to"
        />

        <Label for="from" className="timetable-route__address">
          Address
        </Label>
        <Input
          type="text"
          id="address-input__1"
          name="address"
          className="timetable-route__address"
        />
        <section className="timetable-newRows"></section>

        <button onClick={generateNewRow}>Add another row</button>

        <PinkButton className="timetable-submit">Submit</PinkButton>
      </FormContainer>
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
