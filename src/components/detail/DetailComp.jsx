import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  const increment = () => {
    if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1);
  };

  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        price: productDetail?.price,
        image: productDetail?.image,
        quantity: quantity,
      })
    );
  };

  return (
    <div className="flex gap-10 my-10">
      <img
        className="w-[500px] h-[500px] object-cover"
        src={productDetail?.image}
        alt=""
      />
      <div>
        <div className="text-3xl font-bold"> {productDetail?.title}</div>
        <div className="my-2 text-xl">{productDetail?.description}</div>
        <div className="flex items-center justify-between">
          <div className="my-2 text-xl text-red-500">
            Rating : {productDetail?.rating?.rate}
          </div>
          <div className="my-2 text-xl text-red-500">
            Count : {productDetail?.rating?.count}
          </div>
        </div>
        <div className="text-4xl font-bold">
          {productDetail?.price}{" "}
          <span className="text-2xl text-green-800">$</span>
        </div>

        <div className="flex items-center gap-5">
          <div onClick={decrement} className="text-5xl cursor-pointer">
            -
          </div>
          <input
            className="w-15 text-center my-4 text-4xl font-bold"
            type="text"
            value={quantity}
          ></input>
          <div onClick={increment} className="text-4xl cursor-pointer">
            +
          </div>
        </div>
        <div
          onClick={addBasket}
          className="border border-zinc-300 h-16 text-2xl w-[200px] rounded-md bg-gray-200 cursor-pointer my-4 flex items-center justify-center"
        >
          Sepete Ekle
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
