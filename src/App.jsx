import { useState } from "react";
import "./App.css";

// react icons
import { FiClock, FiUsers, FiHeart, FiShoppingBag } from "react-icons/fi";
import { GiChefToque } from "react-icons/gi";
import { RiSparklingFill } from "react-icons/ri";

// ambil dari magnific/freepik
const FOOD_IMAGES = {
  cheesecake: "https://img.magnific.com/free-photo/side-view-cheesecake-with-cherry-jelly-top-white-plate_141793-2955.jpg?t=st=1779114456~exp=1779118056~hmac=f7bb0f60ffd18e61de90170a3103da28c33f07fd749161abd64ecea6848962dc&w=1480",
  cupcake: "https://img.magnific.com/free-photo/chocolate-cupcake-with-white-cream-white-background_1268-31446.jpg?t=st=1779114616~exp=1779118216~hmac=f9ccd9e9709df1090d169db205fae2fd0d71c7147a4c4320474c624ed95c21cf&w=1480",
  mochi: "https://img.magnific.com/premium-photo/delicious-mochi-balls-served-bowl-with-chopsticks-textured-surface-perfect-dessert-lovers_732812-10859.jpg?w=1480",
};

// resep
const recipes = [
  {
    id: "cheesecake",
    title: "Cheesecake Klasik",
    image: FOOD_IMAGES.cheesecake,
    categories: ["Dessert", "Mudah Dibuat"],
    description:
      "Cheesecake sederhana dengan tekstur lembut, creamy, dan rasa manis yang pas.",
    time: "45 Menit",
    serving: "4 Porsi",
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
  { id: "cheesecake", title: "Cheesecake", image: FOOD_IMAGES.cheesecake, desc: "Cheesecake sederhana dengan tekstur lembut, creamy, dan rasa manis yang pas." },
  { id: "cupcake", title: "Cupcake", image: FOOD_IMAGES.cupcake, desc: "Cupcake lembut dengan rasa manis ringan, cocok untuk camilan atau hidangan penutup." },
  { id: "mochi", title: "Mochi", image: FOOD_IMAGES.mochi, desc: "Mochi kenyal dengan isian manis yang lembut, cocok untuk camilan keluarga." },
];

// NAVBAR/HEADER
function Navbar({ onLogoClick }) {
  return (
    <nav className="navbar">
      <span className="navbar__logo" onClick={onLogoClick}>
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

// LANDING PAGEE
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

// DETAIL PAGEE
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
                { icon: <FiClock size={22} />, label: recipe.time },
                { icon: <FiUsers size={22} />, label: recipe.serving },
                { icon: <FiHeart size={22} />, label: recipe.difficulty },
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
              <FiShoppingBag size={20} /> Bahan-Bahan
            </h2>
            <ul className="ingredients-panel__list">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="ingredients-panel__item">
                  <span className="ingredients-panel__item-icon"><RiSparklingFill size={14} color="#b8bef0" /></span>
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
              <GiChefToque size={20} /> Langkah Memasak
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

// APP
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
