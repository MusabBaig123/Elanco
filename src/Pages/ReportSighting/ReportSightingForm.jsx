import React, { useState, useEffect } from "react";

function ReportSightingForm() {

  return (
    <div>
      <h1>Report a Sighting</h1>
      <form>
		<label>Date</label> <input name="date" placeholder="date" /><br/>
		<label>Time</label> <input time="time" placeholder="time" /><br/>
		<label>Location</label> <input location="location" placeholder="location" /><br/>
		<label>Species</label> <input species="species" placeholder="name" /><br/>
		<br/><br/><br/>
		<button onclick="SubForm()">Submit</button>
	  </form>
    </div>
  );
}

export default ReportSightingForm;