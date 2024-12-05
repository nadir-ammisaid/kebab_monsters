import Header from "../components/Header";
import Footer from "../components/Footer";
import Maps from "../components/Maps";
import SearchBar from "../components/SearchBar";
import DetailCard from "../components/DetailCard";

function Home() {
	return (
		<>
			<Header />
			<main>
				<SearchBar />
				<Maps />
				<DetailCard />
			</main>
			<Footer />
		</>
	);
}

export default Home;
