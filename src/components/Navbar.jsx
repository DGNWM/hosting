import { Navitems } from "constant/Navbar/text";
import { FiSearch } from "react-icons/fi";
import { Link as Scroll } from "react-scroll";
import MenuDrawer from "./MenuDrawer";
import { Link } from "react-router-dom";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { Badge } from "@mui/material";
import CartDrawer from "./CartDrawer";
import { useSelector } from "react-redux";
import MenuDashboard from "./MenuDashboard";

export const Navbar = ({ onClick, showDownArrow }) => {
  const { cartDatas } = useSelector((state) => state.cart);
  const badgeConunt = cartDatas.reduce((acc, item) => acc + item.quantity, 0);

  const { isAdmin } = useSelector((state) => state.auth);

  return (
    <div className="flex items-center text-white justify-between fixed top-0 left-0 w-full h-[83px] py-2 px-5 lg:px-16 shadow-lg z-30 background font-primary overflow-hidden">
      {/* logo */}
      <Link to={"/"}>
        <img
          src="https://cdn.discordapp.com/attachments/1123144974683361401/1123145321929768970/My_project.png"
          alt="logo"
          className="object-cover w-[6rem]  h-fit "
        />
      </Link>
      {/* navitems */}
      {isAdmin ? null :(
        <div className="hidden navbar firstnav lg:flex gap-14 ml-[34rem]">
          {Navitems.map((item, id) =>
            item.goto ? (
              <div
                key={`${id}..${item.name}`}
                onClick={item.name === "Menu" ? onClick : null}
              >
                <button className="nav uppercase font-bold relative flex gap-5 items-center">
                  {item.name}{" "}
                  {showDownArrow ? (
                    <BsChevronUp size={20} />
                  ) : (
                    <BsChevronDown size={20} />
                  )}
                </button>
              </div>
            ) : (
              <Scroll
                key={`${item.name}.${id}`}
                to={item.to}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button className="nav uppercase font-bold">{item.name}</button>
              </Scroll>
            )
          )}
        </div>
      )}
      
      {/* navicons */}
      <div className="flex items-center gap-6 lg:gap-12 basis-[13%]">
        {isAdmin ? (
          <button className="bg-purple-500 py-2 px-8 rounded">Admin</button>
          ) : (
            <>
            <FiSearch className="hidden md:block" size={25} />
            <Badge badgeContent={badgeConunt} color="success">
              <CartDrawer />
            </Badge>
          </>
        )}
        <MenuDashboard />
        <MenuDrawer />
      </div>
    </div>
  );
};
