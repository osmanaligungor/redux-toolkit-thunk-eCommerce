import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartTotal } from "../../../redux/slices/cartSlice";
import { useNavigate } from "react-router";

const NavbarRight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { itemCount, carts } = useSelector((store) => store.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, carts]);
  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center px-4 py-2 rounded-full bg-gray-200">
        <input
          className="outline-none"
          type="text"
          placeholder="Arama yapınız..."
        />
        <BiSearch size={28} />
      </div>
      <AiOutlineHeart size={28} />
      <div onClick={() => navigate("cart")} className="relative">
        <div className="absolute -top-3 -right-3 bg-red-500 text-white text-sm rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount}
        </div>
        <SlBasket size={28} />
      </div>
    </div>
  );
};

export default NavbarRight;
