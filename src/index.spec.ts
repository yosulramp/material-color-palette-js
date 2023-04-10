import {
  createAnalogousPalette,
  createComplementaryPalette,
  createPrimaryPalette,
  createTriadicPalette,
} from './index';

describe('Material Design match for default ', () => {
  it('red color palette', () => {
    const primaryHexColor = 'F44336';

    const calculatedRedPalette = createPrimaryPalette(primaryHexColor)?.map(
      color => color.rgbHex
    );
    expect(calculatedRedPalette).toStrictEqual(defaultRedPalette);

    const calculatedComplementaryRedPalette = createComplementaryPalette(
      primaryHexColor
    )?.map(color => color.rgbHex);
    expect(calculatedComplementaryRedPalette).toStrictEqual(
      defaultComplementaryRedPalette
    );

    const calculatedAnalogousRedPalette = createAnalogousPalette(
      primaryHexColor
    )?.map(colors => colors.map(color => color.rgbHex));
    expect(calculatedAnalogousRedPalette).toStrictEqual(
      defaultAnalogousRedPalette
    );

    const calculatedTriadicRedPalette = createTriadicPalette(
      primaryHexColor
    )?.map(colors => colors.map(color => color.rgbHex));
    expect(calculatedTriadicRedPalette).toStrictEqual(defaultTriadicRedPalette);
  });

  it('pink color palette', () => {
    const calculatedPinkPalette = createPrimaryPalette('E91E63')?.map(
      color => color.rgbHex
    );
    expect(calculatedPinkPalette).toStrictEqual(defaultPinkPalette);
  });

  it('purple color palette', () => {
    const calculatedPurplePalette = createPrimaryPalette('9C27B0')?.map(
      color => color.rgbHex
    );
    expect(calculatedPurplePalette).toStrictEqual(defaultPurplePalette);
  });

  it('deepPurple color palette', () => {
    const calculatedDeepPurplePalette = createPrimaryPalette('673AB7')?.map(
      color => color.rgbHex
    );
    expect(calculatedDeepPurplePalette).toStrictEqual(defaultDeepPurplePalette);
  });

  it('indigo color palette', () => {
    const calculatedIndigoPalette = createPrimaryPalette('3F51B5')?.map(
      color => color.rgbHex
    );
    expect(calculatedIndigoPalette).toStrictEqual(defaultIndigoPalette);
  });

  it('blue color palette', () => {
    const calculatedBluePalette = createPrimaryPalette('2196F3')?.map(
      color => color.rgbHex
    );
    expect(calculatedBluePalette).toStrictEqual(defaultBluePalette);
  });

  it('lightBlue color palette', () => {
    const calculatedLightBluePalette = createPrimaryPalette('03A9F4')?.map(
      color => color.rgbHex
    );
    expect(calculatedLightBluePalette).toStrictEqual(defaultLightBluePalette);
  });

  it('cyan color palette', () => {
    const calculatedCyanPalette = createPrimaryPalette('00BCD4')?.map(
      color => color.rgbHex
    );
    expect(calculatedCyanPalette).toStrictEqual(defaultCyanPalette);
  });

  it('teal color palette', () => {
    const calculatedTealPalette = createPrimaryPalette('009688')?.map(
      color => color.rgbHex
    );
    expect(calculatedTealPalette).toStrictEqual(defaultTealPalette);
  });

  it('green color palette', () => {
    const calculatedGreenPalette = createPrimaryPalette('4CAF50')?.map(
      color => color.rgbHex
    );
    expect(calculatedGreenPalette).toStrictEqual(defaultGreenPalette);
  });

  it('lightGreen color palette', () => {
    const calculatedLightGreenPalette = createPrimaryPalette('8BC34A')?.map(
      color => color.rgbHex
    );
    expect(calculatedLightGreenPalette).toStrictEqual(defaultLightGreenPalette);
  });

  it('lime color palette', () => {
    const calculatedLimePalette = createPrimaryPalette('CDDC39')?.map(
      color => color.rgbHex
    );
    expect(calculatedLimePalette).toStrictEqual(defaultLimePalette);
  });

  it('yellow color palette', () => {
    const calculatedYellowPalette = createPrimaryPalette('FFEB3B')?.map(
      color => color.rgbHex
    );
    expect(calculatedYellowPalette).toStrictEqual(defaultYellowPalette);
  });

  it('amber color palette', () => {
    const calculatedAmberPalette = createPrimaryPalette('FFC107')?.map(
      color => color.rgbHex
    );
    expect(calculatedAmberPalette).toStrictEqual(defaultAmberPalette);
  });

  it('orange color palette', () => {
    const calculatedOrangePalette = createPrimaryPalette('FF9800')?.map(
      color => color.rgbHex
    );
    expect(calculatedOrangePalette).toStrictEqual(defaultOrangePalette);
  });

  it('deepOrange color palette', () => {
    const calculatedDeepOrangePalette = createPrimaryPalette('FF5722')?.map(
      color => color.rgbHex
    );
    expect(calculatedDeepOrangePalette).toStrictEqual(defaultDeepOrangePalette);
  });

  it('brown color palette', () => {
    const calculatedBrownPalette = createPrimaryPalette('795548')?.map(
      color => color.rgbHex
    );
    expect(calculatedBrownPalette).toStrictEqual(defaultBrownPalette);
  });

  it('gray color palette', () => {
    const calculatedGrayPalette = createPrimaryPalette('9E9E9E')?.map(
      color => color.rgbHex
    );
    expect(calculatedGrayPalette).toStrictEqual(defaultGrayPalette);
  });

  it('blueGray color palette', () => {
    const calculatedBlueGrayPalette = createPrimaryPalette('607D8B')?.map(
      color => color.rgbHex
    );
    expect(calculatedBlueGrayPalette).toStrictEqual(defaultBlueGrayPalette);
  });
});

