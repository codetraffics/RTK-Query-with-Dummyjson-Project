import { useUpdateProductMutation } from "../app/service/apiData";

const UpdateProduct = ({ productId }) => {
  const [updateProduct, { data, error, isLoading }] =
    useUpdateProductMutation();

  if (error) {
    return <h1>OOOhNooo we got an error</h1>;
  }

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  const handleUpdateProduct = async () => {
    try {
      const updatedProductData = {
        title: "Title updated 👌",
      };

      await updateProduct({
        id: productId,
        updatedProduct: updatedProductData,
      });
    } catch (err) {
      console.log("Error adding new product:", err);
    }
  };

  return (
    <div>
      <h1>{data?.title}</h1>
      <button onClick={handleUpdateProduct} disabled={isLoading}>
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
