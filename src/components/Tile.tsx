import { TileProps } from "@/types";

export function Tile(tileProps: TileProps) {
  let { onClick, className, children } = tileProps;

  return (
    <td
      className={"td"}
      onClick={onClick}
    >
      <div className="tile-container">
        <div className={className}>{children === "_" ? " ": children}</div>
      </div>
    </td>
  );
}
