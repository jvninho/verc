import React from "react";
import CardGrid from "../components/CardGrid";

const clubs = [
  { name: "Paris Saint-Germain", image: "/images/psg.png" },
  { name: "OM", image: "/images/om.png" },
  { name: "Lyon", image: "/images/lyon.png" },
];

export default function Clubs() {
  return <CardGrid title="Clubs" items={clubs} />;
}