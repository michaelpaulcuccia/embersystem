import Route from '@ember/routing/route';

export default class BassRoute extends Route {
  async model() {
    try {
      const response = await fetch(
        'https://next-system-ivory.vercel.app/api/instruments',
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      return {
        brand: data[0].brand,
        modelType: data[0].modelType,
        numberOfStrings: data[0].numberOfStrings,
        isBass: data[0].isBass,
        stars: data[0].stars,
        price: data[0].price,
        addOnAmount: data[0].addOnAmount,
        numberAvailable: data[0].numberAvailable,
        description: data[0].description,
        images: data[0].images,
      };
    } catch (error) {
      console.error('Failed to fetch instruments:', error);
      return [];
    }
  }
}
