
import React, { useState, useEffect, useMemo } from 'react';
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
  useParams,
  Link
} from 'react-router-dom';
import { 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  Youtube,
  ArrowRight,
  ChevronRight,
  Clock,
  Star,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ArrowLeft,
  Share2,
  Calendar,
  Zap,
  Coffee,
  Heart,
  Trophy,
  Music,
  Church,
  Hotel,
  Map,
  Camera,
  Wifi,
  Car,
  UtensilsCrossed,
  Waves,
  Dumbbell,
  Users,
  Building2
} from 'lucide-react';
import { 
  FESTIVAL_NAME, 
  FESTIVAL_CITY, 
  FESTIVAL_SLOGAN,
  FESTIVAL_DATES,
  FESTIVAL_EDITION,
  TICKET_SALES_URL,
  PROGRAM_DAY_LABELS,
  PERFORMERS, 
  NEWS_DATA,
  TOURIST_ATTRACTIONS,
  ACCOMMODATIONS,
  BATATAIS_INFO,
  PERSONALITIES,
  FESTIVAL_DETAILS,
  FESTIVAL_VENUE,
  getNewsBySlug
} from './constants';

type ArticlePageProps = {
  scrollToSection: (id: string) => void;
};

const renderParagraphWithLinks = (paragraph: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const singleUrlRegex = /^https?:\/\/[^\s]+$/;
  const parts = paragraph.split(urlRegex);

  return parts.map((part, idx) => {
    if (singleUrlRegex.test(part)) {
      return (
        <a
          key={`${part}-${idx}`}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-500 underline underline-offset-4 hover:text-amber-400 break-all"
        >
          {part}
        </a>
      );
    }

    return <React.Fragment key={`${part}-${idx}`}>{part}</React.Fragment>;
  });
};

