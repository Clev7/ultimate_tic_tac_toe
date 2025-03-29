import { TileProps } from "@/types";

export function Tile(tileProps: TileProps) {
  let {onClick, className, children} = tileProps;

  return (
    <td
      className={"td " + className}
      onClick={onClick}
    >
      <div>{children === "_" ? " ": children}</div>
    </td>
  );
}
