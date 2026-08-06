import AdSlot from "./AdSlot";

export default function SocialBar() {
  return (
    <div className="social-bar-wrap">
      <AdSlot
        label="Social Bar"
        id="SocialBar_1"
        width="100%"
        height={56}
        color="#e8d5f5"
        className="ad-slot--social-bar"
      />
      <div className="social-bar__icons" aria-hidden="true">
        <span className="social-bar__icon social-bar__icon--fb">f</span>
        <span className="social-bar__icon social-bar__icon--tw">𝕏</span>
        <span className="social-bar__icon social-bar__icon--ig">IG</span>
        <span className="social-bar__icon social-bar__icon--yt">▶</span>
      </div>
    </div>
  );
}
