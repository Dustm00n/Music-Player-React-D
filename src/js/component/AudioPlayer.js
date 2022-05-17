import React from "react";
import "../../styles/AudioPlayer.module.css";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

const AudioPlayer = () => {
	return (
		<div className={styles.AudioPlayer}>
			<button> {BsArrowLeftCircle} </button>
			<button> {FaPlay} </button>
			<button>{BsArrowRightCircle} 30</button>

			{/* Tiempo Actual */}
			<div>0:00</div>
			{/* barra de progreso*/}
			<div>
				<input type="range" />
			</div>

			{/* Duracíon */}
			<div>2:49</div>
		</div>
	);
};

export { AudioPlayer };
