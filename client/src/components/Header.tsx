import kebab from "../assets/images/kebab.webp";

function Header () {
    return (
        <section className="header">
			<Link to="/">
				<img src={kebab} id="logo" alt="Logo_kebab_maps" />
			</Link>
			{/* <div id="navbar">
        <div className="icon-container">
          <Link to="/">
            <button type="button" className="buttonHomeStar">
              <img src={Home} id="home" alt="Home_Icon" />
            </button>
          </Link>
          <span className="icon-label">Home</span>
        </div>
      </div> */}
		</section>
				);
}