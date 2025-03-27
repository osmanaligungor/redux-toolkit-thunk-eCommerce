import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/slices/cartSlice";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className="my-10 flex items-center justify-between">
      <img
        className="w-[120px] h-[120px] object-cover"
        src={cart?.image}
        alt=""
      />

      <div className="w-[500px]">
        <div className="text-xl">{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div className="font-bold text-xl">
        {cart?.price} $ ({cart?.quantity})
      </div>

      <div
        onClick={() => dispatch(removeFromCart(cart?.id))}
        className="bg-red-500 text-white w-[100px] text-xl rounded-md h-12 cursor-pointer flex items-center justify-center"
      >
        Ürünü Sil
      </div>
    </div>
  );
};

export default CartComp;
