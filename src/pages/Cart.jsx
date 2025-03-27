import { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { getCartTotal } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { itemCount, totalAmount, carts } = useSelector((store) => store.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, carts]);
  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, key) => (
            <CartComp key={key} cart={cart} />
          ))}
          <div className="text-2xl font-bold flex items-center justify-end">
            TOPLAM :{" "}
            <span className="text-red-500 font-semibold ml-1">
              {" "}
              {totalAmount} $
            </span>
          </div>
        </div>
      ) : (
        <div className="h-[200px] grid mt-30 justify-center">
          <p className="text-xl">Sepetiniz Boş...</p>
          <Link className="text-3xl text-red-500 cursor-pointer" to="/">
            Anasayfa
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
