<script>
    export let data
    const { products } = data
    console.log(products)
</script>

<h1>Shop</h1>
<div class="products">
    {#each products as product}
        <div class="product">
            <a href="/shop/{product.id}" data-sveltekit-prefetch>
                <img class="product-img" src={product.thumbnail} alt={product.title} />
                <h2>{product.title}</h2>
                <p>{product.brand}</p>
                <p>{product.price}€</p>
            </a>
        </div>
    {/each}
</div>

<style>
    .products {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
    }
    .product {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 200px;
        border: 1px solid #ccc;
        padding: 1rem;
    }
    .product a {
        text-decoration: none;
        color: #000;
    }
    .product-img {
        width: 100%;
    }
</style>