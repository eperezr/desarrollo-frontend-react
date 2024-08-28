import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({
  products,
  filterText,
  inStockOnly,
}) => {
  const rows = [];
  let lastCategory = null;

  if (inStockOnly) products = products.filter((product) => product.stocked);
  if (filterText) products = products.filter((product) => product.name.toLowerCase().includes(filterText.toLowerCase()));

  products.forEach(element => {
    forEach
  });((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;