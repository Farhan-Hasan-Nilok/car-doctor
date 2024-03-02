import { useEffect, useState } from "react";

const Products = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://car-doctor-server-eight-ashy.vercel.app/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className="my-8">
            <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-[#FF3811]">Popular Products</h3>
                <h2 className="text-5xl font-extrabold">Browse Our Products</h2>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don&apos;t look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    products.map(product => <div key={product._id} className="card w-96 bg-base-100 shadow-xl mt-3 border-2">
                        <figure className="px-5 pt-5 bg-[#F3F3F3] m-5 rounded-md">
                            <img src={product.img} alt="Shoes" className="rounded-xl w-[9.75rem] h-[9.5rem]" />
                        </figure>
                        <div className="card-body text-center items-center">
                            <h2 className="card-title font-bold">{product.name}</h2>
                            <div className="flex items-center justify-between">
                                <p className="text-[#FF3811] font-semibold">Price: ${product.price}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className="my-10 text-center">
                <button className="btn border-1 border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white bg-white">More Products</button>
            </div>
        </div>
    );
};

export default Products;