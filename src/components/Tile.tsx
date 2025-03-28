import styles from "@/app/tile.module.css";
import { BoardResult, BoardState, TileProps, UtttBoard, Player} from "@/types";

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
