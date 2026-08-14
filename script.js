/* =========================================================
   JV IMPORTS — script.js
   - Catálogo de produtos
   - Filtro por categoria + busca em tempo real (index)
   - Renderização dinâmica da página de produto (produto.html)
   - Geração de link do WhatsApp com mensagem pré-preenchida
   ========================================================= */

const WHATSAPP_NUMBER = "5548996721558";

/** Define a categoria pelo intervalo do ID */
function categoryForId(id) {
  if (id <= 150) return "Perfumes Árabes";
  if (id <= 300) return "Body Splash";
  if (id <= 450) return "Cremes";
  return "Perfumes Árabes";
}

const BENEFITS = {
  "Perfumes Árabes": ["Fixação de 12h+", "Original Importado", "Sillage marcante", "Frasco premium"],
  "Body Splash":     ["Refrescância imediata", "Hidratação prolongada", "Fragrância delicada", "Original Importado"],
  "Cremes":          ["Fórmula exclusiva", "Acabamento aveludado", "Combo curado", "Original Importado"],
};

/** Lista mockada de produtos com IDs categorizados */
const PRODUCTS = [

  /* =========================================================
     PERFUMES ÁRABES (IDs: 1 - 150)
     ========================================================= */

  {
    id: 1,
    name: "Hawas Eclat",
    category: "Perfumes Árabes",
    image: "hawaseclat.webp",
    shortDescription: "Floral sofisticado, elegante e moderno.",
    longDescription: "Hawas Eclat é uma fragrância floral sofisticada, moderna e marcante, ideal para quem busca elegância e presença em qualquer ocasião.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 2,
    name: "Maktub Gold",
    category: "Perfumes Árabes",
    image: "bidaya.jpeg",
    shortDescription: "Fragrância cítrica, frutada e especiada.",
    longDescription: "Abre com notas vibrantes de cítricos (laranja, limão e bergamota) combinadas com gengibre. No corpo, traz uma pera suculenta envolvida por toques quentes de canela e especiarias.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 3,
    name: "Dahliya",
    category: "Perfumes Árabes",
    image: "dahliya_perfumesarabes.webp",
    shortDescription: "Floral adocicado e delicado.",
    longDescription: "Dahliya combina notas florais adocicadas com toque cremoso, trazendo extrema delicadeza, feminilidade e uma aura de romance.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 4,
    name: "Eclaire",
    category: "Perfumes Árabes",
    image: "eclaire_perfumesarabes.webp",
    shortDescription: "Doce, cremoso e envolvente.",
    longDescription: "Eclaire possui um aroma gourmet irresistível com notas doces de baunilha e caramelo, perfeito para quem ama fragrâncias marcantes e acolhedoras.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 5,
    name: "Sabah Garden of Eden",
    category: "Perfumes Árabes",
    image: "sabahgardenofeden_perfumesarabes.webp",
    shortDescription: "Floral fresco e refinado.",
    longDescription: "Uma fragrância elegante e sofisticada inspirada na delicadeza dos jardins floridos do Oriente, perfeita para o uso diário ou eventos especiais.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 6,
    name: "Sabah Delilah",
    category: "Perfumes Árabes",
    image: "sabahdelilah_perfumesarabes.webp",
    shortDescription: "Floral intenso e marcante.",
    longDescription: "Sabah Delilah traz uma combinação exótica de rosas e especiarias refinadas, transmitindo feminilidade, sofisticação e presença por onde passa.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 7,
    name: "Ameeri",
    category: "Perfumes Árabes",
    image: "ameeri_perfumesarabes.webp",
    shortDescription: "Luxuoso e elegante.",
    longDescription: "Ameeri combina acordes amadeirados e notas orientais aveludadas, resultando em uma fragrância de alto padrão e extremo bom gosto.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 8,
    name: "Ameerat",
    category: "Perfumes Árabes",
    image: "ameerat_perfumesarabes.webp",
    shortDescription: "Feminino e delicado.",
    longDescription: "Uma fragrância refinada com acordes florais suaves e um fundo levemente adocicado, ideal para realçar a elegância no dia a dia.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 9,
    name: "Aisha Queen",
    category: "Perfumes Árabes",
    image: "aishaqueen_perfumesarabes.webp",
    shortDescription: "Floral doce e marcante.",
    longDescription: "Aisha Queen une a doçura das frutas maduras com a imponência do jasmim e da baunilha em uma fragrância memorável e sedutora.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 10,
    name: "Club de Nuit Woman",
    category: "Perfumes Árabes",
    image: "clubdenuitwoman_perfumesarabes.webp",
    shortDescription: "Elegante e sofisticado.",
    longDescription: "Fragrância amadeirada floral premiada internacionalmente, conhecida por sua excelente projeção, sofisticação e fixação impecável.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 11,
    name: "Shagaf",
    category: "Perfumes Árabes",
    image: "shagaf_perfumesarabes.webp",
    shortDescription: "Doce oriental intenso.",
    longDescription: "Shagaf entrega personalidade marcante através de notas de gourmand, âmbar e especiarias quentes que deixam um rastro inesquecível.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 12,
    name: "Yara Moi",
    category: "Perfumes Árabes",
    image: "yaramoi_perfumesarabes.webp",
    shortDescription: "Cremoso e envolvente.",
    longDescription: "Yara Moi destaca-se por suas notas de pêssego, caramelo e sândalo, criando um aroma cremoso, caloroso e muito aconchegante.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 13,
    name: "Yara Candy",
    category: "Perfumes Árabes",
    image: "yaracandy_perfumesarabes.webp",
    shortDescription: "Frutado doce e divertido.",
    longDescription: "Yara Candy possui um aroma moderno e jovial repleto de notas frutadas e um toque de confeitaria que encanta no primeiro borrifo.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 14,
    name: "Durrat Love",
    category: "Perfumes Árabes",
    image: "durratlove_perfumesarabes.webp",
    shortDescription: "Romântico e delicado.",
    longDescription: "Uma fragrância feminina apaixonante com notas florais suaves e um toque frutado equilibrado, perfeita para encontros e momentos especiais.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 15,
    name: "Club de Nuit Maleka",
    category: "Perfumes Árabes",
    image: "clubdenuitmaleka_perfumesarabes.webp",
    shortDescription: "Sofisticado e poderoso.",
    longDescription: "Fragrância luxuosa inspirada na realeza oriental, combinando frutas exóticas, florais brancos e um fundo amadeirado marcante.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 16,
    name: "Delilah",
    category: "Perfumes Árabes",
    image: "delilah_perfumesarabes.webp",
    shortDescription: "Floral moderno e elegante.",
    longDescription: "Delilah é inspirado na perfumaria de nicho francesa com toque árabe: ruibarbo, lichia e rosa turca se misturam com perfeição.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 17,
    name: "Marshmallow Blush",
    category: "Perfumes Árabes",
    image: "marshmallowblush_perfumesarabes.webp",
    shortDescription: "Doce e aconchegante.",
    longDescription: "Uma fragrância extremamente aconchegante com acordes de marshmallow, baunilha e notas florais atalcadas super sutis.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 18,
    name: "Pharaoh",
    category: "Perfumes Árabes",
    image: "pharaoh_perfumesarabes.webp",
    shortDescription: "Amadeirado intenso.",
    longDescription: "Perfume masculino imponente com notas de couro, madeira nobre e especiarias, traduzindo força, mistério e liderança.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 19,
    name: "Regent Collection",
    category: "Perfumes Árabes",
    image: "regentcollection_perfumesarabes.webp",
    shortDescription: "Elegante e sofisticado.",
    longDescription: "Fragrância masculina refinada criada para homens que valorizan o luxo discreto, a sobriedade e um aroma duradouro.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 20,
    name: "Ameer",
    category: "Perfumes Árabes",
    image: "ameer_perfumesarabes.webp",
    shortDescription: "Oriental luxuoso.",
    longDescription: "Ameer combina tradição e sofisticação em uma fragrância rica em oud, âmbar e notas especiadas de altíssima qualidade.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 21,
    name: "Mawj",
    category: "Perfumes Árabes",
    image: "mawj_perfumesarabes.webp",
    shortDescription: "Fresco e moderno.",
    longDescription: "Fragrância refrescante equilibrada por um fundo limpo e levemente amadeirado, excelente para dias quentes e uso diário.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 22,
    name: "Rayhaan Terra",
    category: "Perfumes Árabes",
    image: "rayhaanterra_perfumesarabes.webp",
    shortDescription: "Amadeirado terroso.",
    longDescription: "Elegância e personalidade em uma fragrância marcante com notas de vetiver, patchouli e um toque cítrico refinado.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 23,
    name: "Odyssen Homme",
    category: "Perfumes Árabes",
    image: "odyssenhomme_perfumesarabes.webp",
    shortDescription: "Masculino refinado.",
    longDescription: "Uma fragrância moderna, aromática e sofisticada para o homem contemporâneo que busca um aroma versátil e elegante.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 24,
    name: "Hawas Kobra",
    category: "Perfumes Árabes",
    image: "hawaskobra_perfumesarabes.webp",
    shortDescription: "Forte e marcante.",
    longDescription: "Com presença ostensiva, Hawas Kobra traz notas especiadas, amadeiradas e um fundo levemente adocicado e provocante.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 25,
    name: "Hawas Black",
    category: "Perfumes Árabes",
    image: "hawasblack_perfumesarabes.webp",
    shortDescription: "Intenso e sedutor.",
    longDescription: "Uma fragrância noturna poderosa, com acordes amadeirados escuros, baunilha negra e couro refinado.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 26,
    name: "Pacific Rayhaan",
    category: "Perfumes Árabes",
    image: "pacificrayhaan_perfumesarabes.webp",
    shortDescription: "Fresco oceânico.",
    longDescription: "Aroma refrescante e revigorante que remete à brisa marinha com notas aquáticas e cítricos cristalinos.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 27,
    name: "Sultan",
    category: "Perfumes Árabes",
    image: "sultan_perfumesarabes.webp",
    shortDescription: "Poderoso e elegante.",
    longDescription: "Fragrância verdadeiramente real com misturas nobres de resinas, sândalo e toques sutis de especiarias do oriente.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 28,
    name: "Sama",
    category: "Perfumes Árabes",
    image: "sama_perfumesarabes.webp",
    shortDescription: "Refrescante e equilibrado.",
    longDescription: "Leve, moderno e limpo. Perfeito para quem prefere fragrâncias discretas mas surpreendentemente marcantes.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 29,
    name: "Asad Elixir",
    category: "Perfumes Árabes",
    image: "asadelixir_perfumesarabes.webp",
    shortDescription: "Oriental premium.",
    longDescription: "Versão ainda mais concentrada e potente do consagrado Asad, recheada de pimenta preta, âmbar e baunilha escura.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 30,
    name: "Club de Nuit Extrait",
    category: "Perfumes Árabes",
    image: "clubdenuitextrait_perfumesarabes.webp",
    shortDescription: "Luxo e alta performance.",
    longDescription: "Extrato puro de perfumaria com altíssima fixação e projeção arrebatadora de abacaxi, bergamota e notas amadeiradas.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 31,
    name: "Asad Bourbon",
    category: "Perfumes Árabes",
    image: "asadbourbon_perfumesarabes.webp",
    shortDescription: "Amadeirado adocicado.",
    longDescription: "Uma interpretação quente e sedutora com acordes de baunilha bourbon, café e madeiras nobres.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 32,
    name: "Faris",
    category: "Perfumes Árabes",
    image: "faris_perfumesarabes.webp",
    shortDescription: "Elegante e versátil.",
    longDescription: "Combinação perfeita de notas florais e amadeiradas masculinas, excelente para qualquer clima e ocasião.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 33,
    name: "Habibi King",
    category: "Perfumes Árabes",
    image: "habibiking_perfumesarabes.webp",
    shortDescription: "Sofisticado e intenso.",
    longDescription: "Uma fragrância masculina imponente com notas quentes, especiadas e uma presença inconfundível.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 34,
    name: "9PM Rebel",
    category: "Perfumes Árabes",
    image: "9pmrebel_perfumesarabes.webp",
    shortDescription: "Noturno e moderno.",
    longDescription: "Jovial, doce e rebelde. Excelente escolha para festas e eventos noturnos onde marcar presença é essencial.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 35,
    name: "Liquid Brun",
    category: "Perfumes Árabes",
    image: "liquidbrun_perfumesarabes.webp",
    shortDescription: "Amadeirado sofisticado.",
    longDescription: "Elegante e refinado com toques de canela, flor de laranjeira e baunilha aveludada.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 36,
    name: "Maktub la Vive",
    category: "Perfumes Árabes",
    image: "Maktub_la_vive.jpeg",
    shortDescription: "Fragrância marcante e equilibrada.",
    longDescription: "Maktub la Vive celebra o destino com uma mistura envolvente de florais refinados e um fundo adocicado acolhedor.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 37,
    name: "Sabah al Ward Perfume",
    category: "Perfumes Árabes",
    image: "Sabah_al_Ward.jpeg",
    shortDescription: "Intenso e sedutor.",
    longDescription: "Fragrância oriental misteriosa com rosas árabes, pimenta rosa e baunilha quente. Um clássico da perfumaria oriental.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 38,
    name: "Sabah Valentine Perfume",
    category: "Perfumes Árabes",
    image: "sabah_valentine_perfume.jpeg",
    shortDescription: "Romântico e apaixonante.",
    longDescription: "Elaborado para momentos românticos, traz florais brancos apaixonantes envolvidos por frutas doces e almíscar suave.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 39,
    name: "Yara Tous Perfume",
    category: "Perfumes Árabes",
    image: "Yara_tours.jpeg",
    shortDescription: "Alegre e tropical.",
    longDescription: "Uma explosão tropical de manga, maracujá e flor de laranjeira com base cremosa de coco e baunilha.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 40,
    name: "Khamrah Lattafa",
    category: "Perfumes Árabes",
    image: "khamrah.jpeg",
    shortDescription: "Gourmand luxuoso e especiado.",
    longDescription: "Famoso no mundo todo por suas notas quentes de canela, noz-moscada, pralinê e tâmara sobre uma base oriental riquíssima.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 41,
    name: "Khamrah Dukhan",
    category: "Perfumes Árabes",
    image: "khamrah_dukhan.jpeg",
    shortDescription: "Amadeirado defumado e quente.",
    longDescription: "Uma variação ainda mais misteriosa de Khamrah, adicionando toques defumados, resinosos e amadeirados à doce baunilha.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 42,
    name: "Atheeri Lattafa",
    category: "Perfumes Árabes",
    image: "atheeri.jpeg",
    shortDescription: "Mel, floral e sofisticado.",
    longDescription: "Uma fragrância dourada e radiante rica em mel, florais refinados e um toque amadeirado de puro luxo oriental.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 43,
    name: "Chants Tenderina",
    category: "Perfumes Árabes",
    image: "chants_tenderina.jpeg",
    shortDescription: "Floral frutado delicado.",
    longDescription: "Inspirado na alta perfumaria internacional, une toranja, marmeleiro e jasmim com um almíscar suave e encantador.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 44,
    name: "Bidaya Vanilla P*rn",
    category: "Perfumes Árabes",
    image: "bidaya_vanilla_prn.jpeg",
    shortDescription: "Baunilha intensa e viciante.",
    longDescription: "Uma overdose de baunilha oriental combinada com especiarias sutis e notas amadeiradas aconchegantes.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 45,
    name: "Bidaya Gris",
    category: "Perfumes Árabes",
    image: "bidaya_gris.jpeg",
    shortDescription: "Ambarado elegante e atemporal.",
    longDescription: "Fragrância sofisticada e moderna com acordes cinzentos, rosas nobres, patchouli e um fundo ambarado inconfundível.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 46,
    name: "Panther Pour Homme",
    category: "Perfumes Árabes",
    image: "panther_pour_homme.jpeg",
    shortDescription: "Fresco, amadeirado e marcante.",
    longDescription: "Um perfume masculino limpo, elegante e moderno que combina notas cítricas, lavanda refinada e base amadeirada.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 47,
    name: "Alpine Homme Sport",
    category: "Perfumes Árabes",
    image: "alpine_homme_sport.jpeg",
    shortDescription: "Refrescante, esportivo e dinâmico.",
    longDescription: "Perfeito para homens ativos, une tangerina fresca, hortelã, pimenta e fava tonka com excelente fixação.",
    benefits: BENEFITS["Perfumes Árabes"],
  },

  /* =========================================================
     BODY SPLASH (IDs: 151 - 300)
     ========================================================= */

  {
    id: 151,
    name: "Asad Bourbon Body Splash",
    category: "Body Splash",
    image: "asadbourbon_bodysplash.webp",
    shortDescription: "Masculino intenso e prático.",
    longDescription: "Refrescância imediata e perfumação marcante com as notas icônicas de baunilha bourbon e especiarias para o corpo todo.",
    benefits: BENEFITS["Body Splash"],
  },
  {
    id: 152,
    name: "Vulcan Feu Body Splash",
    category: "Body Splash",
    image: "vulcanfeu_bodysplash.webp",
    shortDescription: "Amadeirado marcante e leve.",
    longDescription: "Refrescância intensa para o dia a dia, trazendo uma perfumação masculina envolvente em uma bruma leve.",
    benefits: BENEFITS["Body Splash"],
  },
  {
    id: 153,
    name: "Sabah Valentine Body Splash",
    category: "Body Splash",
    image: "sabahvalentine_bodysplashs.jpeg",
    shortDescription: "Floral romântico e vibrante.",
    longDescription: "Leve, romântico e delicado. Um spray corporal perfeito para prolongar a sensação de banho tomado o dia todo.",
    benefits: BENEFITS["Body Splash"],
  },
  {
    id: 154,
    name: "Sabah al Ward Body Splash",
    category: "Body Splash",
    image: "sabahalward_bodysplash.webp",
    shortDescription: "Floral delicado e versátil.",
    longDescription: "Bruma perfumada suave que combina florais orientais e um toque de doçura para um dia a dia mais perfumado.",
    benefits: BENEFITS["Body Splash"],
  },
  {
    id: 155,
    name: "Club de Nuit Woman Body Splash",
    category: "Body Splash",
    image: "clubdenuitwoman_bodysplash.webp",
    shortDescription: "Elegante e refrescante.",
    longDescription: "A sofisticação do consagrado Club de Nuit Woman agora em uma versão splash leve e refrescante para aplicar generosamente.",
    benefits: BENEFITS["Body Splash"],
  },
  {
    id: 156,
    name: "Eclaire Air Freshener / Body Splash",
    category: "Body Splash",
    image: "eclaire_splash.jpeg",
    shortDescription: "Doce cremoso e envolvente.",
    longDescription: "Uma névoa perfumada deliciosa recheada de notas gourmet de caramelo e baunilha para deixar um rastro encantador.",
    benefits: BENEFITS["Body Splash"],
  },
  {
    id: 157,
    name: "Atheeri Air Freshener / Body Splash",
    category: "Body Splash",
    image: "atheeri_splash.jpeg",
    shortDescription: "Mel e toques dourados refrescantes.",
    longDescription: "Uma bruma suave e iluminada com deliciosos acordes de mel e florais radiantes para perfumação prática diária.",
    benefits: BENEFITS["Body Splash"],
  },
  {
    id: 158,
    name: "Asad Lattafa Air Freshener / Body Splash",
    category: "Body Splash",
    image: "asad_splash.jpeg",
    shortDescription: "Masculino marcante e refrescante.",
    longDescription: "A fragrância icônica e imponente de Asad em formato de névoa perfumada, ideal para uso diário e refrescância prolongada.",
    benefits: BENEFITS["Body Splash"],
  },

  /* =========================================================
     CREMES (IDs: 301 - 450)
     ========================================================= */

  {
    id: 301,
    name: "Yara Tradicional Creme",
    category: "Cremes",
    image: "yaratradicional_cremes.webp",
    shortDescription: "Hidratação perfumada aveludada.",
    longDescription: "Creme hidratante corporal com a fragrância inconfundível do Yara rosa. Nutre a pele deixando toque aveludado e aroma duradouro.",
    benefits: BENEFITS["Cremes"],
  },
  {
    id: 302,
    name: "Dalila Creme",
    category: "Cremes",
    image: "dalila_cremes.webp",
    shortDescription: "Cremoso, nutritivo e delicado.",
    longDescription: "Hidratação profunda com absorção rápida. Deixa a pele macia, sedosa e delicadamente perfumada com notas florais.",
    benefits: BENEFITS["Cremes"],
  },
  {
    id: 303,
    name: "Vulcan Feu Creme",
    category: "Cremes",
    image: "vulcanfeu_cremes.webp",
    shortDescription: "Masculino intenso e hidratante.",
    longDescription: "Creme hidratante masculino de textura leve e rápida absorção, ideal para proteger a pele e manter uma perfumação elegante.",
    benefits: BENEFITS["Cremes"],
  },
  {
    id: 304,
    name: "Club de Nuit Creme",
    category: "Cremes",
    image: "clubdenuit_cremes.webp",
    shortDescription: "Elegante e sofisticado.",
    longDescription: "Hidratação premium com toque seco e perfumação marcante. Potencializa a fixação do seu perfume favorito.",
    benefits: BENEFITS["Cremes"],
  },
  {
    id: 305,
    name: "Asad Bourbon Creme",
    category: "Cremes",
    image: "asadbourbon_cremes.webp",
    shortDescription: "Amadeirado premium e nutritivo.",
    longDescription: "Formulado para hidratar profundamente e perfumar a pele masculina com as ricas notas de baunilha e amadeirados nobres.",
    benefits: BENEFITS["Cremes"],
  },
  {
    id: 306,
    name: "Asad Black Creme",
    category: "Cremes",
    image: "asadblack_cremes.webp",
    shortDescription: "Intenso, moderno e marcante.",
    longDescription: "Proporciona toque macio e proteção contra o ressecamento da pele, acompanhado de uma fragrância masculina marcante.",
    benefits: BENEFITS["Cremes"],
  }

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
    if (emptyState) {
      emptyState.hidden = list.length > 0;
    }
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

  // Filtros por Categoria
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      render();
    });
  });

  // Busca em tempo real
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      render();
    });
  }

  // Renderização inicial dos produtos
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
    const descEl = document.getElementById("productDescription");
    if (descEl) {
      descEl.textContent = "O produto solicitado não está disponível. Volte ao catálogo para escolher outra fragrância.";
    }
    return;
  }

  // Preenche dados com checagens de segurança
  document.title = `${product.name} — JV Imports`;
  titleEl.textContent = product.name;

  const descEl = document.getElementById("productDescription");
  if (descEl) descEl.textContent = product.longDescription;

  const badgeEl = document.getElementById("productBadge");
  if (badgeEl) badgeEl.textContent = product.category;

  const imgEl = document.getElementById("productImage");
  if (imgEl) {
    imgEl.src = product.image;
    imgEl.alt = product.name;
  }

  // Benefícios
  const benefitsList = document.getElementById("benefitsList");
  if (benefitsList && product.benefits) {
    benefitsList.innerHTML = product.benefits.map((b) => `<li>${b}</li>`).join("");
  }

  // Link do WhatsApp (desktop + mobile)
  const waLink = buildWhatsAppLink(product.name);
  const btnDesktop = document.getElementById("whatsappBtn");
  const btnMobile  = document.getElementById("whatsappBtnMobile");

  if (btnDesktop) btnDesktop.href = waLink;
  if (btnMobile)  btnMobile.href  = waLink;
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
