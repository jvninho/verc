import React from "react";
import CardGrid from "../components/CardGrid";

const buteurs = [
  { name: "Kylian Mbappé", image: "/images/mbappe.jpg" },
  { name: "Alexandre Lacazette", image: "/images/lacazette.jpg" },
];

export default function Buteurs() {
  return <CardGrid title="Buteurs" items={buteurs} />;
}