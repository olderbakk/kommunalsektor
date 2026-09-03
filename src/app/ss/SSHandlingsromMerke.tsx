type Posisjon = "topp" | "hogre" | "botn" | "venstre";

const AKTIV = "#A65F3D";
const KVILE = "#DDD1BE";

// Handlingsrommet i miniatyr: kjernen i midten og dei fire delane rundt.
// Den delen kortet handlar om er markert og litt større enn dei andre.
export default function SSHandlingsromMerke({
  posisjon,
}: {
  posisjon: Posisjon;
}) {
  const på = (p: Posisjon) => (p === posisjon ? AKTIV : KVILE);
  const brei = (p: Posisjon) => p === posisjon;

  return (
    <svg
      viewBox="0 0 46 46"
      width="40"
      height="40"
      aria-hidden
      className="shrink-0"
    >
      <rect
        x={brei("topp") ? 14 : 18.5}
        y="1"
        width={brei("topp") ? 18 : 9}
        height="9"
        rx="2"
        fill={på("topp")}
      />
      <rect
        x="36"
        y={brei("hogre") ? 14 : 18.5}
        width="9"
        height={brei("hogre") ? 18 : 9}
        rx="2"
        fill={på("hogre")}
      />
      <rect
        x={brei("botn") ? 14 : 18.5}
        y="36"
        width={brei("botn") ? 18 : 9}
        height="9"
        rx="2"
        fill={på("botn")}
      />
      <rect
        x="1"
        y={brei("venstre") ? 14 : 18.5}
        width="9"
        height={brei("venstre") ? 18 : 9}
        rx="2"
        fill={på("venstre")}
      />
      <circle cx="23" cy="23" r="4.5" fill="#314D3C" />
    </svg>
  );
}
