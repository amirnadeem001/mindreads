import AdSlot from "./AdSlot";

export default function SocialBar() {
  return (
    <div className="social-bar-wrap">
      <AdSlot
        label="Social Bar"
        id="SocialBar_1"
        width="100%"
        height={0}
        className="ad-slot--social-bar"
      />
    </div>
  );
}
