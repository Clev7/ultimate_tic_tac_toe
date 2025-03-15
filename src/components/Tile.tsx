import styles from "@/app/tile.module.css";

interface borderObj {
	borders: string,
	children: string
}

export function Tile({ borders, children}: borderObj) {

	return (
		<td className={styles.td + " " + borders}>
			<div>
				{children}
			</div>
		</td>
	)
}