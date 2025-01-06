import useResize from "../../hooks/useResize";

const PrimaryCardItem = ({
  icon,
  label,
  value,
  threshold = 220,
}: {
  icon: string;
  label: string;
  value: number | string;
  threshold?: number;
}) => {
  const { isSmall, containerRef } = useResize(threshold);

  return (
    <div
      ref={containerRef}
      className={`flex ${
        isSmall ? "flex-col" : "flex-row"
      } items-start justify-between flex-1 p-2 rounded-lg border border-gray-100`}
    >
      <div className="flex items-center gap-2">
        <span>{icon}</span>
        <p className="font-semibold">{label}</p>
      </div>
      <p
        className={`mt-2 text-sm sm:text-base ${
          isSmall ? "ml-auto text-right" : ""
        }`}
      >
        {value}
      </p>
    </div>
  );
};
export default PrimaryCardItem;
