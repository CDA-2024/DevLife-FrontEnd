import { Progress } from "../Shadcn/ui/progress";

const PrimaryCardProgressItem = ({
  icon,
  label,
  value,
  maxValue = 1000,
}: {
  icon: string;
  label: string;
  value: number;
  maxValue?: number;
}) => {
  

  return (
    <div
      className={`flex flex-col items-start justify-between flex-1 p-2 rounded-lg border border-gray-100`}
    >
      <div className="flex items-center gap-2">
        <span>{icon}</span>
        <p className="font-semibold">{label}</p>
      </div>
      <div className="flex justify-between items-center pt-2 w-full">
        <Progress
          value={(value / maxValue) * 100}
          className="h-2 bg-gray-100 w-2/4"
        />
        <p className="pl-5">{`${value}xp`}</p>
      </div>
    </div>
  );
};

export default PrimaryCardProgressItem;