const defaultRedPalette = [
  'FFEBEE',
  'FFCDD2',
  'EF9A9A',
  'E57373',
  'EF5350',
  'F44336',
  'E53935',
  'D32F2F',
  'C62828',
  'B71B1C',
];

const defaultComplementaryRedPalette = [
  'D8FAFC',
  '9BF1F7',
  '36E7F4',
  '00DBEF',
  '00D2E9',
  '00C8E5',
  '00B8D1',
  '00A2B6',
  '008E9D',
  '006A6E',
];

const defaultAnalogousRedPalette = [
  [
    'FDE4EF',
    'F9BBD6',
    'F78EBB',
    'F55F9F',
    'F43688',
    'F40071',
    'E2006E',
    'CB0068',
    'B60064',
    '8F005C',
  ],
  [
    'FDF2E1',
    'FBDEB4',
    'F8C884',
    'F6B256',
    'F4A236',
    'F29323',
    'ED8720',
    'E7791E',
    'E06A1C',
    'D65116',
  ],
];

const defaultTriadicRedPalette = [
  [
    'FDFEE8',
    'F9FBC5',
    'F3F99E',
    'EDF675',
    'E7F254',
    'E7F436',
    'D9E12F',
    'C8CA26',
    'B6B21D',
    '9B8B07',
  ],
  [
    'EAFFE7',
    'CBFDC4',
    'A4FB9C',
    '73F86E',
    '36F443',
    '00F000',
    '00DE00',
    '00C800',
    '00B300',
    '008E00',
  ],
];

const defaultPinkPalette = [
  'FCE4EC',
  'F8BBD0',
  'F48FB0',
  'F06291',
  'EC4079',
  'E91E62',
  'D81B5F',
  'C2185A',
  'AD1356',
  '880D4E',
];

const defaultPurplePalette = [
  'F3E5F5',
  'E1BEE7',
  'CE93D8',
  'BA68C8',
  'AB47BC',
  '9B27B0',
  '8D24AA',
  '7A1FA2',
  '691B9A',
  '49148C',
];

