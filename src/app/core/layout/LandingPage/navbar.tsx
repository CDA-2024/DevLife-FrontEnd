import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../shared/components/ui/navigation-menu";
import { Button } from "../../../shared/components/ui/button";

const navigation = [
  { item: "Home", path: "/" },
  { item: "Forum", path: "/forum" },
  { item: "Contact", path: "/contact" },
];

export const Navbar = () => {
  return (
    <div className="flex items-center justify-center w-full pt-8 select-none">
      <NavigationMenu className="w-full max-w-[1200px] justify-between px-5 py-2 h-[60px] items-center">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/" className="flex items-center space-x-2">
              <h2 className="text-2xl font-bold">DevLife</h2>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList className="flex justify-between items-center font-light space-x-14 text-xs">
          {navigation.map((link) => (
            <NavigationMenuItem
              key={link.item}
              className="cursor-pointer hover:underline"
            >
              <Link to={link.path}>
                <NavigationMenuLink>{link.item}</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>

        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/auth/login">
              <Button variant={"primary"} size={"lg"}>
                Login
              </Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
