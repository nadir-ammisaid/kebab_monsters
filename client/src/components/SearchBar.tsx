import { useContext } from "react";
import KebabContext from "../contexts/KebabContext";
import type { KebabContextType } from "../contexts/KebabContext";
import "./SearchBar.css";

function SearchBar() {
	/////ajouter le useContext
	// Utilisation du contexte pour obtenir searchText et setSearchText
	const { searchText, setSearchText } = useContext(
		KebabContext,
	) as KebabContextType;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchText(e.target.value); // Met à jour l'état du texte de recherche
	};

	return (
		<div className="searchBar">
			<input
				type="text"
				placeholder="Search a Kebab"
				value={searchText} // L'input est contrôlé par searchText du contexte
				onChange={handleChange} // Appel de handleChange pour mettre à jour l'état
			/>
		</div>
	);
}

export default SearchBar;
