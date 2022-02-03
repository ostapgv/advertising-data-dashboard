import { parseRemoteCsvFile } from '../csvUtils';

describe('parseRemoteCsvFile', () => {
  beforeEach(() => {
    const csv = 'col1,col2';
    jest.spyOn(global, 'fetch').mockResolvedValue({ text: async () => csv } as Response);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('parses remote csv file', async () => {
    const parsedCsv = await parseRemoteCsvFile('url');

    expect(parsedCsv?.data).toEqual([['col1', 'col2']]);
  });

  it('resolves with undefined when error occurs', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => {
      throw new Error('test suite error');
    });

    await expect(parseRemoteCsvFile('url')).resolves.toEqual(undefined);
  });
});
