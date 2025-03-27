import { useNavigate } from "react-router";

const Product = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`products/${product?.id}`)}
      className="w-[400px] p-3 mb-5 ml-4 border border-zinc-200 rounded-md relative cursor-pointer"
    >
      <div className="absolute text-2xl font-bold rounded-md top-0 right-0 bg-black text-white p-2 m-1">
        {product?.price} <span className="text-sm">$</span>
      </div>
      <img
        className="w-[200px] h-[200px] object-cover m-auto"
        src={product?.image}
        alt=""
      />
      <div className="text-center p-3 m-2 text-xl font-semibold">
        {product?.title}
      </div>
    </div>
  );
};

export default Product;
