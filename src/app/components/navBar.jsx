import Link from "next/link";
import Image from "next/image";
import LangSwitch from "./ui/lang-switcher";

const socialLinks = [
  { href: "https://www.facebook.com/BantuPayLTD?_rdc=1&_rdr", icon: "/facebook.svg", label: "Facebook" },
  { href: "https://x.com/bantupayltd?s=11", icon: null, label: "X (Twitter)" },
  { href: "https://www.instagram.com/bantu_pay/", icon: "/insta2.svg", label: "Instagram" },
  { href: "https://www.linkedin.com/company/bantu-payment/?trk=public_profile_topcard-current-company&originalSubdomain=uk", icon: "/linkedin.svg", label: "LinkedIn" },
  { href: "https://www.tiktok.com/@bantu_pay", icon: "/tiktok2.svg", label: "TikTok" },
];

function XIcon() {
  return (
    <svg className="social-icon-svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-bg-effects">
        <div className="navbar-glow" />
        <div className="navbar-particles">
          <span className="particle particle-1" />
          <span className="particle particle-2" />
          <span className="particle particle-3" />
        </div>
      </div>

      <div className="navbar-logo">
        <div className="logo-container">
          <Image
            src="/Logo.png"
            alt="Bantu Pay logo"
            width={70}
            height={70}
            priority
            sizes="70px"
          />
          <div className="logo-glow" />
        </div>
      </div>

      <div className="navbar-content">
        <div className="nav-item">
          <LangSwitch />
        </div>

        <div className="nav-divider" />

        <div className="social-icons">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={social.label}
            >
              <div className="social-icon-wrapper">
                {social.icon ? (
                  <Image
                    src={social.icon}
                    alt=""
                    width={18}
                    height={18}
                    className="social-icon-img"
                    aria-hidden="true"
                  />
                ) : (
                  <XIcon />
                )}
                <div className="social-ripple" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
