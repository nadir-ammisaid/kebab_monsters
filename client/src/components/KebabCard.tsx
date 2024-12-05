import { useKebab } from "../contexts/KebabContext";

function KebabCard() {
	const { kebabs } = useKebab();

	return (
		<>
			{/* <section className="card">
				{kebabs.map((show) => (
					<figure key={show.id} className="item">
						<div className="centerImage">
							<img
								className="imageShow"
								src={show.image_url}
								alt={show.name}
								onClick={() => cardClick(show.id)}
								onKeyDown={() => cardClick(show.id)}
							/>
						</div>
						<section className="titleButton">
							<h2
								onClick={() => cardClick(show.id)}
								onKeyDown={() => cardClick(show.id)}
								className="titleShow"
							>
								{show.name}
							</h2>
						</section>
					</figure>
				))}
			</section> */}
		</>
	);
}

export default KebabCard;
