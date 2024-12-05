import { useContext } from "react";
import KebabContext from "../contexts/KebabContext";
import type { KebabContextType } from "../contexts/KebabContext";
import "./SearchBar.css";

function SearchBar() {
	/////ajouter le useContext
	const context = useContext(KebabContext) as KebabContextType;

	const { kebabs, setKebabs } = context;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const searchText = e.target.value.toLowerCase();

		////// Filtrer les kebabs par nom
		const filteredKebabs = kebabs.filter((kebab) =>
			kebab.name.toLowerCase().includes(searchText),
		);

		setKebabs(filteredKebabs);
	};

	return (
		<div className="searchBar">
			<input type="text" placeholder="Search a kebab" onChange={handleChange} />
		</div>
	);
}

export default SearchBar;
