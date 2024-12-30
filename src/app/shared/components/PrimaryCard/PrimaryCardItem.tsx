const PrimaryCardItem = ({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) => {
  return (
    <>
      <div className="flex items-center justify-between flex-1 p-2 rounded-lg border border-gray-100">
        <div className="flex items-center gap-2">
          <span>{icon}</span>
          <p className="font-semibold">{label}</p>
        </div>
        <p>{value}</p>
      </div>
    </>
  );
};

export default PrimaryCardItem;
