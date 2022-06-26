import { useSelector } from "react-redux";
import CardCustom from "../../../components/Card/Card";
import PaginateCT from "../../../components/Pagination/PaginateCT";
import SkeletonCard from "../../../components/Skeleton/SkeletonCard";
function Products(props) {
  const { data, totalQuantity, type, category, queryParam } = props;
  const { loading } = useSelector((state) => state.global);
  const renderProduct = () => {
    // Loading
    if (!data || loading) {
      let jsx = [];
      for (let i = 0; i < 10; i++) jsx.push(<SkeletonCard key={i} />);
      return jsx;
    }

    return data.map((item, index) => {
      return (
        <div className="mx-auto" key={index}>
          <CardCustom product={item} />
        </div>
      );
    });
  };
  return (
    <div className="rounded-xl px-4">
      {data?.length !== 0 || loading ? (
        <div className="grid grid-cols-1 si:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mt-4">
          {renderProduct()}
        </div>
      ) : (
        <></>
      )}

      <div className="flex items-center justify-center my-4">
        <PaginateCT
          length={Math.ceil(totalQuantity / 10)}
          category={category}
          queryParam={queryParam}
          actionName={type}
        />
      </div>
    </div>
  );
}

export default Products;
