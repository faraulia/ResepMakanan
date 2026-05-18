import { useState } from "react";
import "./App.css";

const FOOD_IMAGES = {
  cheesecake: "https://img.magnific.com/free-photo/side-view-cheesecake-with-cherry-jelly-top-white-plate_141793-2955.jpg?t=st=1779114456~exp=1779118056~hmac=f7bb0f60ffd18e61de90170a3103da28c33f07fd749161abd64ecea6848962dc&w=1480",
  cupcake: "https://img.magnific.com/free-photo/chocolate-cupcake-with-white-cream-white-background_1268-31446.jpg?t=st=1779114616~exp=1779118216~hmac=f9ccd9e9709df1090d169db205fae2fd0d71c7147a4c4320474c624ed95c21cf&w=1480",
  mochi: "https://img.magnific.com/premium-photo/delicious-mochi-balls-served-bowl-with-chopsticks-textured-surface-perfect-dessert-lovers_732812-10859.jpg?w=1480",
};

const recipes = [
  {
    id: "cheesecake",
    title: "Cheesecake Klasik",
    image: FOOD_IMAGES.cheesecake,
    categories: ["Hidangan Utama", "Tradisional"],
    description:
      "Cheesecake lembut dengan rasa creamy, manis ringan, dan tekstur padat halus yang memanjakan lidah.",
    time: "55 Menit",
    serving: "6 Porsi",
    difficulty: "Mudah",
    ingredients: [
      "200 gram biskuit marie atau digestive biscuit",
      "80 gram mentega cair",
      "400 gram cream cheese",
      "120 gram gula pasir",
      "2 butir telur",
      "150 ml heavy cream atau whipping cream",
      "1 sdm air lemon",
      "1 sdt vanilla extract",
      "1 sdm tepung maizena",
    ],
    steps: [
      { title: "Siapkan Base", desc: "Hancurkan biskuit hingga halus, lalu campurkan dengan mentega cair hingga merata." },
      { title: "Cetak Base", desc: "Tekan campuran biskuit ke dasar loyang hingga padat sebagai base cheesecake." },
      { title: "Kocok Bahan", desc: "Kocok cream cheese dan gula sampai lembut dan creamy menggunakan mixer." },
      { title: "Tambahkan Telur", desc: "Masukkan telur satu per satu sambil diaduk perlahan agar adonan tetap lembut." },
      { title: "Campurkan Sisa Bahan", desc: "Tambahkan heavy cream, air lemon, vanilla extract, dan tepung maizena. Aduk rata." },
      { title: "Panggang", desc: "Tuang adonan ke atas base biskuit. Panggang suhu 160°C selama 45–55 menit hingga pinggir set dan tengah sedikit lembut." },
      { title: "Dinginkan", desc: "Dinginkan pada suhu ruang, lalu simpan di kulkas minimal 4 jam sebelum disajikan." },
    ],
    tips: "Gunakan cream cheese suhu ruangan agar lebih mudah dikocok dan hasilnya lebih lembut!",
  },
  {
    id: "cupcake",
    title: "Cupcake Cokelat",
    image: FOOD_IMAGES.cupcake,
    categories: ["Kue", "Dessert"],
    description:
      "Cupcake cokelat lembab dengan frosting krim yang kaya rasa, pas untuk segala suasana perayaan.",
    time: "35 Menit",
    serving: "12 Porsi",
    difficulty: "Mudah",
    ingredients: [
      "150 gram tepung terigu",
      "30 gram cokelat bubuk",
      "150 gram gula pasir",
      "2 butir telur",
      "100 ml susu cair",
      "80 ml minyak sayur",
      "1 sdt baking powder",
      "1/2 sdt baking soda",
      "200 gram buttercream untuk frosting",
    ],
    steps: [
      { title: "Campur Kering", desc: "Ayak tepung, cokelat bubuk, baking powder, dan baking soda dalam wadah besar." },
      { title: "Campur Basah", desc: "Kocok telur, gula, susu, dan minyak hingga rata." },
      { title: "Gabungkan", desc: "Tuang bahan basah ke bahan kering, aduk hingga adonan halus tanpa overmix." },
      { title: "Isi Cetakan", desc: "Tuang adonan ke cetakan cupcake hingga 2/3 penuh." },
      { title: "Panggang", desc: "Panggang pada suhu 180°C selama 18–22 menit hingga matang." },
      { title: "Hias", desc: "Setelah dingin, hias dengan buttercream menggunakan piping bag sesuai selera." },
    ],
    tips: "Jangan overmix adonan agar cupcake tetap lembut dan mengembang sempurna!",
  },
  {
    id: "mochi",
    title: "Mochi Isi",
    image: FOOD_IMAGES.mochi,
    categories: ["Jajanan", "Tradisional"],
    description:
      "Mochi kenyal dengan isian kacang manis, menu cepat saji yang selalu jadi favorit keluarga.",
    time: "30 Menit",
    serving: "8 Porsi",
    difficulty: "Mudah",
    ingredients: [
      "200 gram tepung ketan",
      "50 gram gula pasir",
      "200 ml air hangat",
      "1/4 sdt garam",
      "Pewarna makanan secukupnya",
      "100 gram kacang tanah sangrai halus",
      "3 sdm gula merah sisir",
      "Tepung maizena untuk taburan",
    ],
    steps: [
      { title: "Buat Isian", desc: "Campur kacang tanah halus dengan gula merah sisir, aduk rata dan bentuk bulat kecil." },
      { title: "Buat Adonan", desc: "Campur tepung ketan, gula, garam, dan air hangat. Aduk hingga adonan tidak lengket." },
      { title: "Tambahkan Warna", desc: "Bagi adonan dan tambahkan pewarna makanan sesuai selera, uleni hingga warna merata." },
      { title: "Kukus", desc: "Kukus adonan selama 15–20 menit hingga matang dan transparan." },
      { title: "Isi", desc: "Ambil adonan, pipihkan, isi dengan kacang, lalu rapatkan dan bulatkan." },
      { title: "Sajikan", desc: "Gulingkan mochi pada tepung maizena agar tidak lengket, sajikan segera." },
    ],
    tips: "Kukus adonan hingga benar-benar matang dan transparan agar tekstur mochi kenyal sempurna!",
  },
];