const ArticlePage: React.FC<ArticlePageProps> = ({ scrollToSection }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = getNewsBySlug(slug);
  const openTicketSales = () => window.open(TICKET_SALES_URL, '_blank', 'noopener,noreferrer');

  if (!article) {
    return <Navigate to="/noticias" replace />;
  }

  return (
    <section className="pt-32 md:pt-48 pb-24 md:pb-40 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-6 mb-12 border-b border-white/10 pb-8">
          <button
            type="button"
            onClick={() => navigate('/noticias')}
            className="group flex items-center gap-3 text-neutral-400 hover:text-amber-500 transition-colors font-bold uppercase text-[10px] tracking-widest"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" /> Voltar ao Portal
          </button>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-neutral-500 text-[10px] font-bold uppercase tracking-widest">
              <Calendar size={16} /> Publicado em {article.date}
            </div>
            <button type="button" className="text-neutral-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full">
              <Share2 size={18} />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-6">
              <span className="bg-amber-600 text-white px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest inline-block mb-4 shadow-lg">
                {article.category}
              </span>
              <h1 className="text-5xl md:text-7xl font-oswald uppercase leading-[1.05] tracking-tight">{article.title}</h1>
            </div>

            <div className="aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative">
              <img
                src={article.imageUrl}
                alt={`${article.title} - Notícia Festa do Leite Batatais`}
                className="w-full h-full object-cover"
                width="1200"
                height="675"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="space-y-8 text-neutral-300 text-xl md:text-2xl leading-[1.6] font-light">
              {article.fullText.map((paragraph, i) => (
                <p key={i} className="first-letter:text-5xl first-letter:font-oswald first-letter:text-amber-500 first-letter:mr-3 first-letter:float-left">
                  {renderParagraphWithLinks(paragraph)}
                </p>
              ))}
            </div>

            {article.fullImageUrl && (
              <div className="rounded-[2.5rem] border border-white/10 bg-black/30 p-4 md:p-6 shadow-2xl">
                <img
                  src={article.fullImageUrl}
                  alt={`${article.title} - arte completa`}
                  className="w-full h-auto object-contain rounded-[2rem]"
                  loading="lazy"
                />
              </div>
            )}

            <div className="bg-neutral-900/40 p-12 rounded-[3rem] border border-white/5 mt-20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 -rotate-12">
                <Zap size={160} />
              </div>
              <h4 className="text-3xl font-oswald uppercase mb-4 text-amber-500">Mantenha-se Informado</h4>
              <p className="text-neutral-400 text-lg mb-8 font-light">Receba atualizações exclusivas sobre a programação diretamente no seu e-mail.</p>
              <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                <input
                  type="email"
                  placeholder="Endereço de e-mail"
                  className="bg-white/5 border border-white/10 rounded-2xl px-8 py-5 flex-grow outline-none focus:border-amber-600 transition-all font-light"
                />
                <button
                  type="button"
                  className="bg-white text-black font-oswald uppercase px-12 py-5 rounded-2xl hover:bg-amber-500 hover:text-white transition-all transform active:scale-95 shadow-lg"
                >
                  Inscrever
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-40 space-y-16">
              <div className="space-y-10">
                <h4 className="font-oswald uppercase text-amber-500 tracking-widest text-sm flex items-center gap-3">
                  <div className="h-px w-8 bg-amber-600"></div> Leia Também
                </h4>
                <div className="space-y-12">
                  {NEWS_DATA.filter((n) => n.id !== article.id).map((news) => (
                    <button
                      type="button"
                      key={news.id}
                      onClick={() => navigate(`/noticias/${news.slug}`)}
                      className="group flex flex-col text-left space-y-5"
                    >
                      <div className="aspect-video rounded-3xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shadow-xl border border-white/5">
                        <img
                          src={news.imageUrl}
                          alt={`${news.title} - Leia também Festa do Leite Batatais`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                          width="400"
                          height="225"
                          loading="lazy"
                        />
                      </div>
                      <h5 className="font-oswald uppercase text-2xl leading-tight group-hover:text-amber-500 transition-colors line-clamp-2">{news.title}</h5>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-amber-600 p-10 rounded-[3rem] text-white shadow-2xl">
                <h4 className="text-2xl font-oswald uppercase mb-4">Ingressos</h4>
                <p className="text-white/80 text-sm mb-8 font-light leading-relaxed">
                  Garanta sua presença no maior evento da região com condições exclusivas online.
                </p>
                <button
                  type="button"
                  onClick={openTicketSales}
                  className="w-full bg-black text-white py-5 rounded-2xl font-oswald uppercase text-sm tracking-widest hover:bg-neutral-800 transition-all transform active:scale-95 shadow-xl"
                >
                  Comprar Agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDay, setActiveDay] = useState<string>(PROGRAM_DAY_LABELS[0]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const isNavActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (location.pathname === '/' && scrollTo) {
      const t = window.setTimeout(() => {
        document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' });
        navigate('.', { replace: true, state: {} });
      }, 150);
      return () => window.clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.state, navigate]);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  const openTicketSales = () => {
    setIsMenuOpen(false);
    window.open(TICKET_SALES_URL, '_blank', 'noopener,noreferrer');
  };

  const currentPerformers = useMemo(() => {
    return PERFORMERS.filter(p => p.date === activeDay);
  }, [activeDay]);

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-white selection:bg-amber-400 selection:text-black font-sans overflow-x-hidden">
      {/* Premium Navigation */}
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled || location.pathname !== '/' ? 'bg-black/95 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl' : 'bg-transparent py-5 md:py-8'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3 md:gap-4 group cursor-pointer" onClick={() => setIsMenuOpen(false)}>
            <div className="relative">
              <img 
                src="/img/logo-festa.png" 
                alt={`${FESTIVAL_NAME} ${FESTIVAL_CITY} - Logo Oficial`}
                className="w-10 md:w-14 h-10 md:h-14 object-contain group-hover:scale-105 transition-transform"
                width="56"
                height="56"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="leading-tight hidden sm:block">
              <span className="block font-oswald text-lg md:text-xl tracking-widest uppercase">{FESTIVAL_NAME}</span>
              <span className="block text-[8px] md:text-[10px] text-amber-500 uppercase tracking-[0.2em] font-bold">{FESTIVAL_CITY}</span>
            </div>
          </Link>

          <div className="hidden lg:flex gap-6 xl:gap-8 text-[11px] font-bold uppercase tracking-[0.2em] items-center relative z-10">
            {[
              { label: 'Início', to: '/' },
              { label: 'Notícias', to: '/noticias' },
              { label: 'Turismo', to: '/turismo' },
              { label: 'Hospedagem', to: '/hospedagem' },
              { label: 'Batatais', to: '/batatais' },
              { label: 'Sobre', to: '/sobre' },
              { label: 'Contato', to: '/contato' }
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`hover:text-amber-500 transition-colors relative group py-2 whitespace-nowrap ${isNavActive(item.to) ? 'text-amber-500' : ''}`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 transform transition-transform duration-300 ${isNavActive(item.to) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
            ))}
            <button 
              onClick={openTicketSales}
              className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-500 transition-all transform hover:scale-105 active:scale-95 font-oswald text-sm shadow-[0_0_20px_rgba(217,119,6,0.3)] whitespace-nowrap"
              aria-label="Garantir ingressos para a Festa do Leite"
            >
              Garantir Ingresso
            </button>
          </div>

          <button 
            className="lg:hidden p-2 text-white bg-white/5 rounded-full hover:bg-white/10 transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-black/98 backdrop-blur-2xl transition-all duration-500 flex flex-col items-center justify-center gap-8 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {[
            { to: '/', label: 'Início' },
            { to: '/noticias', label: 'Notícias' },
            { to: '/turismo', label: 'Turismo' },
            { to: '/hospedagem', label: 'Hospedagem' },
            { to: '/batatais', label: 'Batatais' },
            { to: '/sobre', label: 'Sobre' },
            { to: '/contato', label: 'Contato' }
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl md:text-6xl font-oswald uppercase hover:text-amber-500 transition-colors"
              aria-label={`Navegar para página ${label}`}
            >
              {label}
            </Link>
          ))}
          <button 
            onClick={openTicketSales}
            className="bg-amber-600 text-white px-12 py-5 rounded-full font-oswald text-2xl mt-8 shadow-2xl"
            aria-label="Comprar ingressos online"
          >
            Comprar Online
          </button>
          <button 
            onClick={() => setIsMenuOpen(false)} 
            className="mt-12 text-white/30 hover:text-white uppercase tracking-widest text-xs font-bold flex items-center gap-2"
            aria-label="Fechar menu de navegação"
          >
            <X size={16} aria-hidden="true"/> Fechar
          </button>
      </div>

      <main className="flex-grow">
        <Routes>
        <Route
          path="/"
          element={
          <>
            {/* Hero Section - Reimagined */}
            <section
              className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat md:bg-fixed"
              style={{ backgroundImage: "url('/img/hero.jpg')" }}
            >
              <div className="absolute inset-0 z-0">
                {/* Overlays para contraste de texto */}
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40 z-20"></div>
              </div>

              <div className="container mx-auto px-4 md:px-6 z-30 text-center relative">
                <div className="max-w-6xl mx-auto space-y-3 md:space-y-4 pt-20 md:pt-24">
                  <div className="flex justify-center mb-2 md:mb-3 animate-fade-in-up">
                    <img 
                      src="/img/logo-festa.png" 
                      alt={`${FESTIVAL_NAME} ${FESTIVAL_CITY} - Logo Oficial`}
                      className="w-24 md:w-36 lg:w-40 h-auto object-contain drop-shadow-2xl"
                      width="160"
                      height="160"
                      loading="eager"
                      fetchPriority="high"
                    />
                  </div>
                  <div className="flex justify-center items-center gap-3 md:gap-4 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                    <div className="h-px w-8 md:w-12 bg-amber-600/50"></div>
                    <span className="text-amber-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] md:tracking-[0.5em]">A Maior Tradição de Batatais</span>
                    <div className="h-px w-8 md:w-12 bg-amber-600/50"></div>
                  </div>
                  <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-oswald uppercase leading-[0.9] tracking-tighter text-glow drop-shadow-2xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    FESTA DO <br />
                    <span className="text-amber-500">LEITE</span>
                  </h1>
                  <p className="text-sm md:text-lg lg:text-xl font-playfair italic text-white/90 max-w-3xl mx-auto px-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    "{FESTIVAL_SLOGAN}"
                  </p>
                  <p className="text-xs md:text-sm font-oswald uppercase tracking-[0.25em] text-amber-500/90 max-w-3xl mx-auto px-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                    {FESTIVAL_EDITION} · {FESTIVAL_DATES}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4 md:pt-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                    <button 
                      onClick={openTicketSales}
                      className="group flex items-center justify-center gap-2 bg-white text-black px-8 md:px-10 py-3 md:py-4 rounded-full font-oswald text-sm md:text-base uppercase tracking-widest hover:bg-amber-500 hover:text-white transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                      aria-label="Comprar ingressos online para a Festa do Leite"
                    >
                      Comprar Online <ArrowRight size={18} className="group-hover:translate-x-1" aria-hidden="true" />
                    </button>
                    <button 
                      onClick={() => scrollToSection('programação')} 
                      className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 px-8 md:px-10 py-3 md:py-4 rounded-full text-white font-oswald text-sm md:text-base uppercase tracking-widest hover:bg-white/10 transition-all"
                      aria-label="Ver programação completa de shows"
                    >
                      Ver Programação
                    </button>
                  </div>
                </div>
              </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-30 text-white/30">
                <ArrowLeft size={24} className="md:w-8 md:h-8 -rotate-90" />
              </div>
            </section>

            {/* Experience Section */}
            <section className="py-24 md:py-40 bg-[#050505] relative">
              <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                   {[
                     { Icon: Trophy, title: "Torneio Leiteiro", desc: "A elite da genética e produtividade leiteira em exposition técnica." },
                     // Line 181: Icon: Music is now defined because it's imported from lucide-react
                     { Icon: Music, title: "Grandes Shows", desc: "Os maiores nomes do cenário nacional no palco principal." },
                     { Icon: Coffee, title: "Gastronomia", desc: "Uma praça de alimentação completa com o melhor da culinária local." },
                     { Icon: Zap, title: "Diversão", desc: "Parque de diversões de última geração para toda a família." }
                   ].map((item, i) => (
                     <div key={i} className="group p-8 rounded-[2.5rem] bg-neutral-900/30 border border-white/5 hover:border-amber-600/30 transition-all duration-500 hover:-translate-y-2">
                       <div className="w-16 h-16 bg-amber-600/10 rounded-2xl flex items-center justify-center text-amber-500 mb-8 border border-amber-600/20 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                         <item.Icon size={32} />
                       </div>
                       <h2 className="text-2xl font-oswald uppercase mb-4">{item.title}</h2>
                       <p className="text-neutral-500 leading-relaxed text-sm">{item.desc}</p>
                     </div>
                   ))}
                </div>
              </div>
            </section>

            {/* Programação Section - Mantida Conforme Pedido */}
            <section id="programação" className="py-24 md:py-32 bg-[#080808] border-y border-white/5">
              <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                  <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
                    <p className="text-amber-500 font-oswald text-sm uppercase tracking-[0.4em] mb-4" role="text">Agenda</p>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-oswald uppercase mb-6 md:mb-8 leading-none">Quem Sobe <br className="hidden lg:block" />ao Palco</h2>
                    
                    <div className="flex lg:flex-col gap-3 md:gap-4 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
                      {PROGRAM_DAY_LABELS.map((day, dayIndex) => (
                        <button 
                          key={`${day}-${dayIndex}`}
                          onClick={() => setActiveDay(day)}
                          className={`flex items-center justify-between px-6 py-4 md:px-8 md:py-5 rounded-xl border transition-all duration-300 whitespace-nowrap lg:whitespace-normal flex-shrink-0 lg:flex-shrink-1 ${activeDay === day ? 'bg-amber-600 border-amber-600 shadow-lg lg:translate-x-4' : 'bg-transparent border-white/10 hover:border-white/30'}`}
                        >
                          <span className="font-oswald text-lg md:text-xl uppercase tracking-widest">{day}</span>
                          <ChevronRight className={`hidden lg:block transition-transform ${activeDay === day ? 'rotate-90' : ''}`} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="w-full lg:w-2/3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                      {currentPerformers.length === 0 ? (
                        <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 shadow-2xl flex flex-col justify-end">
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Music className="text-amber-500/60" size={96} />
                          </div>
                          <div className="relative p-8 md:p-10 w-full">
                            <h3 className="text-3xl md:text-4xl font-oswald uppercase mb-4 text-amber-500">
                              Programação em Breve
                            </h3>
                            <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-light mb-4">
                              A grade completa de shows da próxima edição da Festa do Leite de Batatais ainda está em definição.
                            </p>
                            <p className="text-neutral-500 text-xs md:text-sm leading-relaxed font-light">
                              Acompanhe nossas redes oficiais para ser o primeiro a saber sobre as atrações confirmadas e datas dos
                              shows.
                            </p>
                          </div>
                        </div>
                      ) : (
                        currentPerformers.map((artist, idx) => (
                          <div key={idx} className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 shadow-2xl">
                            <img src={artist.imageUrl} alt={`${artist.name} - Show na Festa do Leite Batatais ${artist.date}`} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-all duration-1000" loading="lazy" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
                              <h3 className="text-3xl md:text-4xl font-oswald uppercase mb-3 group-hover:text-amber-500 transition-colors">{artist.name}</h3>
                              <div className="flex items-center gap-2 text-white/60 text-[10px] md:text-xs uppercase font-bold tracking-widest bg-black/40 backdrop-blur-md w-fit px-4 py-2 rounded-full border border-white/10">
                                <Clock size={14} /> Palco Principal
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-amber-600">
               <div className="container mx-auto px-4 md:px-6">
                 <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    <div>
                      <h4 className="text-5xl md:text-7xl font-oswald text-black mb-2 tracking-tighter">100%</h4>
                      <p className="text-black/60 uppercase font-bold text-[10px] tracking-widest">Tradição</p>
                    </div>
                    <div>
                      <h4 className="text-5xl md:text-7xl font-oswald text-black mb-2 tracking-tighter">250k</h4>
                      <p className="text-black/60 uppercase font-bold text-[10px] tracking-widest">Visitantes</p>
                    </div>
                    <div>
                      <h4 className="text-5xl md:text-7xl font-oswald text-black mb-2 tracking-tighter">30+</h4>
                      <p className="text-black/60 uppercase font-bold text-[10px] tracking-widest">Atrações</p>
                    </div>
                    <div>
                      <h4 className="text-5xl md:text-7xl font-oswald text-black mb-2 tracking-tighter">ELITE</h4>
                      <p className="text-black/60 uppercase font-bold text-[10px] tracking-widest">Genética</p>
                    </div>
                 </div>
               </div>
            </section>

            {/* Ingressos Section */}
            <section id="ingressos" className="py-24 md:py-40 bg-[#050505]">
              <div className="container mx-auto px-4 md:px-6 space-y-16">
                <div className="bg-gradient-to-br from-amber-600 to-amber-900 rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(217,119,6,0.3)]">
                   <div className="absolute top-0 right-0 p-12 opacity-5 rotate-12 hidden md:block">
                     <Calendar size={400} strokeWidth={1} />
                   </div>
                   <div className="relative z-10 max-w-3xl">
                     <h2 className="text-5xl md:text-8xl font-oswald uppercase mb-8 leading-none text-white">Garanta o Seu <br />Lugar na Festa</h2>
                     <p className="text-xl md:text-2xl text-white/90 mb-6 font-light leading-relaxed">
                       A grade oficial de ingressos da próxima edição ainda está em definição. Em breve você encontrará aqui
                       todas as informações sobre categorias, valores e pontos de venda oficiais. A festa ocorre de {FESTIVAL_DATES}.
                     </p>
                     <p className="text-white/90 text-sm md:text-base font-light mb-10">
                       Enquanto isso, acompanhe as redes sociais e os canais oficiais da Prefeitura de Batatais para ficar por
                       dentro dos anúncios da organização.
                     </p>
                     <div className="flex flex-col sm:flex-row gap-6">
                       <button
                        onClick={openTicketSales}
                        className="bg-white/10 text-white px-12 py-5 rounded-full font-oswald text-xl uppercase tracking-widest border border-white/30 hover:bg-white/20 transition-all"
                       >
                         Vendas Online – Em Breve
                       </button>
                       <button
                        onClick={openTicketSales}
                        className="bg-transparent border-2 border-white/30 text-white px-12 py-5 rounded-full font-oswald text-xl uppercase tracking-widest hover:bg-white/10 transition-all"
                       >
                         Pontos Físicos – Em Breve
                       </button>
                     </div>
                   </div>
                </div>

                {/* Informações do Evento / Mapa do Recinto (em breve) */}
                <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
                  <div className="bg-neutral-900/40 rounded-[3rem] p-10 md:p-12 border border-white/5 space-y-6">
                    <h2 className="text-2xl md:text-3xl font-oswald uppercase text-amber-500">
                      Informações do Evento
                    </h2>
                    <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-light">
                      A {FESTIVAL_EDITION} da Festa do Leite de Batatais será realizada entre {FESTIVAL_DATES}, no {FESTIVAL_VENUE.name}.
                      Reconhecida como uma das mais tradicionais festas do interior paulista, a festa reúne música, cultura, tradição
                      e o fortalecimento do agronegócio em um só espaço. Horários de abertura do recinto, programação diária
                      completa e políticas de acesso serão divulgados assim que confirmados oficialmente.
                    </p>
                    <ul className="space-y-3 text-neutral-400 text-sm md:text-base leading-relaxed font-light">
                      <li>
                        • <span className="text-white">Período da festa:</span> {FESTIVAL_DATES} ({FESTIVAL_EDITION}).
                      </li>
                      <li>
                        • <span className="text-white">Abertura e encerramento do recinto:</span> em breve.
                      </li>
                      <li>
                        • <span className="text-white">Estacionamento oficial:</span> informações sobre localização e valores serão
                        divulgadas próximo ao evento.
                      </li>
                      <li>
                        • <span className="text-white">Transporte:</span> linhas especiais de ônibus e orientações de acesso serão
                        comunicadas nos canais oficiais.
                      </li>
                      <li>
                        • <span className="text-white">Itens permitidos e proibidos:</span> regras atualizadas serão publicadas
                        juntamente com o regulamento do evento.
                      </li>
                    </ul>
                    <p className="text-neutral-500 text-xs md:text-sm leading-relaxed font-light">
                      Todas as informações desta página estão sujeitas a alteração até a publicação do regulamento oficial da
                      próxima edição da Festa do Leite.
                    </p>
                  </div>

                  <div className="bg-neutral-900/40 rounded-[3rem] p-10 md:p-12 border border-white/5 space-y-6">
                    <h2 className="text-2xl md:text-3xl font-oswald uppercase text-amber-500">
                      Mapa do Recinto – Em Breve
                    </h2>
                    <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-light">
                      O mapa ilustrativo do recinto da Festa do Leite está em produção e será publicado aqui assim que a
                      distribuição dos espaços for confirmada pela comissão organizadora.
                    </p>
                    <div className="aspect-video rounded-[2rem] border border-dashed border-white/10 bg-neutral-950/60 flex items-center justify-center text-neutral-600 text-xs md:text-sm font-light">
                      Mapa do recinto da próxima edição em desenvolvimento.
                    </div>
                    <ul className="space-y-2 text-neutral-400 text-sm md:text-base leading-relaxed font-light">
                      <li>• Áreas previstas: arena de shows e rodeio, pavilhões agro, parque de diversões, praça de alimentação.</li>
                      <li>• Setores de serviços: banheiros, acessos, estacionamento e pontos de apoio.</li>
                    </ul>
                  </div>
                </div>

                {/* Desfile da Festa e Camarotes */}
                <div id="desfile-camarotes" className="grid lg:grid-cols-2 gap-10 md:gap-16 mt-10 md:mt-16">
                  <div id="desfile" className="bg-neutral-900/40 rounded-[3rem] p-10 md:p-12 border border-white/5 space-y-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Users size={160} className="rotate-12" />
                    </div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-amber-600/10 rounded-2xl flex items-center justify-center text-amber-500 mb-6 border border-amber-600/20">
                        <Users size={32} />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-oswald uppercase text-amber-500 mb-4">
                        Desfile da Festa
                      </h2>
                      <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-light">
                        O tradicional desfile da Festa do Leite sai do <strong className="text-white">Lago Artificial Ophélia Borges Silva Alves</strong>, reunindo tropas, carros de boi e alegorias, e costuma atrair cerca de <strong className="text-amber-500">20 mil pessoas</strong>.
                        Na {FESTIVAL_EDITION}, a abertura oficial no recinto está prevista para o dia 8 de julho; a organização divulgará dia e horário específicos do desfile quando confirmados.
                      </p>
                      <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-light">
                        O desfile é um dos pontos altos da festa, celebrando a cultura rural e a tradição de Batatais, representando a essência do agronegócio e da identidade local.
                      </p>
                      <div className="bg-amber-600/10 border border-amber-600/20 rounded-2xl p-6 mt-6">
                        <div className="flex items-start gap-4">
                          <MapPin className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                          <div className="space-y-2">
                            <p className="text-white font-semibold text-sm uppercase tracking-wider">Local de Saída</p>
                            <p className="text-neutral-300 text-sm font-light">Lago Artificial Ophélia Borges Silva Alves</p>
                            <p className="text-neutral-400 text-xs font-light">Avenida João Luis de Oliveira, Batatais - SP</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-neutral-500 text-xs md:text-sm leading-relaxed font-light mt-4">
                        A data e horário específicos do desfile da {FESTIVAL_EDITION} serão divulgados em breve pela organização.
                      </p>
                    </div>
                  </div>

                  <div id="camarotes" className="bg-neutral-900/40 rounded-[3rem] p-10 md:p-12 border border-white/5 space-y-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Building2 size={160} className="rotate-12" />
                    </div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-amber-600/10 rounded-2xl flex items-center justify-center text-amber-500 mb-6 border border-amber-600/20">
                        <Building2 size={32} />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-oswald uppercase text-amber-500 mb-4">
                        Camarotes
                      </h2>
                      <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-light">
                        Os camarotes da Festa do Leite oferecem uma experiência exclusiva e confortável para empresas, grupos e famílias que desejam aproveitar os shows e eventos com maior comodidade e privacidade.
                      </p>
                      <ul className="space-y-3 text-neutral-400 text-sm md:text-base leading-relaxed font-light">
                        <li>
                          • <span className="text-white">Estrutura VIP:</span> espaços climatizados com vista privilegiada para os shows.
                        </li>
                        <li>
                          • <span className="text-white">Serviços exclusivos:</span> atendimento personalizado, estacionamento reservado e acesso facilitado.
                        </li>
                        <li>
                          • <span className="text-white">Ideal para:</span> empresas que desejam entreter clientes, grupos familiares e quem busca conforto durante o evento.
                        </li>
                      </ul>
                      <div className="bg-neutral-950/60 border border-white/10 rounded-2xl p-6 mt-6">
                        <p className="text-neutral-300 text-sm font-light leading-relaxed">
                          Informações sobre disponibilidade, valores e reservas de camarotes para a próxima edição serão divulgadas em breve pela organização.
                        </p>
                      </div>
                      <p className="text-neutral-500 text-xs md:text-sm leading-relaxed font-light mt-4">
                        Para mais informações sobre camarotes, entre em contato com a Secretaria de Cultura e Turismo de Batatais.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
          }
        />

        <Route path="/noticias" element={
          <section className="pt-32 md:pt-48 pb-24 md:pb-40 px-4">
            <div className="container mx-auto">
              <div className="mb-20 text-center">
                <h1 className="text-6xl md:text-9xl font-oswald uppercase mb-6 drop-shadow-lg">Últimas <span className="text-amber-500">Novidades</span></h1>
                <p className="text-neutral-500 text-lg md:text-xl max-w-2xl mx-auto font-light">Acompanhe as notícias oficiais e atualizações exclusivas.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {NEWS_DATA.map(news => (
                  <article key={news.id} className="bg-neutral-900/20 rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-amber-600/30 transition-all group flex flex-col">
                     <div className="aspect-video overflow-hidden">
                       <img src={news.imageUrl} alt={`${news.title} - Festa do Leite Batatais`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" width="800" height="450" loading="lazy" />
                     </div>
                     <div className="p-10 flex-grow flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                          <span className="text-[10px] bg-amber-600/20 text-amber-500 border border-amber-600/30 px-4 py-1.5 rounded-full font-bold uppercase tracking-widest">{news.category}</span>
                          <span className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest">{news.date}</span>
                        </div>
                       <Link
                         to={`/noticias/${news.slug}`}
                         className="text-2xl md:text-3xl font-oswald uppercase mb-6 leading-tight group-hover:text-amber-500 transition-colors block"
                       >
                         {news.title}
                       </Link>
                        <p className="text-neutral-400 text-sm mb-10 flex-grow leading-relaxed line-clamp-3 font-light">{news.excerpt}</p>
                        <Link
                          to={`/noticias/${news.slug}`}
                          className="flex items-center gap-3 text-white font-bold uppercase text-[10px] tracking-widest hover:text-amber-500 transition-all group/btn w-fit"
                        >
                          Ler reportagem completa <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                        </Link>
                     </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        }
        />

        <Route path="/noticias/:slug" element={<ArticlePage scrollToSection={scrollToSection} />} />

        <Route path="/sobre" element={
          <section className="pt-32 md:pt-48 pb-24 md:pb-40 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-20 space-y-6">
                <h3 className="text-amber-500 font-oswald text-sm uppercase tracking-[0.4em]">Tradição e História</h3>
                <h1 className="text-6xl md:text-9xl font-oswald uppercase leading-[0.85]">{FESTIVAL_NAME} <br /><span className="text-amber-500">A Nossa História</span></h1>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start mb-20">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-oswald uppercase text-amber-500">Uma Tradição que Transcende Gerações</h2>
                    <p className="text-neutral-400 text-xl leading-relaxed font-light">
                      A Festa do Leite de Batatais é um dos eventos mais tradicionais e importantes do interior paulista, celebrando a forte vocação agropecuária da região. Sua história está intrinsecamente ligada à produção leiteira local, que por décadas impulsionou a economia da cidade.
                    </p>
                    <p className="text-neutral-400 text-xl leading-relaxed font-light">
                      A festa evoluiu ao longo dos anos, mantendo suas raízes na cultura rural e incorporando atrações que a tornam um evento completo e diverso para todas as idades. A organização é uma parceria entre a Prefeitura da Estância Turística de Batatais, por meio da Secretaria de Cultura e Turismo, e o Sindicato Rural.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-[4/5] overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl relative z-10">
                    <img
                      src="/img/Festa do Leite - Batatais SP.jpg"
                      className="w-full h-full object-cover"
                      alt="Festa do Leite de Batatais - público e parque de diversões"
                      width="800"
                      height="1000"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-full h-full bg-amber-600/10 rounded-[3rem] -z-10 border border-amber-600/20"></div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-20">
                <div className="bg-neutral-900/30 p-10 rounded-[3rem] border border-white/5">
                  <div className="w-16 h-16 bg-amber-600/10 rounded-2xl flex items-center justify-center text-amber-500 mb-6 border border-amber-600/20">
                    <Trophy size={32} />
                  </div>
                  <h3 className="text-2xl font-oswald uppercase mb-4">Torneio Leiteiro Nacional</h3>
                  <p className="text-neutral-400 leading-relaxed font-light">
                    O <strong>Torneio Leiteiro Nacional Multirraças "Gilberto Meirelles"</strong> é o coração da festa, reunindo criadores de todo o país em uma competição criteriosa de ordenhas. O torneio valoriza a genética e a produtividade do gado leiteiro, distribuindo prêmios significativos e insumos agropecuários. Raças como Gir Leiteiro, Holandesa e Girolando são frequentemente destacadas.
                  </p>
                </div>

                <div className="bg-neutral-900/30 p-10 rounded-[3rem] border border-white/5">
                  <div className="w-16 h-16 bg-amber-600/10 rounded-2xl flex items-center justify-center text-amber-500 mb-6 border border-amber-600/20">
                    <Music size={32} />
                  </div>
                  <h3 className="text-2xl font-oswald uppercase mb-4">Shows e Entretenimento</h3>
                  <p className="text-neutral-400 leading-relaxed font-light">
                    A programação musical é um grande atrativo, com shows de artistas renomados do sertanejo, pagode e outros gêneros. O rodeio é uma etapa importante da <strong>Liga Nacional de Rodeios (LNR)</strong>, onde o campeão garante vaga para a final em Barretos. Tradições incluem a eleição da Corte da Festa e o Desfile Típico de Abertura.
                  </p>
                </div>

                <div className="bg-neutral-900/30 p-10 rounded-[3rem] border border-white/5">
                  <div className="w-16 h-16 bg-amber-600/10 rounded-2xl flex items-center justify-center text-amber-500 mb-6 border border-amber-600/20">
                    <Coffee size={32} />
                  </div>
                  <h3 className="text-2xl font-oswald uppercase mb-4">Gastronomia</h3>
                  <p className="text-neutral-400 leading-relaxed font-light">
                    A gastronomia da Festa do Leite é rica e variada, com forte ligação aos derivados do leite e pratos à base de batatas do IAC, uma tradição local. A praça de alimentação oferece uma ampla variedade de opções, com barracas de entidades assistenciais e restaurantes comerciais, além de especialidades como pratos à base de milho e culinária caipira.
                  </p>
                </div>

                <div className="bg-neutral-900/30 p-10 rounded-[3rem] border border-white/5">
                  <div className="w-16 h-16 bg-amber-600/10 rounded-2xl flex items-center justify-center text-amber-500 mb-6 border border-amber-600/20">
                    <Zap size={32} />
                  </div>
                  <h3 className="text-2xl font-oswald uppercase mb-4">Estrutura Completa</h3>
                  <p className="text-neutral-400 leading-relaxed font-light">
                    A festa acontece no <strong>Centro de Eventos "Antônio Carlos Prado Baptista"</strong>, um espaço amplo e bem estruturado com pavilhões para animais, arenas de rodeio e shows, vasta praça de alimentação, parque de diversões, espaço empresarial e feira de artes e artesanato.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-600/10 to-amber-900/10 rounded-[4rem] p-12 md:p-20 border border-amber-600/20">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                  <h2 className="text-4xl md:text-6xl font-oswald uppercase text-amber-500 mb-6">
                    Mais de 100 Mil Visitantes
                  </h2>
                  <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
                    A Festa do Leite de Batatais atrai anualmente mais de 100 mil visitantes, consolidando-se como um dos maiores eventos do interior paulista. É o ponto de encontro onde o trabalho árduo do campo se transforma em celebração, onde a genética de elite se encontra com a cultura popular e a música sertaneja ecoa com mais força.
                  </p>
                  <p className="text-neutral-400 text-lg font-light italic border-l-2 border-amber-600 pl-8 max-w-2xl mx-auto">
                    "Celebrar o leite é celebrar a vida, o sustento e a união da nossa gente."
                  </p>
                </div>
              </div>
            </div>
          </section>
        }

        />

        <Route path="/contato" element={
          <section className="pt-32 md:pt-48 pb-24 md:pb-40 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-20 md:mb-32 space-y-6">
                <h3 className="text-amber-500 font-oswald text-sm uppercase tracking-[0.4em]">Canais de Atendimento</h3>
                <h1 className="text-6xl md:text-9xl font-oswald uppercase">Fale <span className="text-amber-500">Conosco</span></h1>
              </div>

              <div className="grid lg:grid-cols-12 gap-16 max-w-7xl mx-auto items-start">
                <div className="lg:col-span-4 space-y-8">
                  <div className="bg-neutral-900/30 p-10 rounded-[3rem] border border-white/5 space-y-10">
                    {[
                      { Icon: MapPin, title: "Recinto da Festa", text: "Centro de Eventos Antônio Carlos Prado Baptista - Av. Moacir Dias de Morais, s/n - Batatais/SP" },
                      { Icon: Phone, title: "Prefeitura de Batatais", text: "(16) 3660-3400" },
                      { Icon: Phone, title: "Secretaria de Cultura e Turismo", text: "(16) 3660-3483" },
                      { Icon: Phone, title: "Sindicato Rural", text: "(16) 3761-2744" }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6">
                        <div className="w-14 h-14 bg-amber-600/10 rounded-2xl flex items-center justify-center text-amber-500 shrink-0 border border-amber-600/20">
                          <item.Icon size={28} />
                        </div>
                        <div>
                          <h4 className="text-xl font-oswald uppercase mb-2 tracking-wide">{item.title}</h4>
                          <p className="text-neutral-500 text-sm font-light">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-10 bg-neutral-900/30 rounded-[3rem] border border-white/5">
                    <h4 className="text-xl font-oswald uppercase mb-6 tracking-wide text-amber-500">Redes Oficiais</h4>
                    <div className="flex gap-5">
                      <a href="https://www.instagram.com/festadoleitedebatataisoficial" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all transform active:scale-90 border border-white/5" title="Instagram Oficial">
                        <Instagram size={22} />
                      </a>
                      <a href="https://www.facebook.com/festadoleiteoficial" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all transform active:scale-90 border border-white/5" title="Facebook Oficial">
                        <Facebook size={22} />
                      </a>
                      <a href="https://www.batatais.sp.gov.br" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all transform active:scale-90 border border-white/5" title="Site da Prefeitura">
                        <MapPin size={22} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8">
                  {!formSubmitted ? (
                    <form className="bg-neutral-900/10 p-10 md:p-20 rounded-[4rem] border border-white/5 space-y-8 backdrop-blur-sm" onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest ml-4">Seu Nome</label>
                          <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 outline-none focus:border-amber-600 transition-all font-light" />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest ml-4">Seu E-mail</label>
                          <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 outline-none focus:border-amber-600 transition-all font-light" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest ml-4">Mensagem ou Dúvida</label>
                        <textarea rows={6} className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 outline-none focus:border-amber-600 transition-all resize-none font-light" />
                      </div>
                      <button className="w-full bg-amber-600 py-6 rounded-2xl font-oswald text-2xl uppercase tracking-widest shadow-2xl flex items-center justify-center gap-4 transition-all hover:bg-amber-500 transform active:scale-[0.98]">
                        Enviar Mensagem <Send size={24} />
                      </button>
                    </form>
                  ) : (
                    <div className="bg-amber-600/5 p-20 md:p-32 rounded-[4rem] border border-amber-600/20 text-center space-y-10 backdrop-blur-sm">
                       <div className="w-24 h-24 bg-amber-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                          <CheckCircle2 size={48} className="text-white" />
                       </div>
                       <div className="space-y-4">
                         <h2 className="text-5xl md:text-7xl font-oswald uppercase">Recebido!</h2>
                         <p className="text-neutral-400 text-xl font-light">Sua mensagem está sendo processada pela nossa equipe.</p>
                       </div>
                       <button onClick={() => setFormSubmitted(false)} className="text-amber-500 font-bold uppercase text-[10px] tracking-widest border-b border-amber-500/30 pb-2 hover:border-amber-500 transition-all">Enviar outra mensagem</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        }

        />

        <Route path="/turismo" element={
          <section className="pt-32 md:pt-48 pb-24 md:pb-40 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-20 md:mb-32 space-y-6">
                <h3 className="text-amber-500 font-oswald text-sm uppercase tracking-[0.4em]">Descubra Batatais</h3>
                <h1 className="text-6xl md:text-9xl font-oswald uppercase">Pontos <span className="text-amber-500">Turísticos</span></h1>
                <p className="text-neutral-500 text-lg md:text-xl max-w-2xl mx-auto font-light">Conheça os principais atrativos da cidade durante sua visita à Festa do Leite</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                {TOURIST_ATTRACTIONS.map((attraction) => {
                  const getCategoryIcon = () => {
                    switch(attraction.category) {
                      case 'Religioso': return Church;
                      case 'Histórico': return Map;
                      case 'Natural': return Camera;
                      case 'Cultural': return Heart;
                      default: return MapPin;
                    }
                  };
                  const CategoryIcon = getCategoryIcon();

                  return (
                    <article key={attraction.id} className="group bg-neutral-900/20 rounded-[3rem] overflow-hidden border border-white/5 hover:border-amber-600/30 transition-all duration-500 flex flex-col">
                      <div className="aspect-video overflow-hidden relative">
                        <img 
                          src={attraction.imageUrl} 
                          alt={`${attraction.name} - ${attraction.category} em Batatais`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          width="600"
                          height="400"
                          loading="lazy"
                        />
                        <div className="absolute top-6 left-6">
                          <span className="bg-amber-600/90 backdrop-blur-sm text-white px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                            <CategoryIcon size={14} /> {attraction.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-10 md:p-12 flex-grow flex flex-col">
                        <h2 className="text-3xl md:text-4xl font-oswald uppercase mb-6 leading-tight group-hover:text-amber-500 transition-colors">
                          {attraction.name}
                        </h2>
                        <p className="text-neutral-400 text-lg mb-8 flex-grow leading-relaxed font-light">
                          {attraction.description}
                        </p>
                        <div className="space-y-6 border-t border-white/5 pt-8">
                          <div className="flex items-start gap-4">
                            <MapPin className="text-amber-500 shrink-0 mt-1" size={20} />
                            <div>
                              <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-1">Endereço</p>
                              <p className="text-white text-sm font-light">{attraction.address}</p>
                            </div>
                          </div>
                          {attraction.openingHours && (
                            <div className="flex items-start gap-4">
                              <Clock className="text-amber-500 shrink-0 mt-1" size={20} />
                              <div>
                                <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-1">Horário de Funcionamento</p>
                                <p className="text-white text-sm font-light">{attraction.openingHours}</p>
                              </div>
                            </div>
                          )}
                          {attraction.phone && (
                            <div className="flex items-start gap-4">
                              <Phone className="text-amber-500 shrink-0 mt-1" size={20} />
                              <div>
                                <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-1">Telefone</p>
                                <a href={`tel:${attraction.phone}`} className="text-white text-sm font-light hover:text-amber-500 transition-colors">{attraction.phone}</a>
                              </div>
                            </div>
                          )}
                          {attraction.website && (
                            <a 
                              href={attraction.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-3 text-amber-500 font-bold uppercase text-[10px] tracking-widest hover:text-amber-400 transition-colors"
                            >
                              Visitar Site <ArrowRight size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Destaque para o Santuário */}
              <div className="mt-24 md:mt-32 bg-gradient-to-br from-amber-600/10 to-amber-900/10 rounded-[4rem] p-12 md:p-20 border border-amber-600/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5 rotate-12 hidden md:block">
                  <Church size={400} strokeWidth={1} />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 bg-amber-600 rounded-2xl flex items-center justify-center">
                      <Church size={40} className="text-white" />
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-oswald uppercase text-amber-500">
                    Santuário Senhor Bom Jesus da Cana Verde
                  </h2>
                  <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
                    O marco inicial da formação urbana de Batatais e o principal patrimônio histórico da cidade. 
                    Abriga o <strong>maior acervo de obras sacras de Cândido Portinari do mundo</strong>, com 28 obras incluindo 
                    a Via Sacra completa. Tombado como patrimônio histórico pelo Condephaat, o santuário é parada obrigatória 
                    para quem visita Batatais, especialmente durante a Festa do Leite.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                    <a 
                      href="#santuario" 
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById('santuario');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="bg-amber-600 text-white px-12 py-5 rounded-full font-oswald text-lg uppercase tracking-widest hover:bg-amber-500 transition-all transform active:scale-95 shadow-xl"
                    >
                      Conhecer o Santuário
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        }

        />

        <Route path="/hospedagem" element={
          <section className="pt-32 md:pt-48 pb-24 md:pb-40 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-20 md:mb-32 space-y-6">
                <h3 className="text-amber-500 font-oswald text-sm uppercase tracking-[0.4em]">Hospedagem</h3>
                <h1 className="text-6xl md:text-9xl font-oswald uppercase">Hotéis e <span className="text-amber-500">Pousadas</span></h1>
                <p className="text-neutral-500 text-lg md:text-xl max-w-2xl mx-auto font-light">Encontre o lugar perfeito para sua estadia durante a Festa do Leite</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                {ACCOMMODATIONS.map((accommodation) => {
                  const getTypeIcon = () => {
                    return accommodation.type === 'Hotel' ? Hotel : accommodation.type === 'Pousada' ? Heart : Hotel;
                  };
                  const TypeIcon = getTypeIcon();

                  const getPriceColor = () => {
                    switch(accommodation.priceRange) {
                      case 'Econômico': return 'text-green-500';
                      case 'Médio': return 'text-amber-500';
                      case 'Alto': return 'text-purple-500';
                      default: return 'text-white';
                    }
                  };

                  const getAmenityIcon = (amenity: string) => {
                    if (amenity.toLowerCase().includes('wi-fi') || amenity.toLowerCase().includes('wifi')) return Wifi;
                    if (amenity.toLowerCase().includes('estacionamento')) return Car;
                    if (amenity.toLowerCase().includes('café') || amenity.toLowerCase().includes('restaurante')) return UtensilsCrossed;
                    if (amenity.toLowerCase().includes('piscina')) return Waves;
                    if (amenity.toLowerCase().includes('academia')) return Dumbbell;
                    return Star;
                  };

                  return (
                    <article key={accommodation.id} className="group bg-neutral-900/20 rounded-[3rem] overflow-hidden border border-white/5 hover:border-amber-600/30 transition-all duration-500 flex flex-col">
                      <div className="aspect-video overflow-hidden relative">
                        <img 
                          src={accommodation.imageUrl} 
                          alt={`${accommodation.name} - ${accommodation.type} em Batatais`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          width="600"
                          height="400"
                          loading="lazy"
                        />
                        <div className="absolute top-6 left-6 flex gap-3">
                          <span className="bg-amber-600/90 backdrop-blur-sm text-white px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                            <TypeIcon size={14} /> {accommodation.type}
                          </span>
                          <span className={`bg-white/90 backdrop-blur-sm ${getPriceColor()} px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest`}>
                            {accommodation.priceRange}
                          </span>
                        </div>
                      </div>
                      <div className="p-10 md:p-12 flex-grow flex flex-col">
                        <h2 className="text-3xl md:text-4xl font-oswald uppercase mb-6 leading-tight group-hover:text-amber-500 transition-colors">
                          {accommodation.name}
                        </h2>
                        <p className="text-neutral-400 text-lg mb-8 flex-grow leading-relaxed font-light">
                          {accommodation.description}
                        </p>
                        <div className="space-y-6 border-t border-white/5 pt-8">
                          <div className="flex items-start gap-4">
                            <MapPin className="text-amber-500 shrink-0 mt-1" size={20} />
                            <div>
                              <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-1">Endereço</p>
                              <p className="text-white text-sm font-light">{accommodation.address}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <Phone className="text-amber-500 shrink-0 mt-1" size={20} />
                            <div>
                              <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-1">Telefone</p>
                              <a href={`tel:${accommodation.phone}`} className="text-white text-sm font-light hover:text-amber-500 transition-colors">{accommodation.phone}</a>
                            </div>
                          </div>
                          {accommodation.email && (
                            <div className="flex items-start gap-4">
                              <Mail className="text-amber-500 shrink-0 mt-1" size={20} />
                              <div>
                                <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-1">E-mail</p>
                                <a href={`mailto:${accommodation.email}`} className="text-white text-sm font-light hover:text-amber-500 transition-colors">{accommodation.email}</a>
                              </div>
                            </div>
                          )}
                          <div>
                            <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-4">Comodidades</p>
                            <div className="grid grid-cols-2 gap-3">
                              {accommodation.amenities.map((amenity, idx) => {
                                const AmenityIcon = getAmenityIcon(amenity);
                                return (
                                  <div key={idx} className="flex items-center gap-2 text-white/70 text-sm">
                                    <AmenityIcon size={16} className="text-amber-500" />
                                    <span className="font-light">{amenity}</span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                          {accommodation.website && (
                            <a 
                              href={accommodation.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-3 text-amber-500 font-bold uppercase text-[10px] tracking-widest hover:text-amber-400 transition-colors"
                            >
                              Visitar Site <ArrowRight size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="mt-24 md:mt-32 bg-gradient-to-br from-amber-600/10 to-amber-900/10 rounded-[4rem] p-12 md:p-20 border border-amber-600/20 text-center">
                <h2 className="text-4xl md:text-6xl font-oswald uppercase mb-6 text-amber-500">
                  Reserve com Antecedência
                </h2>
                <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto mb-8">
                  Durante a Festa do Leite, a demanda por hospedagem é alta. Recomendamos fazer sua reserva com antecedência para garantir o melhor preço e disponibilidade.
                </p>
                <p className="text-neutral-400 text-lg font-light">
                  Entre em contato diretamente com os estabelecimentos para informações sobre disponibilidade e pacotes especiais para o período do evento.
                </p>
              </div>
            </div>
          </section>
        }

        />

        <Route path="/batatais" element={
          <section className="pt-32 md:pt-48 pb-24 md:pb-40 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-20 md:mb-32 space-y-6">
                <h3 className="text-amber-500 font-oswald text-sm uppercase tracking-[0.4em]">Estância Turística</h3>
                <h1 className="text-6xl md:text-9xl font-oswald uppercase">Conheça <span className="text-amber-500">Batatais</span></h1>
                <p className="text-neutral-500 text-lg md:text-xl max-w-2xl mx-auto font-light">História, cultura e tradição no coração do interior paulista</p>
              </div>

              {/* História */}
              <div className="mb-24 space-y-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8">
                    <h2 className="text-4xl md:text-5xl font-oswald uppercase text-amber-500">História e Fundação</h2>
                    <div className="space-y-6 text-neutral-400 text-lg leading-relaxed font-light">
                      <p>
                        A história de Batatais remonta à <strong className="text-white">doação de uma sesmaria em 5 de agosto de 1728</strong>, marcando o início de sua ocupação. A cidade foi oficialmente instalada como vila em <strong className="text-white">1839</strong>.
                      </p>
                      <p>
                        Acredita-se que o nome "Batatais" tenha origem nas <strong className="text-white">extensas plantações de batatas (ou batatas-doces)</strong> cultivadas pelos indígenas locais, descobertas pelos primeiros bandeirantes e colonizadores. A fundação da cidade está ligada à ocupação de sesmarias por entrantes mineiros e paulistas no início do século XVIII.
                      </p>
                      <p className="text-amber-500 font-bold">
                        Batatais ostenta o título de <strong>Estância Turística</strong>, reconhecendo seu potencial histórico, artístico e cultural.
                      </p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-[4/5] overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl">
                      <img src="/img/Batatais SP.jpg" className="w-full h-full object-cover" alt="Batatais - SP" width="800" height="600" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Geografia e Economia */}
              <div className="grid md:grid-cols-2 gap-12 mb-24">
                <div className="bg-neutral-900/30 p-10 rounded-[3rem] border border-white/5">
                  <div className="w-16 h-16 bg-amber-600/10 rounded-2xl flex items-center justify-center text-amber-500 mb-6 border border-amber-600/20">
                    <MapPin size={32} />
                  </div>
                  <h3 className="text-2xl font-oswald uppercase mb-4">Geografia</h3>
                  <ul className="space-y-3 text-neutral-400 leading-relaxed font-light">
                    <li><strong className="text-white">Região:</strong> {BATATAIS_INFO.geography.region}</li>
                    <li><strong className="text-white">Região Metropolitana:</strong> {BATATAIS_INFO.geography.metropolitanRegion}</li>
                    <li><strong className="text-white">População:</strong> {BATATAIS_INFO.geography.population}</li>
                    <li><strong className="text-white">Altitude:</strong> {BATATAIS_INFO.geography.altitude}</li>
                    <li><strong className="text-white">Clima:</strong> {BATATAIS_INFO.geography.climate}</li>
                  </ul>
                </div>

                <div className="bg-neutral-900/30 p-10 rounded-[3rem] border border-white/5">
                  <div className="w-16 h-16 bg-amber-600/10 rounded-2xl flex items-center justify-center text-amber-500 mb-6 border border-amber-600/20">
                    <Trophy size={32} />
                  </div>
                  <h3 className="text-2xl font-oswald uppercase mb-4">Economia</h3>
                  <ul className="space-y-3 text-neutral-400 leading-relaxed font-light">
                    <li><strong className="text-white">Principais Setores:</strong> {BATATAIS_INFO.economy.mainSectors.join(', ')}</li>
                    <li><strong className="text-white">Principal Empresa:</strong> {BATATAIS_INFO.economy.mainCompany}</li>
                    <li><strong className="text-white">PIB per Capita:</strong> {BATATAIS_INFO.economy.pibPerCapita}</li>
                  </ul>
                </div>
              </div>

              {/* Personalidades */}
              <div className="mb-24">
                <h2 className="text-4xl md:text-5xl font-oswald uppercase text-amber-500 mb-12 text-center">Personalidades Ilustres</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {PERSONALITIES.map((person, idx) => (
                    <div key={idx} className="bg-neutral-900/30 p-10 rounded-[3rem] border border-white/5">
                      <h3 className="text-2xl font-oswald uppercase mb-2 text-white">{person.name}</h3>
                      <p className="text-amber-500 font-bold mb-4">{person.role} {person.period && `(${person.period})`}</p>
                      <p className="text-neutral-400 leading-relaxed font-light">{person.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Como Chegar */}
              <div className="mb-24 bg-gradient-to-br from-amber-600/10 to-amber-900/10 rounded-[4rem] p-12 md:p-20 border border-amber-600/20">
                <h2 className="text-4xl md:text-5xl font-oswald uppercase text-amber-500 mb-12 text-center">Como Chegar</h2>
                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                  <div>
                    <h3 className="text-2xl font-oswald uppercase mb-6 text-white">Rodovias</h3>
                    <ul className="space-y-4 text-neutral-400 leading-relaxed font-light">
                      <li><strong className="text-white">Principal:</strong> {BATATAIS_INFO.highways.main}</li>
                      <li><strong className="text-white">Secundária:</strong> {BATATAIS_INFO.highways.secondary}</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-oswald uppercase mb-6 text-white">Distâncias</h3>
                    <ul className="space-y-4 text-neutral-400 leading-relaxed font-light">
                      <li><strong className="text-white">Ribeirão Preto:</strong> {BATATAIS_INFO.distances.ribeiraoPreto}</li>
                      <li><strong className="text-white">São Paulo:</strong> {BATATAIS_INFO.distances.saoPaulo}</li>
                      <li><strong className="text-white">Franca:</strong> {BATATAIS_INFO.distances.franca}</li>
                    </ul>
                    <p className="text-neutral-500 text-sm mt-4 italic">Transporte intermunicipal por ônibus é frequente, conectando Batatais a Ribeirão Preto e Franca.</p>
                  </div>
                </div>
              </div>

              {/* Clima em Julho */}
              <div className="mb-24">
                <h2 className="text-4xl md:text-5xl font-oswald uppercase text-amber-500 mb-12 text-center">Clima Durante a Festa do Leite</h2>
                <div className="bg-neutral-900/30 p-10 rounded-[3rem] border border-white/5 max-w-3xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-oswald uppercase mb-4 text-white">Temperaturas</h3>
                      <p className="text-neutral-400 leading-relaxed font-light">
                        <strong className="text-white">Mínima:</strong> {BATATAIS_INFO.climateJuly.minTemp}<br />
                        <strong className="text-white">Máxima:</strong> {BATATAIS_INFO.climateJuly.maxTemp}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-oswald uppercase mb-4 text-white">Estação</h3>
                      <p className="text-neutral-400 leading-relaxed font-light">
                        {BATATAIS_INFO.climateJuly.season}<br />
                        <span className="text-sm italic">{BATATAIS_INFO.climateJuly.precipitation}</span>
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-white/5 pt-8">
                    <h3 className="text-xl font-oswald uppercase mb-4 text-white">Dicas para Visitantes</h3>
                    <p className="text-neutral-400 leading-relaxed font-light">{BATATAIS_INFO.climateJuly.tips}</p>
                  </div>
                </div>
              </div>

              {/* Contatos de Emergência */}
              <div className="bg-gradient-to-br from-red-600/10 to-red-900/10 rounded-[4rem] p-12 md:p-20 border border-red-600/20">
                <h2 className="text-4xl md:text-5xl font-oswald uppercase text-red-400 mb-12 text-center">Contatos de Emergência</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center text-red-400 mx-auto mb-4 border border-red-600/30">
                      <Phone size={32} />
                    </div>
                    <h3 className="text-lg font-oswald uppercase mb-2 text-white">Polícia Militar</h3>
                    <p className="text-2xl font-bold text-red-400">{BATATAIS_INFO.emergencyContacts.police}</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center text-red-400 mx-auto mb-4 border border-red-600/30">
                      <Phone size={32} />
                    </div>
                    <h3 className="text-lg font-oswald uppercase mb-2 text-white">SAMU</h3>
                    <p className="text-2xl font-bold text-red-400">{BATATAIS_INFO.emergencyContacts.samu}</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center text-red-400 mx-auto mb-4 border border-red-600/30">
                      <Phone size={32} />
                    </div>
                    <h3 className="text-lg font-oswald uppercase mb-2 text-white">Bombeiros</h3>
                    <p className="text-2xl font-bold text-red-400">{BATATAIS_INFO.emergencyContacts.fireDepartment}</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center text-red-400 mx-auto mb-4 border border-red-600/30">
                      <Phone size={32} />
                    </div>
                    <h3 className="text-lg font-oswald uppercase mb-2 text-white">UPA Batatais</h3>
                    <p className="text-xl font-bold text-red-400">{BATATAIS_INFO.emergencyContacts.upa}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        }

        />

        <Route path="/privacidade" element={
          <section className="pt-32 md:pt-48 pb-24 md:pb-40 px-4">
            <div className="container mx-auto max-w-4xl space-y-10">
              <h1 className="text-4xl md:text-6xl font-oswald uppercase text-amber-500">Política de Privacidade</h1>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-light">
                Esta página descreve como o portal oficial da Festa do Leite de Batatais trata as informações coletadas dos
                visitantes. O site é institucional e tem como objetivo divulgar a Festa do Leite, a cidade de Batatais, seus
                pontos turísticos, hotéis e pousadas.
              </p>
              <div className="space-y-6 text-neutral-400 text-sm md:text-base leading-relaxed font-light">
                <div>
                  <h2 className="text-lg font-oswald uppercase text-white mb-2">Coleta de dados</h2>
                  <p>
                    Podemos coletar dados fornecidos voluntariamente por você, como nome e e-mail, apenas quando você preencher
                    formulários de contato ou inscrição em newsletters. Não coletamos informações sensíveis nem dados pessoais
                    desnecessários para o funcionamento do site.
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-oswald uppercase text-white mb-2">Uso das informações</h2>
                  <p>
                    Os dados fornecidos são utilizados exclusivamente para responder às suas mensagens, fornecer informações
                    sobre a Festa do Leite e, quando autorizado, enviar comunicações institucionais relacionadas ao evento.
                    Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins comerciais.
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-oswald uppercase text-white mb-2">Cookies e ferramentas de análise</h2>
                  <p>
                    O site pode utilizar cookies e ferramentas de análise de tráfego (como métricas de acesso) para melhorar a
                    experiência de navegação e entender quais conteúdos são mais relevantes para o público. Você pode gerenciar
                    o uso de cookies diretamente nas configurações do seu navegador.
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-oswald uppercase text-white mb-2">Links externos</h2>
                  <p>
                    O portal contém links para sites de terceiros, como redes sociais, hotéis, pousadas e órgãos oficiais. Não
                    nos responsabilizamos pelas práticas de privacidade ou conteúdo desses sites externos. Recomendamos que
                    você consulte as políticas de privacidade de cada serviço acessado.
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-oswald uppercase text-white mb-2">Segurança das informações</h2>
                  <p>
                    Adotamos boas práticas razoáveis de segurança para proteger as informações enviadas por meio do site.
                    Contudo, nenhum sistema é totalmente isento de riscos, e não podemos garantir segurança absoluta das
                    comunicações realizadas pela internet.
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-oswald uppercase text-white mb-2">Direitos do titular de dados</h2>
                  <p>
                    Se desejar atualizar, corrigir ou solicitar a remoção de seus dados pessoais, entre em contato pelos canais
                    disponíveis na página de contato. Faremos o possível para atender às solicitações em prazo razoável,
                    respeitando a legislação aplicável.
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-oswald uppercase text-white mb-2">Atualizações desta política</h2>
                  <p>
                    Esta Política de Privacidade pode ser atualizada periodicamente para refletir melhorias do site ou mudanças
                    legais. Recomendamos que você revise esta página sempre que retornar ao portal.
                  </p>
                </div>
              </div>
            </div>
          </section>
        }

        />

        <Route path="/termos" element={
          <section className="pt-32 md:pt-48 pb-24 md:pb-40 px-4">
            <div className="container mx-auto max-w-4xl space-y-10">
              <h1 className="text-4xl md:text-6xl font-oswald uppercase text-amber-500">Termos de Uso</h1>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-light">
                Ao acessar e utilizar o portal oficial da Festa do Leite de Batatais, você concorda com os termos e condições
                descritos nesta página. Caso não concorde com algum dos pontos abaixo, recomendamos que interrompa o uso do
                site.
              </p>
              <div className="space-y-6 text-neutral-400 text-sm md:text-base leading-relaxed font-light">
                <div>
                  <h2 className="text-lg font-oswald uppercase text-white mb-2">Finalidade do site</h2>
                  <p>
                    O portal tem caráter exclusivamente informativo e institucional, destinado a divulgar a Festa do Leite de
                    Batatais, sua programação, pontos turísticos da cidade e opções de hospedagem. As informações podem ser
                    ajustadas ou atualizadas a qualquer momento, sem aviso prévio.
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-oswald uppercase text-white mb-2">Responsabilidade sobre informações</h2>
                  <p>
                    Buscamos manter todas as informações corretas e atualizadas; no entanto, não garantimos que o conteúdo
                    esteja livre de erros, omissões ou desatualizações. Detalhes como datas, horários, valores de ingressos ou
                    condições de eventos podem mudar conforme decisão da organização ou de terceiros.
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-oswald uppercase text-white mb-2">Uso do conteúdo</h2>
                  <p>
                    Textos, imagens, identidade visual e demais elementos presentes no site são protegidos por direitos
                    autorais e/ou de marca. É vedada a reprodução não autorizada do conteúdo para fins comerciais. O uso
                    pessoal e não comercial, com citação da fonte, é permitido.
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-oswald uppercase text-white mb-2">Links para terceiros</h2>
                  <p>
                    O portal pode conter links para sites de terceiros (como hotéis, pousadas, pontos turísticos, órgãos
                    públicos e redes sociais). Não temos controle sobre esses sites e não nos responsabilizamos por seu
                    conteúdo, disponibilidade ou práticas. O acesso a esses serviços é de responsabilidade exclusiva do
                    usuário.
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-oswald uppercase text-white mb-2">Comportamento do usuário</h2>
                  <p>
                    Não é permitido utilizar o site para qualquer finalidade ilegal, ofensiva, difamatória ou que viole direitos
                    de terceiros. Também não é permitido tentar comprometer a segurança ou o funcionamento do portal por meio de
                    scripts, automações ou ataques de qualquer natureza.
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-oswald uppercase text-white mb-2">Alterações nos termos</h2>
                  <p>
                    Estes Termos de Uso podem ser alterados ou atualizados a qualquer momento, sem aviso prévio. A versão mais
                    recente estará sempre disponível nesta página. O uso continuado do site após alterações implica aceitação
                    dos novos termos.
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-oswald uppercase text-white mb-2">Contato</h2>
                  <p>
                    Em caso de dúvidas sobre estes Termos de Uso ou sobre o funcionamento do site, utilize os canais indicados
                    na página de contato para falar com a organização da Festa do Leite de Batatais.
                  </p>
                </div>
              </div>
            </div>
          </section>
        }

        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      </main>

      <footer className="bg-[#050505] pt-32 pb-16 border-t border-white/5 px-4 mt-auto">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img 
                  src="/img/logo-festa.png" 
                  alt={`${FESTIVAL_NAME} ${FESTIVAL_CITY} - Logo Oficial`}
                  className="w-16 h-16 object-contain"
                  width="64"
                  height="64"
                  loading="lazy"
                />
                <span className="font-oswald text-2xl uppercase tracking-widest hidden sm:block">{FESTIVAL_NAME}</span>
              </div>
              <p className="text-neutral-500 text-lg leading-relaxed max-w-xs font-light">O coração de Batatais bate mais forte no recinto da Festa do Leite.</p>
              <div className="flex gap-6">
                <a href="https://www.instagram.com/festadoleitedebatataisoficial" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-amber-500 transition-colors" title="Instagram">
                  <Instagram size={24} />
                </a>
                <a href="https://www.facebook.com/festadoleiteoficial" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-amber-500 transition-colors" title="Facebook">
                  <Facebook size={24} />
                </a>
                <a href="https://www.batatais.sp.gov.br" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-amber-500 transition-colors" title="Site Oficial">
                  <MapPin size={24} />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-12 md:col-span-2">
              <div className="space-y-8">
                <h4 className="font-oswald uppercase text-amber-500 tracking-widest text-sm">Portal</h4>
                <ul className="space-y-4 text-neutral-400 font-bold text-[10px] uppercase tracking-[0.2em]">
                  <li><button type="button" onClick={() => navigate('/')} className="hover:text-white transition-colors">Início</button></li>
                  <li><button type="button" onClick={() => navigate('/noticias')} className="hover:text-white transition-colors">Notícias</button></li>
                  <li><button type="button" onClick={() => navigate('/turismo')} className="hover:text-white transition-colors">Turismo</button></li>
                  <li><button type="button" onClick={() => navigate('/hospedagem')} className="hover:text-white transition-colors">Hospedagem</button></li>
                  <li><button type="button" onClick={() => navigate('/batatais')} className="hover:text-white transition-colors">Batatais</button></li>
                  <li><button type="button" onClick={() => navigate('/sobre')} className="hover:text-white transition-colors">A Festa</button></li>
                  <li><button type="button" onClick={() => navigate('/contato')} className="hover:text-white transition-colors">Fale Conosco</button></li>
                </ul>
              </div>
              <div className="space-y-8">
                <h4 className="font-oswald uppercase text-amber-500 tracking-widest text-sm">Informações</h4>
                <ul className="space-y-4 text-neutral-400 font-bold text-[10px] uppercase tracking-[0.2em]">
                  <li><button className="hover:text-white transition-colors">Imprensa</button></li>
                  <li><button className="hover:text-white transition-colors">Expositores</button></li>
                  <li><button className="hover:text-white transition-colors">Transparência</button></li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="font-oswald uppercase text-amber-500 tracking-widest text-sm">Onde Estamos</h4>
              <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-[0.2em] leading-loose">
                Centro de Eventos Antônio Prado Baptista<br />
                Av. Dr. Oswaldo Scatena, s/n<br />
                Batatais - São Paulo
              </p>
            </div>
          </div>
          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 text-[9px] font-bold text-neutral-600 uppercase tracking-widest">
            <p>© {FESTIVAL_NAME}. Todos os direitos reservados.</p>
            <p className="text-[9px] font-bold text-neutral-600 uppercase tracking-widest text-center md:text-right">
              Site desenvolvido por{' '}
              <a
                href="https://www.instagram.com/stories/lucasdasilvaesilva/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-400 transition-colors"
              >
                Lucas da Silva e Silva
              </a>
            </p>
            <div className="flex gap-10">
               <button type="button" onClick={() => navigate('/privacidade')} className="hover:text-white transition-colors">
                 Privacidade
               </button>
               <button type="button" onClick={() => navigate('/termos')} className="hover:text-white transition-colors">
                 Termos de Uso
               </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
