/* =========================================================
   JV IMPORTS — script.js
   - Catálogo mockado de 36 produtos
   - Filtro por categoria + busca em tempo real (index)
   - Renderização dinâmica da página de produto (produto.html)
   - Geração de link do WhatsApp com mensagem pré-preenchida
   ========================================================= */

const WHATSAPP_NUMBER = "5548996721558";

/** Define a categoria pelo intervalo do ID */
function categoryForId(id) {
  if (id <= 33) return "Perfumes Árabes";
  if (id <= 38) return "Body Splash";
  return "Cremes";
}

const BENEFITS = {
  "Perfumes Árabes": ["Fixação de 12h+", "Original Importado", "Sillage marcante", "Frasco premium"],
  "Body Splash":     ["Refrescância imediata", "Hidratação prolongada", "Fragrância delicada", "Original Importado"],
  "Cremes":          ["Fórmula exclusiva", "Acabamento aveludado", "Combo curado", "Original Importado"],
};

/** Lista mockada de 36 produtos — substitua nomes/descrições/imagens reais aqui */
const PRODUCTS = [

  {
    id:1,
    name:"Hawas Eclat",
    category:"Perfumes Árabes",
    image:"hawaseclat.webp",
    shortDescription:"Floral sofisticado, elegante e moderno.",
    longDescription:"Hawas Eclat é uma fragrância floral sofisticada, moderna e marcante, ideal para quem busca elegância e presença.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:2,
    name:"Dahliya",
    category:"Perfumes Árabes",
    image:"dahliya_perfumesarabes.webp",
    shortDescription:"Floral adocicado e delicado.",
    longDescription:"Dahliya combina notas florais adocicadas, trazendo delicadeza e feminilidade.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:3,
    name:"Eclaire",
    category:"Perfumes Árabes",
    image:"eclaire_perfumesarabes.webp",
    shortDescription:"Doce, cremoso e envolvente.",
    longDescription:"Eclaire possui um aroma doce e aconchegante, perfeito para quem gosta de fragrâncias marcantes.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:4,
    name:"Sabah Garden of Eden",
    category:"Perfumes Árabes",
    image:"sabahgardenofeden_perfumesarabes.webp",
    shortDescription:"Floral fresco e refinado.",
    longDescription:"Uma fragrância elegante e sofisticada, inspirada na delicadeza dos jardins floridos.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:5,
    name:"Sabah Delilah",
    category:"Perfumes Árabes",
    image:"sabahdelilah_perfumesarabes.webp",
    shortDescription:"Floral intenso e marcante.",
    longDescription:"Sabah Delilah traz feminilidade, sofisticação e presença.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:6,
    name:"Ameeri",
    category:"Perfumes Árabes",
    image:"ameeri_perfumesarabes.webp",
    shortDescription:"Luxuoso e elegante.",
    longDescription:"Ameeri combina notas orientais sofisticadas e modernas.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:7,
    name:"Ameerat",
    category:"Perfumes Árabes",
    image:"ameerat_perfumesarabes.webp",
    shortDescription:"Feminino e delicado.",
    longDescription:"Uma fragrância refinada e elegante para o dia a dia.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:8,
    name:"Aisha Queen",
    category:"Perfumes Árabes",
    image:"aishaqueen_perfumesarabes.webp",
    shortDescription:"Floral doce e marcante.",
    longDescription:"Aisha Queen une doçura e sofisticação em uma fragrância memorável.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:9,
    name:"Club de Nuit Woman",
    category:"Perfumes Árabes",
    image:"clubdenuitwoman_perfumesarabes.webp",
    shortDescription:"Elegante e sofisticado.",
    longDescription:"Inspirado em perfumes luxuosos internacionais.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:10,
    name:"Shagaf",
    category:"Perfumes Árabes",
    image:"shagaf_perfumesarabes.webp",
    shortDescription:"Doce oriental intenso.",
    longDescription:"Shagaf entrega personalidade e alta projeção.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:11,
    name:"Yara Moi",
    category:"Perfumes Árabes",
    image:"yaramoi_perfumesarabes.webp",
    shortDescription:"Cremoso e envolvente.",
    longDescription:"Uma fragrância delicada e aconchegante.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:12,
    name:"Yara Candy",
    category:"Perfumes Árabes",
    image:"yaracandy_perfumesarabes.webp",
    shortDescription:"Frutado doce e divertido.",
    longDescription:"Yara Candy possui um aroma moderno e jovial.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:13,
    name:"Durrat Love",
    category:"Perfumes Árabes",
    image:"durratlove_perfumesarabes.webp",
    shortDescription:"Romântico e delicado.",
    longDescription:"Uma fragrância feminina e apaixonante.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:14,
    name:"Club de Nuit Maleka",
    category:"Perfumes Árabes",
    image:"clubdenuitmaleka_perfumesarabes.webp",
    shortDescription:"Sofisticado e poderoso.",
    longDescription:"Fragrância elegante e luxuosa.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:15,
    name:"Delilah",
    category:"Perfumes Árabes",
    image:"delilah_perfumesarabes.webp",
    shortDescription:"Floral moderno e elegante.",
    longDescription:"Delilah é sofisticado e delicado.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:16,
    name:"Marshmallow Blush",
    category:"Perfumes Árabes",
    image:"marshmallowblush_perfumesarabes.webp",
    shortDescription:"Doce e aconchegante.",
    longDescription:"Uma fragrância confortável e delicada.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    /* PERFUMES MASCULINOS */
    
    {
    id:17,
    name:"Pharaoh",
    category:"Perfumes Árabes",
    image:"pharaoh_perfumesarabes.webp",
    shortDescription:"Amadeirado intenso.",
    longDescription:"Perfume masculino sofisticado e marcante.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:18,
    name:"Regent Collection",
    category:"Perfumes Árabes",
    image:"regentcollection_perfumesarabes.webp",
    shortDescription:"Elegante e sofisticado.",
    longDescription:"Fragrância masculina refinada.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:19,
    name:"Ameer",
    category:"Perfumes Árabes",
    image:"ameer_perfumesarabes.webp",
    shortDescription:"Oriental luxuoso.",
    longDescription:"Ameer combina tradição e sofisticação.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:20,
    name:"Mawj",
    category:"Perfumes Árabes",
    image:"mawj_perfumesarabes.webp",
    shortDescription:"Fresco e moderno.",
    longDescription:"Fragrância equilibrada para qualquer ocasião.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:21,
    name:"Rayhaan Terra",
    category:"Perfumes Árabes",
    image:"rayhaanterra_perfumesarabes.webp",
    shortDescription:"Amadeirado terroso.",
    longDescription:"Elegância e personalidade em uma fragrância única.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:22,
    name:"Odyssen Homme",
    category:"Perfumes Árabes",
    image:"odyssenhomme_perfumesarabes.webp",
    shortDescription:"Masculino refinado.",
    longDescription:"Uma fragrância moderna e sofisticada.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:23,
    name:"Hawas Kobra",
    category:"Perfumes Árabes",
    image:"hawaskobra_perfumesarabes.webp",
    shortDescription:"Forte e marcante.",
    longDescription:"Presença intensa e sofisticada.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:24,
    name:"Hawas Black",
    category:"Perfumes Árabes",
    image:"hawasblack_perfumesarabes.webp",
    shortDescription:"Intenso e sedutor.",
    longDescription:"Uma fragrância poderosa.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:25,
    name:"Pacific Rayhaan",
    category:"Perfumes Árabes",
    image:"pacificrayhaan_perfumesarabes.webp",
    shortDescription:"Fresco oceânico.",
    longDescription:"Aroma refrescante e elegante.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:26,
    name:"Sultan",
    category:"Perfumes Árabes",
    image:"sultan_perfumesarabes.webp",
    shortDescription:"Poderoso e elegante.",
    longDescription:"Fragrância luxuosa e intensa.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:27,
    name:"Sama",
    category:"Perfumes Árabes",
    image:"sama_perfumesarabes.webp",
    shortDescription:"Refrescante e equilibrado.",
    longDescription:"Leve, moderno e sofisticado.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:28,
    name:"Asad Elixir",
    category:"Perfumes Árabes",
    image:"asadelixir_perfumesarabes.webp",
    shortDescription:"Oriental premium.",
    longDescription:"Uma fragrância intensa e luxuosa.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:29,
    name:"Club de Nuit Extrait",
    category:"Perfumes Árabes",
    image:"clubdenuitextrait_perfumesarabes.webp",
    shortDescription:"Luxo e alta performance.",
    longDescription:"Alta fixação e elegância.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:30,
    name:"Asad Bourbon",
    category:"Perfumes Árabes",
    image:"asadbourbon_perfumesarabes.webp",
    shortDescription:"Amadeirado adocicado.",
    longDescription:"Sofisticado e moderno.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:31,
    name:"Faris",
    category:"Perfumes Árabes",
    image:"faris_perfumesarabes.webp",
    shortDescription:"Elegante e versátil.",
    longDescription:"Ideal para qualquer ocasião.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:32,
    name:"Habibi King",
    category:"Perfumes Árabes",
    image:"habibiking_perfumesarabes.webp",
    shortDescription:"Sofisticado e intenso.",
    longDescription:"Uma fragrância poderosa.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:33,
    name:"9PM Rebel",
    category:"Perfumes Árabes",
    image:"9pmrebel_perfumesarabes.webp",
    shortDescription:"Noturno e moderno.",
    longDescription:"Marcante e elegante.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    {
    id:34,
    name:"Liquid Brun",
    category:"Perfumes Árabes",
    image:"liquidbrun_perfumesarabes.webp",
    shortDescription:"Amadeirado sofisticado.",
    longDescription:"Elegante e refinado.",
    benefits: BENEFITS["Perfumes Árabes"],
    },
    
    /* CREMES */
    
    {
    id:35,
    name:"Yara Tradicional",
    category:"Cremes",
    image:"yaratradicional_cremes.webp",
    shortDescription:"Hidratação perfumada.",
    longDescription:"Creme hidratante com fragrância delicada.",
    benefits: BENEFITS["Cremes"],
    },
    
    {
    id:36,
    name:"Dalila",
    category:"Cremes",
    image:"dalila_cremes.webp",
    shortDescription:"Cremoso e delicado.",
    longDescription:"Hidratação suave e agradável.",
    benefits: BENEFITS["Cremes"],
    },
    
    {
    id:37,
    name:"Vulcan Feu",
    category:"Cremes",
    image:"vulcanfeu_cremes.webp",
    shortDescription:"Masculino intenso.",
    longDescription:"Creme sofisticado e marcante.",
    benefits: BENEFITS["Cremes"],
    },
    
    {
    id:38,
    name:"Club de Nuit",
    category:"Cremes",
    image:"clubdenuit_cremes.webp",
    shortDescription:"Elegante e sofisticado.",
    longDescription:"Hidratação premium.",
    benefits: BENEFITS["Cremes"],
    },
    
    {
    id:39,
    name:"Asad Bourbon",
    category:"Cremes",
    image:"asadbourbon_cremes.webp",
    shortDescription:"Amadeirado premium.",
    longDescription:"Hidratação com fragrância intensa.",
    benefits: BENEFITS["Cremes"],
    },
    
    {
    id:40,
    name:"Asad Black",
    category:"Cremes",
    image:"asadblack_cremes.webp",
    shortDescription:"Intenso e moderno.",
    longDescription:"Fragrância marcante e elegante.",
    benefits: BENEFITS["Cremes"],
    },
    
    /* BODY SPLASH */
    
    {
    id:41,
    name:"Asad Bourbon Body Splash",
    category:"Body Splash",
    image:"asadbourbon_bodysplash.webp",
    shortDescription:"Masculino intenso.",
    longDescription:"Refrescância e perfumação duradoura.",
    benefits: BENEFITS["Body Splash"],
    },
    
    {
    id:42,
    name:"Vulcan Feu Body Splash",
    category:"Body Splash",
    image:"vulcanfeu_bodysplash.webp",
    shortDescription:"Amadeirado marcante.",
    longDescription:"Refrescância intensa para o dia a dia.",
    benefits: BENEFITS["Body Splash"],
    },
    
    {
    id:43,
    name:"Sabah Valentine",
    category:"Body Splash",
    image:"sabahvalentine_bodysplash.webp",
    shortDescription:"Floral romântico.",
    longDescription:"Delicado e feminino.",
    benefits: BENEFITS["Body Splash"],
    },
    
    {
    id:44,
    name:"Sabah al Ward",
    category:"Body Splash",
    image:"sabahalward_bodysplash.webp",
    shortDescription:"Floral delicado.",
    longDescription:"Leve e agradável.",
    benefits: BENEFITS["Body Splash"],
    },
    
    {
    id:45,
    name:"Club de Nuit Woman Body Splash",
    category:"Body Splash",
    image:"clubdenuitwoman_bodysplash.webp",
    shortDescription:"Elegante e feminino.",
    longDescription:"Refrescante e sofisticado.",
    benefits: BENEFITS["Body Splash"],
    },
    
    ];
    
function buildWhatsAppLink(productName) {
  const msg = `Olá, vim pelo site da JV Imports e gostaria de saber o valor e a disponibilidade do ${productName}!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

/* =========================================================
   PÁGINA INICIAL (index.html)
   ========================================================= */
function initCatalogPage() {
  const grid        = document.getElementById("productGrid");
  const emptyState  = document.getElementById("emptyState");
  const searchInput = document.getElementById("searchInput");
  const filterBtns  = document.querySelectorAll(".filter-btn");
  if (!grid) return; // não estamos na página principal

  let activeFilter = "Todos";
  let searchQuery  = "";

  function render() {
    const q = searchQuery.trim().toLowerCase();
    const list = PRODUCTS.filter((p) => {
      const matchCat    = activeFilter === "Todos" || p.category === activeFilter;
      const matchSearch = !q || p.name.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });

    grid.innerHTML = list.map(cardTemplate).join("");
    emptyState.hidden = list.length > 0;
  }

  function cardTemplate(p) {
    return `
      <a class="card" href="produto.html?id=${p.id}" aria-label="Ver detalhes de ${p.name}">
        <div class="card-media">
          <img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'" />
          <span class="card-watermark">JV</span>
          <span class="card-badge">${p.category}</span>
        </div>
        <div class="card-body">
          <h3 class="card-title">${p.name}</h3>
          <p class="card-desc">${p.shortDescription}</p>
          <div class="card-action">
            <span>Ver detalhes</span>
            <span class="arrow">→</span>
          </div>
        </div>
      </a>
    `;
  }

  // Filtros
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      render();
    });
  });

  // Busca em tempo real
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    render();
  });

  render();
}

/* =========================================================
   PÁGINA DE PRODUTO (produto.html)
   ========================================================= */
function initProductPage() {
  const titleEl = document.getElementById("productName");
  if (!titleEl) return; // não estamos na página de produto

  const params = new URLSearchParams(window.location.search);
  const id     = parseInt(params.get("id"), 10);
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    titleEl.textContent = "Produto não encontrado";
    document.getElementById("productDescription").textContent =
      "O produto solicitado não está disponível. Volte ao catálogo para escolher outra fragrância.";
    return;
  }

  // Preenche dados
  document.title = `${product.name} — JV Imports`;
  titleEl.textContent = product.name;
  document.getElementById("productDescription").textContent = product.longDescription;
  document.getElementById("productBadge").textContent = product.category;

  const img = document.getElementById("productImage");
  img.src = product.image;
  img.alt = product.name;

  // Benefícios
  const benefitsList = document.getElementById("benefitsList");
  benefitsList.innerHTML = product.benefits.map((b) => `<li>${b}</li>`).join("");

  // Link do WhatsApp (desktop + mobile)
  const waLink = buildWhatsAppLink(product.name);
  document.getElementById("whatsappBtn").href = waLink;
  document.getElementById("whatsappBtnMobile").href = waLink;
}

/* =========================================================
   Bootstrap
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  // Ano no footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  initCatalogPage();
  initProductPage();
});