const recipeShorts = [
  { id: "cheesecake", title: "Cheesecake", image: FOOD_IMAGES.cheesecake, desc: "Nasi goreng sederhana dengan bumbu rahasia dan topping melimpah." },
  { id: "cupcake", title: "Cupcake", image: FOOD_IMAGES.cupcake, desc: "Kuah kuning yang kaya rempah, pas untuk cuaca dingin." },
  { id: "mochi", title: "Mochi", image: FOOD_IMAGES.mochi, desc: "Menu cepat saji yang selalu jadi favorit keluarga." },
];

// ——— ICONS ———
const ClockIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const ForkIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2" /><line x1="7" y1="2" x2="7" y2="22" />
    <path d="M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zM16 22v-3" />
  </svg>
);
const StarIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const BasketIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 01-8 0" />
  </svg>
);
const ChefIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
  </svg>
);
const SpiceIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#b8bef0">
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
  </svg>
);

// ——— NAVBAR ———
function Navbar({ onLogoClick }) {
  return (
    <nav className="navbar">
      <span className="navbar__logo" onClick={onLogoClick}>
        Dapur Resep
      </span>
    </nav>
  );
}

// ——— FOOTER ———
function Footer() {
  return (
    <footer className="footer">
      © 2026 Dapur Resep
    </footer>
  );
}

