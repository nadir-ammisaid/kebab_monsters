// import { useState, useEffect } from "react";

// function KebabRestaurants() {
// 	const [restaurants, setRestaurants] = useState([]);
// 	const [loading, setLoading] = useState(true);
// 	const [error, setError] = useState(null);

// 	useEffect(() => {
// 		const url =
// 			"https://thingproxy.freeboard.io/fetch/https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=20";
// 		const options = {
// 			method: "GET",
// 			headers: {
// 				accept: "application/json",
// 				Authorization:
// 					"D7ELlMiJRap5IqL-nG-wisFEzOaQCr0ygXVnXMTAch8gAhiCJKShcPMDJ7NzTC-mIvVmVekj8n7uNguRv8N_vqRn1SYy-a1-npjTtS8p-IcEFA4USYoBnVZ0-IVRZ3Yx",
// 			},
// 		};

// 		fetch(url, options)
// 			.then((res) => res.json())
// 			.then((json) => {
// 				console.log(json); // Vérifier la structure des données
// 				if (json.businesses) {
// 					setRestaurants(json.businesses); // S'assurer que 'businesses' existe
// 				} else {
// 					setRestaurants([]); // Si pas de données, initialiser comme un tableau vide
// 				}
// 				setLoading(false);
// 			})
// 			.catch((err) => {
// 				setError(err.message);
// 				setLoading(false);
// 			});
// 	}, []); // Dépendances vides, donc ce code s'exécute une seule fois lors du premier rendu

// 	if (loading) {
// 		return <div>Loading...</div>;
// 	}

// 	if (error) {
// 		return <div>Error: {error}</div>;
// 	}

// 	return (
// 		<div>
// 			<h1>Kebab Restaurants</h1>
// 			<ul>
// 				{/* Vérifier si restaurants est bien un tableau avant d'utiliser .map */}
// 				{Array.isArray(restaurants) && restaurants.length > 0 ? (
// 					restaurants.map((restaurant) => (
// 						<li key={restaurant.id}>
// 							<h3>{restaurant.name}</h3>
// 							<p>{restaurant.location.address1}</p>
// 						</li>
// 					))
// 				) : (
// 					<p>No restaurants found.</p> // Si aucun restaurant trouvé
// 				)}
// 			</ul>
// 		</div>
// 	);
// }

// export default KebabRestaurants;
