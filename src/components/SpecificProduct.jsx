import { useGetProductByIdQuery } from "../app/service/apiData";

const SpecificProduct = () => {
  const { data, isError, isLoading } = useGetProductByIdQuery(2);

  if (isError) {
    return <h1>OOOhNooo we got an error</h1>;
  }

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div>
      <h1>{data?.brand}</h1>
      <h1>{data?.category}</h1>
      <h1>{data?.description}</h1>
    </div>
  );
};

export default SpecificProduct;
