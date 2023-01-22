<script>
    export let data
    const { product } = data
</script>

<a class="back-link" href="/shop" data-sveltekit-prefetch>Go back</a>
<h1>{product.title}</h1>
<div class="product">
    <img class="product-img" src={product.thumbnail} alt={product.title} />
    <p>{product.brand}</p>
    <p>{product.price.toFixed(2)}€</p>
</div>

<style>
    .back-link {
        text-decoration: none;
        color: #000;
    }
</style>