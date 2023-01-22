<script>
    export let data
    const { movies } = data
    console.log(movies)
</script>

<h1>Movies</h1>

<div class="movies">
    {#each movies as movie}
        <div class="movie">
            <img class="movie-img" src={'https://image.tmdb.org/t/p/w154' + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
        </div>
    {/each}
</div>

<style>
    .movies {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
    }
    .movie {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 200px;
        border: 1px solid #ccc;
        padding: 1rem;
    }
    .movie-img {
        width: 100%;
    }
</style>