// ——— LANDING PAGE ———
function LandingPage({ onViewRecipe }) {
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
          Dapur Resep membantu kamu memahami bahan masakan sehari-hari lewat kurasi menu yang dipersonalisasi khusus untuk mood kamu hari ini.
        </p>
        <p className="landing__section-label">RESEP PILIHAN</p>
        <p className="landing__section-desc">
          Semua yang kamu butuhkan<br />untuk memanjakan lidah
        </p>
      </div>

      {/* Recipe Cards */}
      <div className="landing__grid">
        {recipeShorts.map((r) => (
          <div key={r.id} className="recipe-card">
            <div className="recipe-card__image-wrap">
              <img src={r.image} alt={r.title} className="recipe-card__image" />
            </div>
            <div className="recipe-card__body">
              <h3 className="recipe-card__title">{r.title}</h3>
              <p className="recipe-card__desc">{r.desc}</p>
              <button
                className="recipe-card__btn"
                onClick={() => onViewRecipe(r.id)}
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

// ——— DETAIL PAGE ———
function DetailPage({ recipeId, onBack }) {
  const recipe = recipes.find(r => r.id === recipeId);
  if (!recipe) return null;

  return (
    <div className="detail">
      <div className="detail__container">

        {/* Back btn */}
        <button className="detail__back-btn" onClick={onBack}>
          ← Kembali
        </button>

        {/* Hero row */}
        <div className="detail__hero">
          {/* Image */}
          <div className="detail__image-wrap">
            <span className="detail__deco-tl">+</span>
            <div className="detail__image-box">
              <img src={recipe.image} alt={recipe.title} className="detail__image" />
            </div>
            <span className="detail__deco-br">+</span>
          </div>

          {/* Info */}
          <div>
            <div className="detail__categories">
              {recipe.categories.map(cat => (
                <span key={cat} className="detail__category-badge">{cat}</span>
              ))}
            </div>

            <h1 className="detail__title">{recipe.title}</h1>
            <p className="detail__description">{recipe.description}</p>

            {/* Stats cards */}
            <div className="detail__stats">
              {[
                { icon: <ClockIcon />, label: recipe.time },
                { icon: <ForkIcon />, label: recipe.serving },
                { icon: <StarIcon />, label: recipe.difficulty },
              ].map((stat, i) => (
                <div key={i} className="stat-card">
                  <div className="stat-card__icon">{stat.icon}</div>
                  <div className="stat-card__label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom two columns */}
        <div className="detail__bottom">
          {/* Ingredients */}
          <div className="ingredients-panel">
            <h2 className="ingredients-panel__title">
              <BasketIcon /> Bahan-Bahan
            </h2>
            <ul className="ingredients-panel__list">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="ingredients-panel__item">
                  <span className="ingredients-panel__item-icon"><SpiceIcon /></span>
                  {ing}
                </li>
              ))}
            </ul>
            <div className="ingredients-panel__tips">
              <p>Tips: {recipe.tips}</p>
            </div>
          </div>

          {/* Steps */}
          <div className="steps-panel">
            <h2 className="steps-panel__title">
              <ChefIcon /> Langkah Memasak
            </h2>
            <div className="steps-panel__list">
              {recipe.steps.map((step, i) => (
                <div key={i} className="step-item">
                  <span className="step-item__number">{i + 1}</span>
                  <div>
                    <p className="step-item__title">{step.title}</p>
                    <p className="step-item__desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// ——— APP ———
export default function App() {
  const [page, setPage] = useState("landing");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleViewRecipe = (id) => {
    setSelectedRecipe(id);
    setPage("detail");
  };

  const handleBack = () => {
    setPage("landing");
    setSelectedRecipe(null);
  };

  return (
    <div className="app-wrapper">
      <Navbar onLogoClick={handleBack} />
      {page === "landing" ? (
        <LandingPage onViewRecipe={handleViewRecipe} />
      ) : (
        <DetailPage recipeId={selectedRecipe} onBack={handleBack} />
      )}
    </div>
  );
}
