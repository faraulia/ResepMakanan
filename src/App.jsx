import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

import DetailPage from "./Detail";

// ambil dari magnific/freepik — pakai w=800 bukan w=1480 biar lebih cepat
const FOOD_IMAGES = {
  cheesecake: "https://img.magnific.com/free-photo/side-view-cheesecake-with-cherry-jelly-top-white-plate_141793-2955.jpg?t=st=1779114456~exp=1779118056~hmac=f7bb0f60ffd18e61de90170a3103da28c33f07fd749161abd64ecea6848962dc&w=800",
  cupcake: "https://img.magnific.com/free-photo/chocolate-cupcake-with-white-cream-white-background_1268-31446.jpg?t=st=1779114616~exp=1779118216~hmac=f9ccd9e9709df1090d169db205fae2fd0d71c7147a4c4320474c624ed95c21cf&w=800",
  mochi: "https://img.magnific.com/premium-photo/delicious-mochi-balls-served-bowl-with-chopsticks-textured-surface-perfect-dessert-lovers_732812-10859.jpg?w=800",
};

const recipeShorts = [
  { id: "cheesecake", title: "Cheesecake", image: FOOD_IMAGES.cheesecake, desc: "Cheesecake sederhana dengan tekstur lembut, creamy, dan rasa manis yang pas." },
  { id: "cupcake", title: "Cupcake", image: FOOD_IMAGES.cupcake, desc: "Cupcake lembut dengan rasa manis ringan, cocok untuk camilan atau hidangan penutup." },
  { id: "mochi", title: "Mochi", image: FOOD_IMAGES.mochi, desc: "Mochi kenyal dengan isian manis yang lembut, cocok untuk camilan keluarga." },
];

// NAVBAR
function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <span className="navbar__logo" onClick={() => navigate("/")}>
        Dapur Resep
      </span>
    </nav>
  );
}

// FOOTER
function Footer() {
  return (
    <footer className="footer">
      ©2026 Dapur Resep
      <br />Images by <b>Magnific</b>/<b>Freepik Company</b>
    </footer>
  );
}

// LANDING PAGE
function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="landing">
      {/* Hero */}
      <div className="landing__hero">
        <h1 className="landing__title">
          Masak Jadi Lebih{" "}
          <span className="landing__title--blue">Ceria</span>{" "}
          &{" "}
          <span className="landing__title--badge">Mudah</span>
        </h1>
        <p className="landing__subtitle">
          Dapur Resep membantu kamu menemukan inspirasi dessert rumahan yang sederhana, manis, dan cocok untuk dibuat kapan saja.
        </p>
        <p className="landing__section-label">RESEP PILIHAN</p>
        <p className="landing__section-desc">
          Pilihan dessert sederhana<br />untuk dicoba di rumah.
        </p>
      </div>

      {/* Recipe Cards */}
      <div className="landing__grid">
        {recipeShorts.map((r) => (
          <div key={r.id} className="recipe-card">
            <div className="recipe-card__image-wrap">
              <img src={r.image} alt={r.title} className="recipe-card__image" loading="lazy" width="400" height="200" decoding="async" />
            </div>
            <div className="recipe-card__body">
              <h3 className="recipe-card__title">{r.title}</h3>
              <p className="recipe-card__desc">{r.desc}</p>
              <button
                className="recipe-card__btn"
                onClick={() => navigate(`/detail/${r.id}`)}
              >
                Lihat Resep
              </button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

// APP
function AppLayout() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
