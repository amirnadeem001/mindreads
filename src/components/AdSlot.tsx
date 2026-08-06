type AdSlotProps = {
  label: string;
  id: string;
  width: number | string;
  height: number | string;
  color: string;
  className?: string;
};

export default function AdSlot({
  label,
  id,
  width,
  height,
  color,
  className = "",
}: AdSlotProps) {
  return (
    <div
      className={`ad-slot ${className}`}
      style={{
        width,
        height,
        backgroundColor: color,
        minWidth: typeof width === "number" ? width : undefined,
        minHeight: typeof height === "number" ? height : undefined,
      }}
      data-ad-id={id}
    >
      <span className="ad-slot__label">{label}</span>
      <span className="ad-slot__id">{id}</span>
    </div>
  );
}
