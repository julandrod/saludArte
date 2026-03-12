import { useState, useEffect } from "preact/hooks";
import { logoSmall } from "../assets";
import { contactInfo, navLinks } from "../data";

const Navbar = () => {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-white border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-18 py-2">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              className="w-14 h-14 rounded-xl object-cover"
              src={logoSmall}
              alt="SaludArte logo"
            />
            <span className="text-xl font-bold">
              <span className="text-primary">SALUD</span>
              <span className="text-secondary">ARTE</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-8 list-none">
            {navLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  className="relative text-sm font-medium text-slate-600 hover:text-primary transition-colors duration-200 after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-primary after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA phone pill */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
              </svg>
              {contactInfo.phones[0]}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Abrir menú"
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-900/50"
          onClick={() => setOpen(false)}
        />

        {/* Drawer panel */}
        <aside
          className={`absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
            <a href="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
              <img className="w-10 h-10 rounded-lg object-cover" src={logoSmall} alt="" />
              <span className="text-lg font-bold">
                <span className="text-primary">SALUD</span>
                <span className="text-secondary">ARTE</span>
              </span>
            </a>
            <button
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
              className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer links */}
          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <ul className="space-y-1 list-none">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.url}
                    onClick={() => setOpen(false)}
                    className="flex items-center px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Drawer contact */}
          <div className="px-6 pb-8 pt-4 border-t border-slate-100 space-y-3">
            <p className="text-xs font-bold tracking-widest uppercase text-slate-400">Contáctanos</p>
            {contactInfo.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                <span>📞</span> {phone}
              </a>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
};

export default Navbar;
