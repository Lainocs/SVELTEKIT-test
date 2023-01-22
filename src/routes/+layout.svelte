<script>
    
</script>

<nav class="layout">
    <a href="/">Menu</a>
    <a href="/shop" data-sveltekit-prefetch>Shop</a>
    <a href="/movies" data-sveltekit-prefetch>Movies</a>
</nav>

<slot />

<footer>
    <p>@Nicolas de Garrigues 2023</p>
</footer>

<style>
    .layout {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
        align-items: center;
        padding: 1rem;
        background: #140a52;
        color: #fff;
    }
    .layout a {
        color: #fff;
        text-decoration: none;
    }
    .layout a:hover {
        text-decoration: underline;
    }
    footer {
        text-align: center;
        padding: 1rem;
        background: #140a52;
        color: #fff;
    }
</style>