const defaultDeepPurplePalette = [
  'EDE7F6',
  'D1C4E9',
  'B39DDB',
  '9675CD',
  '7F57C2',
  '683AB7',
  '5F35B1',
  '522DA8',
  '4627A0',
  '321B92',
];

const defaultIndigoPalette = [
  'E8EAF6',
  'C5CAE9',
  '9FA8DA',
  '7986CB',
  '5C6BC0',
  '3F51B5',
  '3949AB',
  '303F9F',
  '283593',
  '1A237E',
];

const defaultBluePalette = [
  'E3F2FD',
  'BBDEFB',
  '90C9F9',
  '63B4F6',
  '42A4F5',
  '2194F3',
  '1F87E5',
  '1A75D2',
  '1764C0',
  '1045A1',
];

const defaultLightBluePalette = [
  'E1F5FE',
  'B3E5FC',
  '81D3FA',
  '4EC2F7',
  '28B5F6',
  '03A8F4',
  '049AE5',
  '0487D1',
  '0476BD',
  '03569B',
];

const defaultCyanPalette = [
  'E0F7FA',
  'B2EBF2',
  '80DEEA',
  '4DCFE1',
  '26C5DA',
  '00BBD4',
  '00ABC1',
  '0096A7',
  '00828F',
  '005F64',
];

const defaultTealPalette = [
  'E0F2F1',
  'B2DFDB',
  '80CBC3',
  '4DB6AB',
  '26A699',
  '009687',
  '00897A',
  '00796A',
  '00695B',
  '004D3F',
];

const defaultGreenPalette = [
  'E8F5E9',
  'C8E6C9',
  'A5D6A7',
  '81C784',
  '66BB69',
  '4CAF4F',
  '43A046',
  '388E3B',
  '2E7D31',
  '1B5E1F',
];

const defaultLightGreenPalette = [
  'F1F8E9',
  'DCEDC8',
  'C5E1A5',
  'AED581',
  '9CCC65',
  '8BC34A',
  '7CB342',
  '689F38',
  '558B2F',
  '33691E',
];

const defaultLimePalette = [
  'F9FBE7',
  'F0F4C3',
  'E5EE9C',
  'DBE775',
  'D3E157',
  'CCDC39',
  'BFCA33',
  'AEB42B',
  '9D9D24',
  '817717',
];

const defaultYellowPalette = [
  'FFFDE7',
  'FFF9C4',
  'FFF59D',
  'FEF075',
  'FCEB55',
  'FFEB3B',
  'FDD835',
  'FBC02D',
  'F9A825',
  'F57F16',
];

const defaultAmberPalette = [
  'FFF8E1',
  'FFECB3',
  'FFE082',
  'FFD54F',
  'FFCA28',
  'FFC107',
  'FFB300',
  'FFA000',
  'FF8F00',
  'FF6F00',
];

const defaultOrangePalette = [
  'FFF3E0',
  'FFE0B2',
  'FFCD80',
  'FFB84D',
  'FFA826',
  'FF9900',
  'FB8D00',
  'F57D00',
  'EF6D00',
  'E65200',
];

const defaultDeepOrangePalette = [
  'FBE9E7',
  'FFCCBC',
  'FFAB91',
  'FF8965',
  'FF6F43',
  'FF5622',
  'F4501E',
  'E64919',
  'D84215',
  'BF350C',
];

const defaultBrownPalette = [
  'EFEBE9',
  'D7CCC8',
  'BCAAA4',
  'A1887F',
  '8D6E63',
  '795548',
  '6D4C41',
  '5D4037',
  '4E342E',
  '3E2723',
];

const defaultGrayPalette = [
  'FAFAFA',
  'F5F5F5',
  'EEEEEE',
  'E0E0E0',
  'BDBDBD',
  '9E9E9E',
  '757575',
  '616161',
  '424242',
  '212121',
];

const defaultBlueGrayPalette = [
  'ECEFF1',
  'CFD8DC',
  'B0BEC5',
  '90A4AE',
  '78909C',
  '607D8B',
  '546E7A',
  '455A64',
  '37474F',
  '263238',
];
