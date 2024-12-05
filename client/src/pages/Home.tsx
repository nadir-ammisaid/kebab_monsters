import Header from "../components/Header";
import Footer from "../components/Footer";
import Maps from "../components/Maps";
import SearchBar from "../components/SearchBar";
import BusinessCard from "../components/BusinessCard";

function Home() {
	return (
		<>
			<Header />
			<main>
				<SearchBar />
				<Maps />
				<BusinessCard />
			</main>
			<Footer />
		</>
	);
}

export default Home;
