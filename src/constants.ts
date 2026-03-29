import { Plant, ServiceItem } from './types';

export const PLANTS: Plant[] = [
  {
    id: '1',
    name: '步步高升 · 发财树',
    scientificName: 'Pachira aquatica',
    price: 39,
    image: 'https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/20260321130940_30_848-jpg-imagetourl.cloud-1774762550456-jwvaca.png',
    tags: ['免押金', '包含养护'],
    maintenance: '喜温暖湿润，耐阴，避免直射光',
    viewingPeriod: '四季常青，寿命极长',
    description: '发财树寓意财源广进，是办公室和家居的经典选择。其独特的编织树干和翠绿的叶片能为空间增添勃勃生机。'
  },
  {
    id: '2',
    name: '北欧风情 · 琴叶榕',
    scientificName: 'Ficus lyrata',
    price: 59,
    image: 'https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/20260321130927_27_848-jpg-imagetourl.cloud-1774762546789-kp5puu.png',
    tags: ['企业租摆', '专业打理'],
    maintenance: '需充足散射光，保持盆土微湿',
    viewingPeriod: '叶片硕大，极具雕塑感',
    description: '琴叶榕以其巨大的提琴形叶片闻名，是北欧风格装修的灵魂。它能瞬间提升空间的艺术感。'
  },
  {
    id: '3',
    name: '岚枝舒袖 · 鸭脚木',
    scientificName: 'Schefflera arboricola',
    price: 88,
    image: 'https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/20260321130926_26_848-jpg-imagetourl.cloud-1774762484526-z4decw.png',
    tags: ['免押金', '包含养护'],
    maintenance: '极强耐阴性，净化空气能力卓越',
    viewingPeriod: '叶片茂密，形态优雅',
    description: '鸭脚木是天然的空气净化器，能有效吸收二手烟和甲醛。其舒展的枝叶如云袖般优雅。'
  },
  {
    id: '4',
    name: '锦绣年华 · 黄蝉兰',
    scientificName: 'Cymbidium hookerianum',
    price: 129,
    image: 'https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/20260321130925_25_848-jpg-imagetourl.cloud-1774761021481-aee9co.png',
    tags: ['精致之选', '定期更换'],
    maintenance: '喜凉爽湿润，需充足散射光',
    viewingPeriod: '花期持久，可达40-60天',
    description: '如山间清泉，黄蝉兰以其幽长的花序与淡雅的鹅黄，诠释了中式美学的极致静谧。'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: '每周巡检',
    description: '资深植保师上门提供水分管理、施肥及健康评估。',
    icon: 'Calendar'
  },
  {
    id: 's2',
    title: '专业修剪',
    description: '根据植株形态进行艺术修剪，保持最佳观赏状态。',
    icon: 'Scissors'
  },
  {
    id: 's3',
    title: '48小时更换',
    description: '如出现健康问题，承诺48小时内免费上门更换同款植株。',
    icon: 'RefreshCw'
  }
];
