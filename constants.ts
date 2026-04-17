
import { Performer, Sponsor, PointOfSale, TouristAttraction, Accommodation } from './types';

export const FESTIVAL_NAME = "Festa do Leite";
export const FESTIVAL_CITY = "Batatais - SP";
export const FESTIVAL_EDITION = "49ª edição";
export const FESTIVAL_DATES = "8 a 12 de julho de 2026";

/** Rótulos da agenda (dia + dia da semana, julho/2026). Deve coincidir com `Performer.date`. */
export const PROGRAM_DAY_LABELS = [
  "08 Jul · qua",
  "09 Jul · qui",
  "10 Jul · sex",
  "11 Jul · sáb",
  "12 Jul · dom",
] as const;

export const FESTIVAL_SLOGAN = "Onde a Tradição Encontra a Emoção";

export interface NewsItem {
  id: string;
  /** Slug único para URL /noticias/:slug */
  slug: string;
  title: string;
  excerpt: string;
  fullText: string[];
  date: string;
  category: 'Shows' | 'Agro' | 'Serviço';
  imageUrl: string;
}

export const NEWS_DATA: NewsItem[] = [
  {
    id: '4',
    slug: 'ingressos-antecipados-49-festa-do-leite-batatais',
    title: 'Saiba como adquirir ingressos antecipados para a 49ª Festa do Leite de Batatais',
    excerpt:
      'As vendas online já estão abertas, com entrada gratuita em 9 e 12 de julho e ingressos pagos nos dias 8, 10 e 11.',
    fullText: [
      'As vendas online de ingressos para a 49ª Festa do Leite de Batatais já estão abertas. A tradicional festa será realizada entre os dias 8 e 12 de julho, no Centro de Eventos "Antônio Carlos Prado Baptista".',
      'A entrada será gratuita em dois dias da programação: 9 de julho (quinta-feira), com show de Dilsinho, e 12 de julho (domingo), com Maria Clara & JP e Trio Parada Dura.',
      'Nos demais dias (8, 10 e 11 de julho), é preciso adquirir ingresso. Os valores seguem os mesmos do ano passado: ingresso individual por R$ 50 (inteira) e R$ 25 (meia), além do pacote promocional para os 3 dias pagos por R$ 140 (inteira) e R$ 70 (meia).',
      'Os ingressos podem ser adquiridos de forma prática e segura pela internet, por meio da plataforma Quero2 Ingressos: https://q2ingressos.com.br/eventgroup/49-festa-do-leite-2026. O link também está disponível na bio do perfil oficial no Instagram (@festadoleitedebatataisoficial).',
      'Em breve, também serão divulgados pontos de venda físicos na cidade e região.',
      'Confira as atrações confirmadas por data: 8 de julho (quarta-feira) com Clube da Viola e Edson & Hudson; 9 de julho (quinta-feira, feriado e entrada gratuita) com Dilsinho; 10 de julho (sexta-feira) com Jads & Jadson e Júnior & Cezar; 11 de julho (sábado) com Felipe & Rodrigo e Country Beat; 12 de julho (domingo, entrada gratuita) com Maria Clara & JP e Trio Parada Dura.',
      'Prepare-se para viver mais uma edição inesquecível de um dos maiores eventos do interior paulista.'
    ],
    date: 'Abr 2026',
    category: 'Serviço',
    imageUrl: '/img/ingressos antecipados.jpg'
  },
  {
    id: '1',
    slug: 'festa-do-leite-2026-49-edicao',
    title: '49ª Festa do Leite: 8 a 12 de julho de 2026 no Centro de Eventos',
    excerpt:
      'A programação de shows confirmada promete atrair grande público com sertanejo e pagode; programação completa em breve.',
    fullText: [
      'A 49ª edição da Festa do Leite de Batatais será realizada entre os dias 8 e 12 de julho de 2026, no Centro de Eventos "Antônio Carlos Prado Baptista". Reconhecida como uma das mais tradicionais festas do interior paulista, a festa reúne, em um só espaço, música, cultura, tradição, esportes e o fortalecimento do agronegócio.',
      'A programação de shows confirmados deste ano promete atrair grande público com uma seleção de artistas consagrados do sertanejo e do pagode, além de nomes que vêm ganhando destaque no cenário nacional.',
      'A abertura, no dia 8, contará com apresentações de Clube da Viola, celebrando 30 anos de carreira, e da consagrada dupla Edson & Hudson.',
      'No dia seguinte (9), feriado, o palco recebe o cantor Dilsinho, um dos principais nomes do pagode atual.',
      'Na sexta-feira (10), o público poderá acompanhar os shows de Júnior & Cezar e Jads & Jadson, conhecidos por seu repertório sertanejo marcante.',
      'Já no sábado (11), sobem ao palco Felipe & Rodrigo e o projeto Country Beat, trazendo ainda mais diversidade musical ao evento.',
      'Encerrando a programação, no domingo (12), a tradição fica por conta de Trio Parada Dura, referência da música sertaneja raiz.',
      'Além das atrações musicais, a Festa do Leite mantém sua programação tradicional, com atividades voltadas ao setor agropecuário, como o torneio leiteiro, exposições de animais, rodeio, provas hípicas, além de espaços com feira de artesanato, parque de diversões e praça de alimentação, oferecendo opções de lazer para toda a família.',
      'A expectativa é de mais uma edição de sucesso, reafirmando a força e a tradição da Festa do Leite no cenário regional. Em breve, programação completa.'
    ],
    date: 'Mar 2026',
    category: 'Shows',
    imageUrl: '/img/festa-do-leite-2026-primeira-noticia.jpeg'
  },
  {
    id: '2',
    slug: 'torneio-leiteiro-tecnologia-genetica',
    title: 'Torneio Leiteiro: Tecnologia e genética de ponta em exposição',
    excerpt: 'Os pavilhões agro receberão o que há de melhor na pecuária nacional.',
    fullText: [
      "O coração da nossa festa, o Torneio Leiteiro, trará novidades tecnológicas para os produtores da região. Este ano, o foco será a sustentabilidade no campo e o melhoramento genético das raças Gir e Holandesa.",
      "Os visitantes poderão acompanhar de perto a rotina dos tratadores e a tecnologia de ordenha robotizada, que será demonstrada em um pavilhão especial. É uma oportunidade única para estudantes e profissionais do agro trocarem experiências.",
      "Além da competição de produtividade, teremos julgamentos de raças e leilões presenciais com transmissão simultânea pela internet, atraindo investidores de todo o país."
    ],
    date: '10 Mai',
    category: 'Agro',
    imageUrl: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    slug: 'infraestrutura-plano-acesso-recinto',
    title: 'Infraestrutura: Novo plano de acesso para facilitar a chegada ao recinto',
    excerpt: 'Medidas visam garantir maior fluidez no trânsito e conforto para os visitantes.',
    fullText: [
      "Para garantir que todos aproveitem a Festa do Leite com tranquilidade, a prefeitura e os órgãos de segurança desenvolveram um novo plano de mobilidade urbana.",
      "Haverá expansão das áreas de estacionamento oficial e a criação de corredores exclusivos para ônibus circulares e veículos de transporte por aplicativo. A sinalização nas avenidas de acesso também será reforçada.",
      "Dentro do recinto, as praças de alimentação foram reorganizadas para oferecer mais espaço e conforto, com novas áreas de descanso e acessibilidade completa em todos os setores."
    ],
    date: '05 Mai',
    category: 'Serviço',
    imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800'
  }
];

