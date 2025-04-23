import React from "react";
import CardGrid from "../components/CardGrid";

const arbitres = [
  { name: "Clément Turpin", image: "/images/turpin.jpg" },
  { name: "Stéphanie Frappart", image: "/images/frappart.jpg" },
];

export default function Arbitres() {
  return <CardGrid title="Arbitres" items={arbitres} />;
}