import aerials from './images/optionsClassMoves.png';
import climbs from './images/categoryClimbsAngelBasic.png';
import floor from './images/categoryFloorBodyRoll.png';
import inverts from './images/categoryInvertStraddle.png';
import sits from './images/categorySitsMartini.png';
import spins from './images/categorySpinsBackwardsSunwheel.png';
import splits from './images/felixSplits.png';
import climbs3 from './images/categoryClimbsAngelBasic.png';
import climbs4 from './images/categoryClimbsAngelSad.png';
import floor1 from './images/categoryFloorBackArch.png';
import floor2 from './images/categoryFloorBodyRoll.png';
import floor3 from './images/categoryFloorBackBend.png';
import floor4 from './images/categoryFloorBackBend.png';
import invert1 from './images/categoryInvertBrassMonkeyOpen.png';
import invert2 from './images/categoryInvertStraddle.png';
import sits1 from './images/categorySitsAlana.png';
import sits2 from './images/categorySitsBasic.png';
import sits3 from './images/categorySitsBasicBendBack.png';
import spins1 from './images/categorySpinsBackwardsSunwheel.png';
import spins2 from './images/categorySpinsBoomerangeSplitGrip.png';
import spins3 from './images/categorySpinsSandra.png';
import splits1 from './images/categorySplitsBrassSplit.png';
import splits2 from './images/felixSplits.png';

export const categories = [
  {
    id: 'aerials',
    name: 'Aerials',
    image: aerials,
    route: '/categories/aerials',
    color: '#bcd5cf',
    altTag: "Aerial Invert",
    moves: [
      {
        name: 'Aerial Invert',
        image: splits,
        route: '/SingleMovePage',
        altTag: "Aerial Invert",
      },
      {
        name: 'Gracie',
        image: splits,
        route: '/SingleMovePage',
        altTag: "Aerial Invert",
      }
    ]
  },
  {
    id: 'climbs',
    name: 'Climbs',
    image: climbs,
    route: '/categories/climbs',
    color: '#bcd5cf',
    altTag: "Star Chaser",
    moves:
      [
        {
          name: 'Angel - Basic',
          image: climbs3,
          route: '/SingleMovePage',
          altTag: "Angel - Basic",
        },
        {
          name: 'Angel - Sad',
          image: climbs4,
          route: '/SingleMovePage',
          altTag: "Angel - Sad",
        },
      ]
  },
  {
    id: 'floor',
    name: 'Floor',
    image: floor,
    route: '/categories/floor',
    color: '#bcd5cf',
    altTag: "Bianca",
    moves: [
      {
        name: 'Back Arch',
        image: floor1,
        route: '/SingleMovePage',
        altTag: "Back Arch",
      },
      {
        name: 'Body Roll',
        image: floor2,
        route: '/SingleMovePage',
        altTag: "Body Roll",
      },
      {
        name: 'Back Bend',
        image: floor3,
        route: '/SingleMovePage',
        altTag: "Back Bend",
      },
      {
        name: 'Back Bend',
        image: floor4,
        route: '/SingleMovePage',
        altTag: "Back Bend",
      },
    ]
  },
  {
    id: 'inverts',
    name: 'Inverts',
    image: inverts,
    route: '/categories/inverts',
    color: '#bcd5cf',
    altTag: "Bianca",
    moves: [
      {
        name: 'Brass Monkey - Open',
        image: invert1,
        route: '/SingleMovePage',
        altTag: "Back Arch",
      },
      {
        name: 'Straddle',
        image: invert2,
        route: '/SingleMovePage',
        altTag: "Straddle",
      }
    ]
  },
  {
    id: 'sits',
    name: 'Sits',
    image: sits,
    route: '/categories/sits',
    color: '#bcd5cf',
    altTag: "Bianca",
    moves: [
      {
        name: 'Alana',
        image: sits1,
        route: '/SingleMovePage',
        altTag: "Back Arch",
      },
      {
        name: 'Basic Sit',
        image: sits2,
        route: '/SingleMovePage',
        altTag: "Basic Sit",
      },
      {
        name: 'Bend Back',
        image: sits3,
        route: '/SingleMovePage',
        altTag: 'Bend Back',
      }
    ]
  },
  {
    id: 'spins',
    name: 'Spins',
    image: spins,
    route: '/categories/spins',
    color: '#bcd5cf',
    altTag: "Bianca",
    moves: [
      {
        name: 'Backwards Sunwheel',
        image: spins1,
        route: '/SingleMovePage',
        altTag: "BackBackwards Sunwheel",
      },
      {
        name: 'Boomerang - Split Grip',
        image: spins2,
        route: '/SingleMovePage',
        altTag: "Boomerang - Split Grip",
      },
      {
        name: 'Sandra',
        image: spins3,
        route: '/SingleMovePage',
        altTag: 'Sandra',
      }
    ]
  },
  {
    id: 'splits',
    name: 'Splits',
    image: splits,
    route: '/categories/splits',
    color: '#bcd5cf',
    altTag: "Bianca",
    moves: [
      {
        name: 'Brass Split',
        image: splits1,
        route: '/SingleMovePage',
        altTag: "Brass Split",
      },
      {
        name: 'Felix Splits',
        image: splits2,
        route: '/SingleMovePage',
        altTag: 'Felix Splits',
      }
    ]
  },
];