export function getNewsBySlug(slug: string | undefined): NewsItem | undefined {
  if (!slug) return undefined;
  return NEWS_DATA.find((n) => n.slug === slug);
}

export const PERFORMERS: Performer[] = [
  { name: 'Clube da Viola', date: '08 Jul · qua', imageUrl: 'https://picsum.photos/seed/clubedaviola/800/1000' },
  { name: 'Edson & Hudson', date: '08 Jul · qua', imageUrl: 'https://picsum.photos/seed/edsonhudson/800/1000' },
  { name: 'Dilsinho', date: '09 Jul · qui', imageUrl: 'https://picsum.photos/seed/dilsinho/800/1000' },
  { name: 'Júnior & Cezar', date: '10 Jul · sex', imageUrl: 'https://picsum.photos/seed/juniorcezar/800/1000' },
  { name: 'Jads & Jadson', date: '10 Jul · sex', imageUrl: 'https://picsum.photos/seed/jadsjadson/800/1000' },
  { name: 'Felipe & Rodrigo', date: '11 Jul · sáb', imageUrl: 'https://picsum.photos/seed/feliperodrigo/800/1000' },
  { name: 'Country Beat', date: '11 Jul · sáb', imageUrl: 'https://picsum.photos/seed/countrybeat/800/1000' },
  { name: 'Trio Parada Dura', date: '12 Jul · dom', imageUrl: 'https://picsum.photos/seed/trioparadadura/800/1000' }
];

