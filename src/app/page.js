import AnimeList from "./components/AnimeList"

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)
  const anime = await response.json()
  console.log(anime);
  return (
    <div>
      <h1>PALING POPULER</h1>
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-3 gap-4">
        {anime.data.map(data => {
          return (
            <div key={data.mal_id} className="shadow-xl">
            <AnimeList title={data.title} images={data.images.webp.image_url}/>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Home
