import Maps from "../components/Maps";
import SearchBar from "../components/SearchBar";
import BusinessCard from "../components/BusinessCard";

function Home() {
	return (
		<>
			<main>
				<SearchBar />
				<Maps />
				<BusinessCard />
			</main>
		</>
	);
}

export default Home;
