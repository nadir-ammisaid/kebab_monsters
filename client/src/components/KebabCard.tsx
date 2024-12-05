function KebabCard() {

	return (
		// <section className="card">
		// 	{shows
		// 		.filter(
		// 			(toto) => toto.name.toLowerCase().includes(searchTerm.toLowerCase()), // permet de rechercher parmis les films
		// 		)
		// 		.map(
		// 			(
		// 				show
		// 			) => (
		// 				<figure key={show.id} className="item">
		// 					<div className="centerImage">
		// 						<img
		// 							className="imageShow"
		// 							src={show.image.original}
		// 							alt={show.name}
		// 							onClick={() => cardClick(show.id)}
		// 							onKeyDown={() => cardClick(show.id)}
		// 						/>
		// 					</div>
		// 					<section className="titleButton">
		// 						<h2
		// 							onClick={() => cardClick(show.id)}
		// 							onKeyDown={() => cardClick(show.id)}
		// 							className="titleShow"
		// 						>
		// 							{show.name}
		// 						</h2>
		// 						<Star // composant bouton favori pour ajouter une série à la liste de favori
		// 							toggleLike={toggleLike}
		// 							favorites={favorites}
		// 							showID={show.id}
		// 						/>
		// 					</section>
		// 				</figure>
		// 			),
		// 		)}
		// </section>
	);
}
