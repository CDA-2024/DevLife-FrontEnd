import { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export const BackgroundImage = ({ children }: Props) => {
  return (
    <div
      style={{
        backgroundImage: `url(src/assets/images/background.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        position: "relative",
        zIndex: -1,
      }}
      className="object-cover"
    >
      {children}
    </div>
  );
};

export default BackgroundImage;
