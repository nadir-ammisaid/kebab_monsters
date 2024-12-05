import Header from "../components/Header";
import Footer from "../components/Footer";
import KebabCard from "../components/KebabCard"
import Maps from "../components/map";

function Home() {
	return (
		<>
			<Header />
            <KebabCard />
			<main>
				<Maps />
			</main>
			<Footer />
		</>
	);
}

export default Home;
