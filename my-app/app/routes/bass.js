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

      return data;
    } catch (error) {
      console.error('Failed to fetch instruments:', error);
      return [];
    }
  }
}
