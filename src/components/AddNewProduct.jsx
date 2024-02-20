import { useAddNewProductMutation } from "../app/service/apiData";

const AddNewProduct = () => {
  const [addNewProduct, { data, isError, isLoading }] =
    useAddNewProductMutation();

  if (isError) {
    return <h1>OOOhNooo we got an error</h1>;
  }

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  const handleAddProduct = async () => {
    try {
      const newProductData = {
        id: 1,
        title: "Amazing T-Shirt",
        description: "This is one of the best T-Shirt in the market",
      };

      await addNewProduct(newProductData);
    } catch (err) {
      console.log("Error adding new product:", err);
    }
  };

  return (
    <div>
      <h1>{data?.id}</h1>
      <h1>{data?.title}</h1>
      <h1>{data?.description}</h1>
      <button onClick={handleAddProduct} disabled={isLoading}>
        Add New Product
      </button>
    </div>
  );
};

export default AddNewProduct;
