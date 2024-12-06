import { createContext, useState } from "react";
import type { ReactNode, Dispatch, SetStateAction } from "react";
import data from "../data.json";

// Définir le type pour un Kebab
export interface Kebab {
	id: string;
	name: string;
	location: {
		address1: string;
		city: string;
	};
	rating: number;
	image_url: string;
	coordinates: {
		longitude: number;
		latitude: number;
	};
}
// Définir le type pour le tableau des Kebabs et le SearchText
export interface KebabContextType {
	kebabs: { businesses: Kebab[] };
	setKebabs: Dispatch<SetStateAction<{ businesses: Kebab[] }>>;
	searchText: string;
	setSearchText: Dispatch<SetStateAction<string>>;
	filteredKebabs: { businesses: Kebab[] };
}

// le contexte avec une valeur initiale nulle
const KebabContext = createContext<KebabContextType | null>(null);

export const KebabProvider = ({ children }: { children: ReactNode }) => {
	const [kebabs, setKebabs] = useState(data); //*+*+*+*+*+*en dur pour tester en dehors de l'API
	const [searchText, setSearchText] = useState(""); // Nouveau state pour le texte de recherche

	const filteredKebabs = kebabs.businesses?.filter((business) =>
		business.location.city.toLowerCase().includes(searchText.toLowerCase()),
	);

	// *+*+*+**+ à remettre après avoir récupéré l'accès à l'API, sans oublier d'importer useEffect

	// const [kebabs, setKebabs] = useState<Kebab[]>([]);

	// useEffect(() => {
	// 	const urls = [
	// 		"https://thingproxy.freeboard.io/fetch/https://api.yelp.com/v3/businesses/search?location=France&term=kebab&limit=50",
	// 		"https://thingproxy.freeboard.io/fetch/https://api.yelp.com/v3/businesses/search?location=France&term=kebab&limit=50&offset=51",
	// 		"https://thingproxy.freeboard.io/fetch/https://api.yelp.com/v3/businesses/search?location=France&term=kebab&limit=50&offset=101",
	// 		"https://thingproxy.freeboard.io/fetch/https://api.yelp.com/v3/businesses/search?location=France&term=kebab&limit=50&offset=151",
	// 		"https://thingproxy.freeboard.io/fetch/https://api.yelp.com/v3/businesses/search?location=France&term=kebab&limit=50&offset=201",
	// 		"https://thingproxy.freeboard.io/fetch/https://api.yelp.com/v3/businesses/search?location=France&term=kebab&limit=50&offset=251",
	// 		"https://thingproxy.freeboard.io/fetch/https://api.yelp.com/v3/businesses/search?location=Turkey&term=kebab&limit=50",
	// 	];

	// 	const fetchKebabs = async () => {
	// 		try {
	// 			const fetchPromises = urls.map((url) =>
	// 				fetch(url, {
	// 					method: "GET",
	// 					headers: {
	// 						accept: "application/json",
	// 						Authorization:
	// 							"Bearer g6R6o34PjuzRjebzCH0bdCQERTnt8KNwZiTd00s_ZRsNHgAYUUiPdNtLBF0RE8QVLb3FQlBch18SDRSbUj10ilMmsyvRtU9UgmtMqG-Rbf2nLqEHvHFDPr-154tRZ3Yx",
	// 					},
	// 				}),
	// 			);

	// 			const responses = await Promise.all(fetchPromises);
	// 			const data = await Promise.all(responses.map((res) => res.json()));

	// 			// Fusionner toutes les données reçues
	// 			const allKebabs = data.flatMap((item) => item.businesses);

	// 			setKebabs(allKebabs);
	// 			console.log("Kebabs chargés :", allKebabs);
	// 		} catch (error) {
	// 			console.error("Erreur lors de la récupération des données :", error);
	// 		}
	// 	};

	// 	fetchKebabs();
	// }, []);

	return (
		<KebabContext.Provider
			value={{ kebabs, setKebabs, searchText, setSearchText, filteredKebabs }}
		>
			{children}
		</KebabContext.Provider>
	);
};
export default KebabContext;

// export const useKebab = () => {
// 	const value = useContext(KebabContext);

// 	if (value === null) {
// 		throw new Error("useKebab has to be used within <FavoriteProvider>");
// 	}

// 	return value;
// };

// g3ZUORBgVunAuNGi5-1w-p3bc5lO6O_wgn_igSGxKqq7RWkAVwnbb44Kl2_GkIvlE1PBLNY6je9B_8GsSG_qQKKxP8xAfPGvl7SmFeq7qWRMW2f-5LPBCtEZto9RZ3Yx
