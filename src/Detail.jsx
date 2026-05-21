import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Detail.css";

// react icons
import { FiClock, FiUsers, FiHeart, FiShoppingBag } from "react-icons/fi";
import { GiChefToque } from "react-icons/gi";
import { RiSparklingFill } from "react-icons/ri";

const recipes = [
  {
    id: "cheesecake",
    title: "Cheesecake Klasik",
    image: "https://img.magnific.com/free-photo/side-view-cheesecake-with-cherry-jelly-top-white-plate_141793-2955.jpg?t=st=1779114456~exp=1779118056~hmac=f7bb0f60ffd18e61de90170a3103da28c33f07fd749161abd64ecea6848962dc&w=800",
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
    image: "https://img.magnific.com/free-photo/chocolate-cupcake-with-white-cream-white-background_1268-31446.jpg?t=st=1779114616~exp=1779118216~hmac=f9ccd9e9709df1090d169db205fae2fd0d71c7147a4c4320474c624ed95c21cf&w=800",
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
    image: "https://img.magnific.com/premium-photo/delicious-mochi-balls-served-bowl-with-chopsticks-textured-surface-perfect-dessert-lovers_732812-10859.jpg?w=800",
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

function Footer() {
  return (
    <footer className="footer">
      ©2026 Dapur Resep
      <br />Images by <b>Magnific</b>/<b>Freepik Company</b>
    </footer>
  );
}

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find((r) => r.id === id);

  // Preload the hero image so it's the highest priority fetch
  useEffect(() => {
    if (!recipe) return;
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = recipe.image;
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, [recipe]);

  if (!recipe) return null;

  return (
    <div className="detail">
      <div className="detail__container">

        {/* Back btn */}
        <button className="detail__back-btn" onClick={() => navigate("/")}>
          ← Kembali
        </button>

        {/* Hero row */}
        <div className="detail__hero">
          {/* Image */}
          <div className="detail__image-wrap">
            <span className="detail__deco-tl">+</span>
            <div className="detail__image-box">
              <img src={recipe.image} alt={recipe.title} className="detail__image" fetchpriority="high" width="800" height="280" decoding="sync" />
            </div>
            <span className="detail__deco-br">+</span>
          </div>

          {/* Info */}
          <div>
            <div className="detail__categories">
              {recipe.categories.map((cat) => (
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
                  <span className="ingredients-panel__item-icon">
                    <RiSparklingFill size={14} color="#b8bef0" />
                  </span>
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
