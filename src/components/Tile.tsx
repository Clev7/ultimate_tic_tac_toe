import styles from "@/app/tile.module.css";
import { ReactNode } from "react";
import { borderObj } from "@/types";

export function Tile({ borders, children, playerState}: borderObj) {

	return (
		<td className={styles.td + " " + borders}>
			<div>
			</div>
		</td>
	)
}