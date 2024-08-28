import { useSelector, useDispatch } from "react-redux";
import {useEffect} from "react";
import {setProducts} from "../../redux/product/productActions";
import FilterableProductTable from "./_components/FilterableProductTable";

const Home = () => {
    const products = useSelector((state) => state.product.PRODUCTS);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setProducts([
                { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
                { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
                { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
                { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
                { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
                { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
            ])
        )
    }, [dispatch]);

    return (
        <div style={{ width: '300px', margin: '0 auto' }}>
        <h1>Fruits</h1>
        <FilterableProductTable products={products} />
      </div>
    );
};

export default Home;