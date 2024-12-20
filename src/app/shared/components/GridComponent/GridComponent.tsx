interface GridComponentProps {
  cols?: string;
  gap?: string;
  align?: string;
  className?: string;
  children: React.ReactNode;
}

const GridComponent: React.FC<GridComponentProps> = ({
  cols = "grid-cols-1",
  gap = "gap-4",
  align = "",
  className = "",
  children,
}) => {
  return (
    <div className={`grid ${cols} ${gap} ${align} ${className}`}>
      {children}
    </div>
  );
};

export default GridComponent;
