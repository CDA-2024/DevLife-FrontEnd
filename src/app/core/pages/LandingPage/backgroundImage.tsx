import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const BackgroundImage = ({ children }: Props) => {
  return (
    <>
      {/* Fond en dehors de la hiérarchie des éléments interactifs */}
      <div
        style={{
          backgroundImage: `url(src/assets/images/background.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          minHeight: "100vh",
          position: "fixed", // Utilisation de fixed pour qu'il reste en place
          top: 0,
          left: 0,
          zIndex: -1, // L'image background reste derriere
        }}
      />
      <div>{children}</div>
    </>
  );
};

export default BackgroundImage;
