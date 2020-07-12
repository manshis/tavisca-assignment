const metadata = {
  departure: [{ id: 2, value: "delhi", text: "DELHI (DEL)" }],
  destination: [{ id: 1, value: "pune", text: "Pune (PNQ)" }],
  classType: [
    { id: 1, value: "economy", text: "Economy" },
    { id: 2, value: "buisness", text: "Buisness" }
  ],
  travellers: [
    { id: 1, value: 1, text: 1 },
    { id: 2, value: 2, text: 2 },
    { id: 3, value: 3, text: 3 },
    { id: 4, value: 4, text: 4 }
  ]
};

const flights = [
  {
    id: 1,
    airlines: "Euthopian Airlines",
    departureTime: "02:30 am",
    arivalTime: "04:50 pm",
    departure: "DEL",
    arival: "PNQ",
    stop: "1 Stop (ADD)",
    journey: "14h 20m",
    price: [
      { amount: "$125", classType: "Basic Economy" },
      { amount: "$212", classType: "Main Cabin" }
    ]
  },
  {
    id: 2,
    airlines: "British Airways",
    departureTime: "03:00 am",
    arivalTime: "09:50 pm",
    departure: "DEL",
    arival: "PNQ",
    stop: "1 Stop (ADD)",
    journey: "6h 50m",
    price: [
      { amount: "$140", classType: "Basic Economy" },
      { amount: "$220", classType: "Main Cabin" }
    ]
  }
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  metadata,
  flights
};
