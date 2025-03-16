import styles from "@/app/tile.module.css";
import { TileWrapper } from "@/types";

export function Tile({ borders, children, playerState }: TileWrapper) {

	return (
		<td className={styles.td + " " + borders}>
			<div>
			</div>
		</td>
	)
}