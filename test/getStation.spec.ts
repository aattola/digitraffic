import { getStation } from '../src';

describe('getStation', () => {
  it('should return info for correct station', async () => {
    const result = await getStation('C04659');

    expect(result).toBeDefined();
    expect(result.id).toBe('C04659');
    expect(result.geometry).toBeDefined();
    expect(result.properties).toBeDefined();
    expect(result.properties.presets).toBeDefined();
    expect(result.properties.presets[0]).toBeDefined();
  });
});
