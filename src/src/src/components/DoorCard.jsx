export default function DoorCard({ door, onChoose }) {
  return (
    <button onClick={() => onChoose(door)}
      className="bv-card text-left w-full hover:scale-[1.01] transition"
      aria-label={`Alege ${door.title}`}>
      <div className="h-44 w-full bg-bv_green/15">
        <
