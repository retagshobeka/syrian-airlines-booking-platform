async function searchFlights() {

  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  const response = await fetch("http://localhost:5000/api/flights");

  const data = await response.json();

  const resultsDiv = document.getElementById("results");

  resultsDiv.innerHTML = "";

  data.forEach(flight => {
    const p = document.createElement("p");
    p.innerText = flight.airline + " - " + flight.from + " → " + flight.to;
    resultsDiv.appendChild(p);
  });

}
