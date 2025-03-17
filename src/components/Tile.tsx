import styles from "@/app/tile.module.css";
import { ITile } from "@/types";

export function Tile({ borders, children, currentPlayer, setCurrentPlayer }: ITile) {
	return (
		<td className={styles.td + " " + borders} onClick={(event) => {
			console.log("Clicked!");
			setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
		}}>
			<div>
			</div>
		</td>
	)
}