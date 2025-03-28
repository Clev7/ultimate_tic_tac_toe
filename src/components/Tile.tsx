import styles from "@/app/tile.module.css";
import { BoardPosition, BoardResult, BoardState, TileProps, UtttBoard, Player} from "@/types";

export function Tile(tileProps: TileProps) {
  // let {borders, children, utttBoard, currentPlayer} = tileProps;

  // if (checkWin(utttBoard, currentPlayer))

  return (
    <td
      className={styles.td + " " + borders}
      onClick={() => handleClick(tileProps)}
    >
      <div>{children}</div>
    </td>
  );
}



