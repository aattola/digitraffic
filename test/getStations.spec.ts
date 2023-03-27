import { getStations } from '../src';

describe('getStations', () => {
  it('should return array of stations', async () => {
    const result = await getStations();

    expect(result).toBeDefined();
    expect(result.features).toBeInstanceOf(Array);
    expect(result.type).toBe('FeatureCollection');
    expect(result.features.length).toBeGreaterThan(100);
  });
});
