export default function Details() {
	return (
		<>
			<p>Details</p>
		</>
		// <section className="show-details">
		// 	<section className="show-card">
		// 		<img
		// 			src={show.image.original}
		// 			alt={show.name}
		// 			className="show-poster"
		// 		/>
		// 		<div className="show-info">
		// 			<div id="title-favorite">
		// 				<h1>{show.name}</h1>
		// 			</div>
		// 			<p>
		// 				<strong>Release date :</strong>{" "}
		// 				{new Date(show.premiered).getFullYear()}
		// 			</p>
		// 			<p>
		// 				<strong>Country :</strong> {show.network?.country.name}
		// 			</p>
		// 			<p>
		// 				<strong>Genres :</strong> {show.genres.join(", ")}
		// 			</p>

		// 			<p id="summary">
		// 				<MovieSummary summary={show.summary} />
		// 			</p>
		// 		</div>
		// 	</section>
		// 	<section id="back-button-section">
		// 		<Link to="/" style={{ textDecoration: "none" }}>
		// 			<button type="button">
		// 				<img src={LeftArrow} alt="Retour en arrière" id="back-button" />
		// 			</button>
		// 		</Link>
		// 	</section>
		// </section>
	);
}
