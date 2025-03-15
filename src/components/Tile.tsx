import styles from "@/app/tile.module.css";

interface borderObj {
	borders: string
}

export function Tile({ borders }: borderObj) {
	return (
		<td className={styles.td + " " + borders}>
			<div>
				&nbsp;
			</div>
		</td>
	)
}