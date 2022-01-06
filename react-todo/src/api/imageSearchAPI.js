const baseURL = 'https://pixabay.com/api/';
const APIKey = '24848647-9c50e0191dab5764d68291abd';

export const searchImages = async (query, page=1) => {
  const response = await fetch(`${baseURL}?key=${APIKey}&q=${query}&per_page=10&page=${page}`);
  if (!response.ok) return { images: [], total: 0 };

  const result = await response.json();
  if (!(result.hits && result.total)) return { images: [], total: 0 };

  const images = result.hits.map((image) => ({
    url: image.largeImageURL || '',
    id: image.id || -1,
    alt: image.tags,
  }));
  const total = result.total || 0;
  return { images, total };
}