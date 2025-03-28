import styles from "@/app/tile.module.css";
import { TileProps } from "@/types";

export function Tile(tileProps: TileProps) {
  let {onClick, className, children} = tileProps;

  return (
    <td
      className={styles.td + " " + className}
      onClick={onClick}
    >
      <div>{children}</div>
    </td>
  );
}
