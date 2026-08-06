const socials = [
  { name: "Facebook", className: "social-btn--facebook" },
  { name: "Twitter", className: "social-btn--twitter" },
  { name: "Instagram", className: "social-btn--instagram" },
  { name: "YouTube", className: "social-btn--youtube" },
];

export default function StayConnected() {
  return (
    <div className="stay-connected">
      <h3 className="widget-title">Stay Connected</h3>
      <div className="stay-connected__list">
        {socials.map((social) => (
          <a
            key={social.name}
            href="#"
            className={`social-btn ${social.className}`}
          >
            {social.name}
          </a>
        ))}
      </div>
    </div>
  );
}
