import * as XLSX from "xlsx";
import { locationToCoordinates} from "./Coordinates";

export async function loadSightings() {
  const res = await fetch("/tick_sightings.xlsx");
  const buffer = await res.arrayBuffer();
  const workbook = XLSX.read(buffer, { type: "array" });

  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(sheet);

  // Add fake coordinates so markers appear on the map
  return rows.map(row => ({
    id: row["ID"],
    date: row["Date"],
    location: row["Location"],
    species: row["Species"],
    latinName: row["Latin Name"],
    coordinates: locationToCoordinates(row["Location"])
  }));
}
