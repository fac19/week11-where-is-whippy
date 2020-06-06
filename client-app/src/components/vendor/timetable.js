import React, { useState } from "react";
import { VendorButton, PageContainer } from "../../styles/buttons";
import { Label, Input, FormContainer } from "../../styles/form";

export default function Timetable() {
  //Editing: fetch API - SELECT * FROM routes WHERE route_name == /whatever route name chosen
  // fill in form with data
  function generateNewRow(event) {
    event.preventDefault();
    // const newRows = document.querySelector(".timetable-newRows");
    return (
      <section className="timetable-new-entry">
        <Label for="from">From</Label>
        <Input type="text" id="from-input__0" name="from" />

        <Label for="to">To</Label>
        <Input type="text" id="to-input__0" name="to" />

        <Label for="from">Address</Label>
        <Input type="text" id="address-input__0" name="address" />
      </section>
    );
  }

  return (
    <section>
      <FormContainer>
        <Label for="from">From</Label>
        <Input type="text" id="from-input__0" name="from" />

        <Label for="to">To</Label>
        <Input type="text" id="to-input__0" name="to" />

        <Label for="from">Address</Label>
        <Input type="text" id="address-input__0" name="address" />

        <Label for="from">From</Label>
        <Input type="text" id="from-input__1" name="from" />

        <Label for="to">To</Label>
        <Input type="text" id="to-input__1" name="to" />

        <Label for="from">Address</Label>
        <Input type="text" id="address-input__1" name="address" />
        <section className="timetable-newRows"></section>

        <button onClick={generateNewRow}>Add another row</button>

        <VendorButton>Submit</VendorButton>
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
