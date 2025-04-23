import React from "react";
import CardGrid from "../components/CardGrid";

const passeurs = [
  { name: "Jonathan Clauss", image: "/images/clauss.jpg" },
  { name: "Lionel Messi", image: "/images/messi.jpg" },
];

export default function Passeurs() {
  return <CardGrid title="Passeurs" items={passeurs} />;
}