export const SPONSORS: Sponsor[] = [
  { name: "Ambev", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Ambev_logo.svg" },
  { name: "Rizatti", logoUrl: "https://picsum.photos/seed/rizatti/200/100" },
  { name: "Sindicato Rural", logoUrl: "https://picsum.photos/seed/sindicato/200/100" },
];

export const POINTS_OF_SALE: PointOfSale[] = [
  { name: "Q2 Ingressos", logoUrl: "https://picsum.photos/seed/q2/100/100" },
  { name: "Nori", logoUrl: "https://picsum.photos/seed/nori/100/100" },
  { name: "Real", logoUrl: "https://picsum.photos/seed/real/100/100" },
  { name: "Última Hora", logoUrl: "https://picsum.photos/seed/hora/100/100" },
];

export const CONTACT_DEPARTMENTS = [
  { name: "Prefeitura de Batatais", email: "", phone: "(16) 3660-3400", icon: "Briefcase" },
  { name: "Secretaria de Cultura e Turismo", email: "", phone: "(16) 3660-3483", icon: "Megaphone" },
  { name: "Sindicato Rural de Batatais", email: "", phone: "(16) 3761-2744", icon: "Headphones" },
];

export const FESTIVAL_VENUE = {
  name: "Centro de Eventos Antônio Carlos Prado Baptista",
  address: "Av. Moacir Dias de Morais, s/n - Batatais - SP",
  description: "Recinto amplo e bem estruturado com pavilhões para animais, arenas de rodeio e shows, praça de alimentação, parque de diversões, espaço empresarial e feira de artes e artesanato."
};

export const FESTIVAL_SOCIAL_MEDIA = {
  instagram: "https://www.instagram.com/festadoleitedebatataisoficial",
  facebook: "https://www.facebook.com/festadoleiteoficial",
  website: "https://www.batatais.sp.gov.br"
};

// Informações sobre Batatais
export const BATATAIS_INFO = {
  foundation: {
    date: "5 de agosto de 1728",
    officialInstallation: "1839",
    nameOrigin: "Extensas plantações de batatas (ou batatas-doces) cultivadas pelos indígenas locais, descobertas pelos primeiros bandeirantes e colonizadores"
  },
  geography: {
    region: "Nordeste do Estado de São Paulo",
    metropolitanRegion: "Região Metropolitana de Ribeirão Preto",
    population: "58.402 habitantes (Censo IBGE 2022)",
    altitude: "862 metros",
    climate: "Tropical de altitude"
  },
  economy: {
    mainSectors: ["Agronegócio", "Cana-de-açúcar", "Produção de leite", "Café"],
    mainCompany: "Usina Batatais",
    pibPerCapita: "Superior à média nacional"
  },
  title: "Estância Turística",
  distances: {
    ribeiraoPreto: "44 km",
    saoPaulo: "360 km",
    franca: "50 km"
  },
  highways: {
    main: "Rodovia Cândido Portinari (SP-334)",
    secondary: "Rodovia Altino Arantes (SP-351)"
  },
  climateJuly: {
    minTemp: "13°C",
    maxTemp: "25°C",
    season: "Inverno seco",
    precipitation: "Baixa - um dos períodos mais secos do ano",
    tips: "Levar agasalhos para a noite, roupas leves e protetor solar durante o dia"
  },
  emergencyContacts: {
    police: "190",
    samu: "192",
    fireDepartment: "193",
    upa: "(16) 3660-3100"
  }
};

export const PERSONALITIES = [
  {
    name: "Altino Arantes Marques",
    role: "Décimo governador do Estado de São Paulo",
    period: "1916 a 1920",
    description: "Nascido em Batatais em 1876, também foi deputado federal por quatro mandatos."
  },
  {
    name: "José Olympio",
    role: "Editor brasileiro",
    description: "Nascido em Batatais em 1902, fundador da Livraria José Olympio Editora, uma das mais importantes do país."
  },
  {
    name: "Washington Luís",
    role: "Ex-presidente do Brasil",
    period: "1926-1930",
    description: "Embora não tenha nascido em Batatais, é patrono do Museu Histórico e Pedagógico da cidade, tendo forte ligação com a história local."
  },
  {
    name: "Cândido Portinari",
    role: "Pintor modernista brasileiro",
    description: "Nascido em Brodowski (cidade vizinha), deixou um legado artístico inestimável em Batatais, com o maior acervo de suas obras sacras abrigado no Santuário Senhor Bom Jesus da Cana Verde."
  }
];

export const FESTIVAL_DETAILS = {
  organization: "Parceria entre a Prefeitura da Estância Turística de Batatais (Secretaria de Cultura e Turismo) e o Sindicato Rural",
  attendance: "Mais de 100 mil visitantes",
  tournament: {
    name: "Torneio Leiteiro Nacional Multirraças 'Gilberto Meirelles'",
    prizes: "Mais de R$ 90 mil em prêmios",
    races: ["Gir Leiteiro", "Holandesa", "Girolando"],
    activities: ["Exposição Regional do Cavalo Mangalarga Marchador", "Shopping de Raças", "Desfile de Raças Leiteiras"]
  },
  rodeo: {
    league: "Liga Nacional de Rodeios (LNR)",
    final: "Campeão garante vaga para a final em Barretos",
    events: ["Team Roping", "Team Penning", "Três Tambores"]
  },
  traditions: {
    court: "Eleição da Corte da Festa (Rainha, Princesas, Garota e Garoto Country)",
    parade: "Desfile Típico de Abertura com tropas, carros de boi e alegorias das escolas de samba locais"
  },
  gastronomy: {
    specialties: ["Derivados do leite", "Pratos à base de batatas do IAC", "Pratos à base de milho", "Culinária caipira"],
    structure: "Praça de alimentação com barracas de entidades assistenciais e restaurantes comerciais"
  },
  tickets: {
    types: ["Pista", "Camarotes VIP"],
    freeDays: "Primeiro e último dia geralmente têm entrada gratuita",
    sales: "Pontos físicos na cidade e região, bem como online"
  },
  security: {
    measures: ["Monitoramento por câmeras", "Polícia Militar", "Guarda Civil", "Segurança privada"],
    medical: "Posto médico disponibilizado dentro do recinto para atendimento de emergências"
  }
};

export const TOURIST_ATTRACTIONS: TouristAttraction[] = [
  {
    id: 'santuario',
    name: 'Santuário Senhor Bom Jesus da Cana Verde',
    description: 'O marco inicial da formação urbana de Batatais e o principal patrimônio histórico da cidade. Abriga o maior acervo de obras sacras de Cândido Portinari do mundo, com 28 obras incluindo a Via Sacra completa.',
    fullDescription: [
      'O Santuário Senhor Bom Jesus da Cana Verde é o marco inicial da formação urbana de Batatais, com suas primeiras edificações residenciais e comerciais erguidas em seu entorno. Construído a partir de 1893, o prédio passou por três importantes reformas, evoluindo do estilo colonial para o neogótico e, atualmente, apresentando um imponente estilo neoclássico.',
      'Tombado como patrimônio histórico pelo Condephaat, o santuário possui belíssimos vitrais elaborados pela firma paulista de Conrado Sorgenicht. O grande destaque é o maior acervo de obras sacras do renomado pintor Cândido Portinari, totalizando 28 obras. Isso inclui 14 quadros da Via Sacra, além de painéis como o Batismo de Jesus, A Transfiguração, A Fuga para o Egito, A Sagrada Família, o Altar-Mor (com o Senhor Bom Jesus e doze apóstolos), os Milagres de Nossa Senhora Aparecida e São Sebastião.',
      'Ao lado da escadaria de entrada, encontra-se a escultura "Portinari e seus Azuis", idealizada e doada pelo museólogo peruano Manuel Julio Vera Del Carpio. O santuário é um dos principais pontos turísticos religiosos e culturais de Batatais, atraindo visitantes de todo o país interessados em arte sacra e história.'
    ],
    address: 'Praça Cônego Joaquim Alves - Centro, Batatais - SP',
    imageUrl: '/img/Santuário Senhor Bom Jesus da Cana Verde.jpg',
    category: 'Religioso',
    openingHours: 'Consulte horários de missas e visitação',
    phone: '(16) 3761-0000'
  },
  {
    id: 'museu',
    name: 'Museu Histórico e Pedagógico Dr. Washington Luis',
    description: 'Inaugurado em 1957, cultua a memória e história de Washington Luís, ex-presidente do Brasil. Abriga objetos pessoais, peças da vida interiorana paulista dos séculos XIX e XX, vasta hemeroteca e fotografias.',
    fullDescription: [
      'Inaugurado em 15 de setembro de 1957, o Museu Histórico e Pedagógico "Dr. Washington Luis" cultua a memória e a história de seu patrono, Washington Luís, ex-presidente do Brasil (1926-1930).',
      'Seu acervo inclui objetos pessoais do patrono, peças da vida interiorana paulista dos séculos XIX e XX, uma vasta hemeroteca (jornais desde 1899) e fotografias. O museu busca difundir conceitos de identidade, memória e patrimônio, oferecendo ações didático-educativas e culturais.',
      'O museu está situado no prédio da antiga estação da Mogiana, que hoje é a Estação Cultura Editor José Olympio, um importante centro cultural da cidade.'
    ],
    address: 'Praça Dr. Antônio Teodoro de Lima, s/n - Bairro Castelo, Batatais - SP',
    imageUrl: '/img/Museu Histórico e Pedagógico Dr. Washington Luis.jpg',
    category: 'Histórico',
    openingHours: 'Consulte horários de funcionamento',
    phone: '(16) 3660-3483'
  },
  {
    id: 'galeria',
    name: 'Galeria Con Silva Naïf',
    description: 'Inaugurada em 2023, abriga cerca de 100 obras de arte naïf doadas pela artista batataense Con Silva e outros artistas nacionais e internacionais.',
    fullDescription: [
      'Localizada no interior do Museu Histórico e Pedagógico Dr. Washington Luís, a Galeria Con Silva Naïf foi inaugurada em 22 de março de 2023.',
      'Abriga cerca de 100 obras de arte naïf doadas pela artista batataense Con Silva e outros artistas nacionais e internacionais, representando a diversidade da Arte Naïf.',
      'A galeria oferece uma experiência única de contemplação da arte popular brasileira e internacional, sendo um espaço importante para a valorização da cultura local.'
    ],
    address: 'Praça Dr. Antônio Teodoro de Lima, s/n - Bairro Castelo, Batatais - SP',
    imageUrl: '/img/Galeria Con Silva Naïf.jpg',
    category: 'Cultural',
    openingHours: 'Consulte horários de funcionamento',
    phone: '(16) 3660-3483'
  },
  {
    id: 'estacao-cultura',
    name: 'Estação Cultura Editor José Olympio',
    description: 'Antiga estação da Mogiana, este complexo cultural sedia o Museu Dr. Washington Luís, a Galeria Con Silva e a Biblioteca Municipal Dr. Altino Arantes.',
    fullDescription: [
      'A Estação Cultura Editor José Olympio é um complexo cultural que ocupa o prédio da antiga estação da Mogiana, preservando a memória ferroviária da região.',
      'O complexo sedia o Museu Histórico e Pedagógico Dr. Washington Luís, a Galeria Con Silva Naïf e a Biblioteca Municipal Dr. Altino Arantes, sendo um importante centro para eventos culturais e educacionais.',
      'O espaço representa a valorização do patrimônio histórico e cultural de Batatais, oferecendo uma programação diversificada durante todo o ano.'
    ],
    address: 'Praça Dr. Antônio Teodoro de Lima, s/n - Bairro Castelo, Batatais - SP',
    imageUrl: '/img/Estação Cultura Editor José Olympio.jpg',
    category: 'Cultural',
    openingHours: 'Consulte horários de funcionamento',
    phone: '(16) 3660-3483'
  },
  {
    id: 'lago',
    name: 'Lago Artificial Ophélia Borges Silva Alves',
    description: 'Construído na década de 1980, é um espaço de lazer e convivência na área central da cidade, cercado por plantas nativas e com academia ao ar livre.',
    fullDescription: [
      'Construído na década de 1980, o Lago Artificial Ophélia Borges Silva Alves é um espaço de lazer e convivência na área central da cidade.',
      'É cercado por plantas nativas e oferece academia ao ar livre, parque infantil, calçadão para caminhada, uma fonte central e obras em azulejo do artista plástico Roberto Bergamo.',
      'O lago é um ponto de encontro para famílias e moradores, oferecendo tranquilidade e contato com a natureza no coração da cidade.'
    ],
    address: 'Avenida João Luis de Oliveira, Batatais - SP',
    imageUrl: '/img/Lago Artificial Ophélia Borges Silva Alves.jpg',
    category: 'Natural',
    openingHours: 'Acesso livre 24 horas',
    phone: ''
  },
  {
    id: 'paroquia-fatima',
    name: 'Paróquia Nossa Senhora de Fátima',
    description: 'Igreja católica localizada na cidade, oferecendo missas regulares e atividades pastorais para a comunidade.',
    fullDescription: [
      'A Paróquia Nossa Senhora de Fátima é uma das igrejas católicas de Batatais, oferecendo missas regulares e atividades pastorais para a comunidade local.',
      'A igreja faz parte do patrimônio religioso da cidade e contribui para a vida espiritual dos moradores e visitantes.'
    ],
    address: 'Av. dos Rouxinóis, 175, Batatais - SP',
    imageUrl: '/img/Paróquia Nossa Senhora de Fátima.jpg',
    category: 'Religioso',
    openingHours: 'Consulte horários de missas',
    phone: ''
  },
  {
    id: 'paroquia-sebastiao',
    name: 'Paróquia São Sebastião',
    description: 'Igreja católica localizada na Vila Maria, oferecendo missas e atividades pastorais para a comunidade.',
    fullDescription: [
      'A Paróquia São Sebastião está localizada na Vila Maria, sendo uma das igrejas católicas importantes de Batatais.',
      'A igreja oferece missas regulares e atividades pastorais, servindo a comunidade local e visitantes.'
    ],
    address: 'Praça Pio XII, s/n – Vila Maria, Batatais - SP',
    imageUrl: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&q=80&w=1200',
    category: 'Religioso',
    openingHours: 'Consulte horários de missas',
    phone: ''
  },
  {
    id: 'coracao-maria',
    name: 'Coração de Maria',
    description: 'Igreja católica localizada na cidade, oferecendo missas e atividades pastorais.',
    fullDescription: [
      'A igreja Coração de Maria é uma das igrejas católicas de Batatais, oferecendo missas regulares e atividades pastorais para a comunidade.',
      'A igreja contribui para o patrimônio religioso e espiritual da cidade.'
    ],
    address: 'Rua Claret, 441, Batatais - SP',
    imageUrl: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&q=80&w=1200',
    category: 'Religioso',
    openingHours: 'Consulte horários de missas',
    phone: ''
  },
  {
    id: 'capela-menino-jesus',
    name: 'Capela Menino Jesus de Praga e São Benedito',
    description: 'Capela católica localizada no bairro Riachuelo, dedicada ao Menino Jesus de Praga e São Benedito, oferecendo missas e atividades pastorais para a comunidade.',
    fullDescription: [
      'A Capela Menino Jesus de Praga e São Benedito está localizada no bairro Riachuelo, sendo um importante espaço de fé e devoção na cidade de Batatais.',
      'A capela é dedicada ao Menino Jesus de Praga e a São Benedito, oferecendo missas regulares e atividades pastorais que servem a comunidade local e visitantes.',
      'O espaço contribui para o patrimônio religioso da cidade, proporcionando um ambiente de oração e espiritualidade para os fiéis.'
    ],
    address: 'Praça Álvaro Cardoso, 1 - Riachuelo, Batatais - SP, 14300-000',
    imageUrl: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&q=80&w=1200',
    category: 'Religioso',
    openingHours: 'Consulte horários de missas',
    phone: '(16) 3761-2489'
  },
];

export const ACCOMMODATIONS: Accommodation[] = [
  {
    id: 'castelo-palace',
    name: 'Castelo Palace Hotel',
    type: 'Hotel',
    description: 'Hotel urbano com 40 apartamentos amplos e bem equipados, próximo ao Museu de História. Ideal para quem busca conforto e localização privilegiada.',
    address: 'Av. Quatorze de Março, 1221 - Castelo, Batatais - SP',
    phone: '(16) 3761-3444',
    email: '',
    website: 'https://castelopalace.com.br/',
    imageUrl: '/img/Castelo Palace Hotel.jpg',
    amenities: ['Piscina', 'Terraço', 'Sinuca', 'Wi-Fi', 'Café da manhã', 'Ar-condicionado'],
    priceRange: 'Médio'
  },
  {
    id: 'candeias',
    name: 'Candeias Hotel',
    type: 'Hotel',
    description: 'Hotel 3 estrelas localizado na via principal da cidade, oferecendo conforto e praticidade para visitantes da Festa do Leite.',
    address: 'Av. Quatorze de Março, 1161 - Batatais, SP',
    phone: '(16) 3761-9525',
    email: '',
    website: 'https://www.candeiashotel.com.br/',
    imageUrl: '/img/Candeias Hotel.jpg',
    amenities: ['Lavanderia', 'Wi-Fi', 'Café da manhã', 'Estacionamento'],
    priceRange: 'Médio'
  },
  {
    id: 'pousada-batatais',
    name: 'Pousada Batatais',
    type: 'Pousada',
    description: 'Pousada rural com pesqueiro e área verde, ideal para quem busca tranquilidade e contato com a natureza durante a estadia.',
    address: 'Rodovia Altino Arantes, Km 35 - Batatais, SP',
    phone: '',
    email: '',
    imageUrl: '/img/Hotel Fazenda Vale das Grutas.jpg',
    amenities: ['Pesqueiro', 'Área verde', 'Ambiente familiar'],
    priceRange: 'Econômico'
  },
  {
    id: 'hotel-ricci',
    name: 'Hotel Ricci',
    type: 'Hotel',
    description: 'Hotel econômico no centro da cidade, com fácil acesso ao comércio e serviços. Ideal para quem busca praticidade e localização central.',
    address: 'Av. Dr. Oswaldo Scatena, 537 - Centro, Batatais - SP',
    phone: '(16) 3761-2248',
    email: '',
    imageUrl: '/img/Hotel Ricci.jpg',
    amenities: ['Wi-Fi', 'Café da manhã simples'],
    priceRange: 'Econômico'
  },
  {
    id: 'pousada-14-marco',
    name: 'Pousada 14 de Março',
    type: 'Pousada',
    description: 'Pousada urbana localizada na avenida principal da cidade, oferecendo conforto e acesso fácil aos principais pontos da cidade.',
    address: 'Av. Quatorze de Março, 1400 - Centro, Batatais - SP',
    phone: '',
    email: '',
    imageUrl: '/img/Pousada 14 de Março.jpg',
    amenities: ['Wi-Fi', 'Café da manhã'],
    priceRange: 'Econômico'
  },
  {
    id: 'hotel-fazenda-grutas',
    name: 'Hotel Fazenda Vale das Grutas',
    type: 'Hotel',
    description: 'Hotel fazenda próximo ao Centro de Eventos, oferecendo lazer rural, piscinas e atividades para toda a família.',
    address: 'Rodovia Altinópolis-Batatais, Km 20 - Batatais, SP',
    phone: '',
    email: '',
    imageUrl: '/img/Hotel Fazenda Vale das Grutas.jpg',
    amenities: ['Lazer rural', 'Piscinas', 'Atividades recreativas'],
    priceRange: 'Médio'
  }
];
