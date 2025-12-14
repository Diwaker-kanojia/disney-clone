import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import Logo from "../assets/Images/logo.png";
import { menu } from "../constant/data";
import HeaderItem from "./HeaderItem";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex items-center gap-8">
        <img
          src={Logo}
          alt="logo"
          className="w-[80px] md:w-[115px] object-cover"
        />
        <div className="hidden lg:flex gap-8 items-center">
          {menu.map(({ name, icon }, index) => (
            <HeaderItem key={index} name={name} Icon={icon} />
          ))}
        </div>
        <div className="flex lg:hidden gap-5 items-center">
          {menu.map(
            ({ name, icon }, index) =>
              index < 3 && <HeaderItem key={index} name={""} Icon={icon} />
          )}
          <div className="lg:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div
                className="absolute max-sm:right-10  mt-3 bg-[#121212] 
            border-[1px] border-gray-700 p-3 px-5 py-4"
              >
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem
                        key={index}
                        name={item.name}
                        Icon={item.icon}
                      />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className="w-[40px] rounded-full"
      />
    </div>
  );
};

export default Header;
