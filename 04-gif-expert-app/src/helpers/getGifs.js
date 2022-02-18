
export const getGifs = async ( category ) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=e0A4a8Me9FiEBhzd4nUhlExUciODVwI2`;

    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url, //si viene imagenes,utilice
      };
    });
    return gifs;
  };