//import i5400 from '../assets/i5-400.png';
import xs400 from '../assets/xs-400.png';
//import alkagen from '../assets/EN-ALKAGEN BLK.png';
//import i7400h from '../assets/EN-I7-400 WH.png';
import prime from '../assets/pHYDRAFYT PRIME.png';
import pro from '../assets/pHYDRAFYT PRO.png';
import pro_hot from '../assets/pHYDRAFYT PRO+.png';
import neo from '../assets/pHYDRAFYT NEO+.png';
import neo_hot from '../assets/pHYDRAFYT NEO+ WITH FAUCET.png'; 
//import i7400hutc from '../assets/I7-400H UF (1).png';
import s100 from '../assets/s100.png';
import tntMax from '../assets/tntMax.png';
import tntPro from '../assets/tntPro.png';
import tnt from '../assets/TNT BG.png';
import tnt100lph from '../assets/tnt100lph.png';
import tnt50lph from '../assets/tnt100lph.png';
import aeroSlimBlack from '../assets/pHYDRAFYT AEROSLIM BLK.png';
import aeroSlimWhite from '../assets/pHYDRAFYT AEROSLIM WH.png';
import aeroSlimWall from '../assets/AeroSlim.png';
import faucet from '../assets/EN-FAUCET (1).png';
import prime_pro_counter from '../assets/Prime_Pro_Counter.png';
import prime_pro_hot from '../assets/Prime_Pro_Pro+.png';
import prime_pro_wall from '../assets/Prime_Pro_Wall.png';
import neo_under_sink from '../assets/Neo_Neo+.png';
import neo_wo_faucet from '../assets/pHYDRAFYT NEO+.png';
import tntMax_Wall from '../assets/tntMax_wall.png';
import tnt_Wall from '../assets/tnt_wall.png';
import xs_s_Wall from '../assets/xs_s_wall.png';
import tnt100lphWall from '../assets/tnt_100lph_wall.png';
import tnt100lphChef from '../assets/tnt_100lph_chef.png';
import tnt50lphWall from '../assets/tnt_50lph_wall.png';
import tnt50lphChef from '../assets/tnt_50lph_chef.png';

export interface Product {
  id: string;
  name: string;
  category: 'ro-uv-uf-alkaline' | 'alkaline-ionizer' | 'commercial';
  price: number;
  originalPrice?: number;
  image: string;
  gallery: string[];
  colors: string[];
  defaultColor: string;
  youtube: string;
  description: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
  warranty: string;
  installation: boolean;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'pHydrafyt Neo+',
    category: 'alkaline-ionizer',
    price: 259000,
    originalPrice: 279000,
    image: neo_hot,
    gallery:[
      neo_wo_faucet,
      faucet,
      neo_under_sink
    ],
    colors: ["Black","White"],
    defaultColor: "Black",
    youtube: 'https://www.youtube.com/@enpureindia1634',
    description: 'Advanced 8-Stage Purification System with RO, UV, UF and Alkaline Ionizer Technology. Perfect for Families of 4-6 members.',
    features: [
      '8-Stage Advanced Purification',
      'RO + UV + UF + Alkaline Ionizer Technology',
      'Auto TDS Controller',
      'Up to 1700 PPB of Hydrogen Generation ',
      '7L of Inbuilt Storage Tank',
      'UV inside the Storage Tank',
      'Touch Screen Display (2.8inch) with 6 Different Types(different pH) of Water',
      'App-controlled - both iOS and Android supported',
      'Electronic Water Level Control Switch',
      'Automatic Dry Run Protection',
      'Auto Cleaning Technology',
      'Digital Display Indications',
      'TDS, ORP, pH Display',
      'Self-Serviceable Filters - Easy Maintenance',
      'Food Grade ABS Body',
      'RO Membrane - 400 GPD',
      'RO Booster Pump - 400 GPD',
      'Instant Hot Water',
      'High recovery rate of 70% - Water Saving Auto Revive Technology',
      'Smart Auto-Cleaning Machine',
      'Works without Electricity for Stored RO Water'
    ], 
    specifications: {
      'Purification Capacity': '50 L/hour',
      'Applications': 'Under the Sink with Touch-Screen Display Smart Faucet (without Pressure Tank or Pump)',
      'Filtration': ' 3-in-1 PPC Filter(Sediment + Carbon + Sediment) + RO Membrane + UV Inside the Tank + UF + 7 Platinum Coated Titanium Plates',
      'Number of Plates': '7 Platinum Coated Titanium Plates',
      'Storage Tank': '7 Liters',
      'Alkaline pH Range': '8-11 pH',
      'Acidic pH Range': '3-6.5 pH',
      'Hydrogen Generation': 'Upto 1700 PPB',
      'ORP Level': 'Upto -900',
      'ORP at 9pH': 'Upto -550', 
      'Input Water Pressure': '10-40 PSI',
      'Power Consumption for RO': '60 Watts',
      'Power Consumption for Ionizer': '150 Watts',
      'Operating Voltage':'230V (AC)',
      'Dimensions': '15.5" × 8" × 15.5" ',
      'Weight': '8.5 kg',
      'Warranty': '5 Years'
    },
    warranty: '5 Years Comprehensive Warranty',
    installation: true,
  },
  {
    id: '2',
    name: 'pHydrafyt AeroSlim',
    category: 'alkaline-ionizer',
    price: 125000,
    originalPrice: 125000,
    image: aeroSlimBlack,
    gallery:[
      aeroSlimWhite,
      aeroSlimWall
    ],
    colors: ["Black","White"],
    defaultColor: "Black",
    youtube: 'https://www.youtube.com/@enpureindia1634',
    description: 'Reliable Ionizer Perfect for Small to Medium Families. Compact Design with Essential Features.',
    features: [
      'Alkaline Ionizer Technology',
      'Up to 1700 PPB of Hydrogen Generation ',
      'Install with Any Existing RO - No Need for Pressure Tank or Pump',
      'Touch Screen Display (2.8inch) with 6 Different Types(different pH) of Water',
      'App-controlled - both iOS and Android supported',
      'Digital Display Indications',
      'Auto Cleaning Technology',
      'TDS, ORP, pH Display',
      'Food Grade ABS Body',
      'High recovery rate of 70% - Water Saving Auto Revive Technology',
      'Smart Auto-Cleaning Machine',
      'Compact Wall-Mount Design',
      'Budget-Friendly Option',
      'Easy Installation'
    ],
    specifications: {
      'Applications': 'Wall Mounting',
      'Number of Plates': '5 Platinum Coated Titanium Plates',
      'Alkaline pH Range': '8-11 pH',
      'Acidic pH Range': '3-6.5 pH',
      'Hydrogen Generation': 'Upto 1700 PPB',
      'ORP Level': 'Upto -900',
      'ORP at 9pH': 'Upto -550', 
      'Input Water Pressure': '10-40 PSI',
      'Power Consumption for Ionizer': '150 Watts',
      'Operating Voltage':'230V (AC)',
      'Dimensions': '15.5" × 8" × 3.5" ',
      'Weight': '3.5 kg',
      'Warranty': '5 Years'
    },
    warranty: '5 Years Comprehensive Warranty (0% Maintenance Cost Upto 5 Years)',
    installation: true,
  },
  {
    id: '3',
    name: 'EN-XS-400',
    category: 'ro-uv-uf-alkaline',
    price: 28000,
    originalPrice: 29900,
    image: xs400,
    gallery:[
      xs_s_Wall
    ],
    colors: ["Black","White"],
    defaultColor: "Black",
    youtube: 'https://www.youtube.com/@enpureindia1634',
    description: '7-Stage Purification with Advanced Alkaline Enhancement for Optimal pH Balance and Mineral Retention.',
    features: [
      '7-Stage Purification Process',
      'RO + UV + UF + Alkaline Enhancement',
      'Auto TDS Controller',
      'UV inside the Storage Tank',
      '7L storage capacity',
      'RO Membrane - 400 GPD',
      'RO Booster Pump - 400 GPD',
      'Self-Serviceable Filters - Easy Maintenance',
      'Electronic Water Level Control Switch',
      'Automatic Dry Run Protection',
      'Auto Flush Technology',
      'Digital Display Indications',
      'TDS Display',
      'Food Grade ABS Body',
      'High recovery rate of 70% - Water Saving Auto Revive Technology'
    ],
    specifications: {
      'Purification Capacity': '50 L/hour',
      'Applications': 'Table Top/ Wall Mounting/ Cabinet Fit',
      'Filtration':'3-in-1 PPC Filter(Sediment + Carbon + Sediment) + RO Membrane + UV Inside the Tank + UF(Optional) + Post Carbon (Optional) + Alkaline Cartridge (Optional)',
      'Storage Tank': '7 Liters',
      'Alkaline pH Range': '8.5-9 pH',
      'Input Water Pressure': '10-40 PSI',
      'Power Consumption': '60 Watts',
      'Dimensions': '15.5" × 8" × 15.5" ',
      'Weight': '7.5 kg',
      'Warranty': '2 Year'
    },
    warranty: '2 Year Comprehensive Warranty',
    installation: true,
  },
  {
    id: '4',
    name: 'pHydrafyt Pro',
    category: 'alkaline-ionizer',
    price: 225000,
    originalPrice: 235000,
    image: pro,
    gallery:[
      pro_hot,
      prime_pro_counter,
      prime_pro_wall
    ],
    colors: ["Black","White"],
    defaultColor: "Black",
    youtube: 'https://www.youtube.com/@enpureindia1634',
    description: 'Advanced 8-Stage Purification System with RO, UV, UF and Alkaline Ionizer Technology. Perfect for Families of 4-6 members.',
    features: [
      '8-Stage Advanced Purification',
      'RO + UV + UF + Alkaline Ionizer Technology',
      'Auto TDS Controller',
      'Up to 1700 PPB of Hydrogen Generation ',
      '7L of Inbuilt Storage Tank',
      'UV inside the Storage Tank',
      'Touch Screen Display (2.8inch) with 6 Different Types(different pH) of Water',
      'App-controlled - both iOS and Android supported',
      'Electronic Water Level Control Switch',
      'Automatic Dry Run Protection',
      'Auto Cleaning Technology',
      'Digital Display Indications',
      'TDS, ORP, pH Display',
      'Self-Serviceable Filters - Easy Maintenance',
      'Food Grade ABS Body',
      'RO Membrane - 400 GPD',
      'RO Booster Pump - 400 GPD',
      'High recovery rate of 70% - Water Saving Auto Revive Technology',
      'Smart Auto-Cleaning Machine',
      'Works without Electricity for Stored RO Water'
    ],
    specifications: {
      'Purification Capacity': '50 L/hour',
      'Applications': 'Table Top/ Wall Mounting/ Cabinet Fit',
      'Filtration': ' 3-in-1 PPC Filter(Sediment + Carbon + Sediment) + RO Membrane + UV Inside the Tank + UF + 7 Platinum Coated Titanium Plates',
      'Number of Plates': '7 Platinum Coated Titanium Plates',
      'Storage Tank': '7 Liters',
      'Alkaline pH Range': '8-11 pH',
      'Acidic pH Range': '3-6.5 pH',
      'Hydrogen Generation': 'Upto 1700 PPB',
      'ORP Level': 'Upto -900',
      'ORP at 9pH': 'Upto -550', 
      'Input Water Pressure': '10-40 PSI',
      'Power Consumption for RO': '60 Watts',
      'Power Consumption for Ionizer': '150 Watts',
      'Operating Voltage':'230V (AC)',
      'Dimensions': '15.5" × 8" × 15.5" ',
      'Weight': '8.5 kg',
      'Warranty': '5 Years'
    },
    warranty: '5 years Comprehensive Warranty',
    installation: true,
  },
  {
    id: '5',
    name: 'pHydrafyt Pro+',
    category: 'alkaline-ionizer',
    price: 239000,
    originalPrice: 259000,
    image: pro,
    gallery:[
      pro_hot,
      prime_pro_counter,
      prime_pro_hot,
      prime_pro_wall
    ],
    colors: ["Black","White"],
    defaultColor: "Black",
    youtube: 'https://www.youtube.com/@enpureindia1634',
    description: 'Advanced 8-Stage Purification System with RO, UV, UF and Alkaline Ionizer Technology. Perfect for Families of 4-6 members.',
    features: [
      '8-Stage Advanced Purification',
      'RO + UV + UF + Alkaline Ionizer Technology',
      'Auto TDS Controller',
      'Up to 1700 PPB of Hydrogen Generation ',
      '7L of Inbuilt Storage Tank',
      'UV inside the Storage Tank',
      'Touch Screen Display (2.8inch) with 6 Different Types(different pH) of Water',
      'App-controlled - both iOS and Android supported',
      'Electronic Water Level Control Switch',
      'Automatic Dry Run Protection',
      'Auto Cleaning Technology',
      'Digital Display Indications',
      'TDS, ORP, pH Display',
      'Self-Serviceable Filters - Easy Maintenance',
      'Food Grade ABS Body',
      'RO Membrane - 400 GPD',
      'RO Booster Pump - 400 GPD',
      'Instant Hot Water',
      'High recovery rate of 70% - Water Saving Auto Revive Technology',
      'Smart Auto-Cleaning Machine',
      'Works without Electricity for Stored RO Water'
    ],
    specifications: {
      'Purification Capacity': '50 L/hour',
      'Applications': 'Table Top/ Wall Mounting/ Cabinet Fit',
      'Filtration': ' 3-in-1 PPC Filter(Sediment + Carbon + Sediment) + RO Membrane + UV Inside the Tank + UF + 7 Platinum Coated Titanium Plates',
      'Number of Plates': '7 Platinum Coated Titanium Plates',
      'Storage Tank': '7 Liters',
      'Alkaline pH Range': '8-11 pH',
      'Acidic pH Range': '3-6.5 pH',
      'Hydrogen Generation': 'Upto 1700 PPB',
      'ORP Level': 'Upto -900',
      'ORP at 9pH': 'Upto -550', 
      'Input Water Pressure': '10-40 PSI',
      'Power Consumption for RO': '60 Watts',
      'Power Consumption for Ionizer': '150 Watts',
      'Operating Voltage':'230V (AC)',
      'Dimensions': '15.5" × 8" × 15.5" ',
      'Weight': '8.5 kg',
      'Warranty': '5 Years'
    },
    warranty: '5 years Comprehensive Warranty',
    installation: true,
  },
  {
    id: '6',
    name: 'pHydrafyt Neo',
    category: 'alkaline-ionizer',
    price: 249000,
    originalPrice: 259000,
    image: neo_hot,
    gallery:[
      neo_wo_faucet,
      faucet,
      neo_under_sink
    ],
    colors: ["Black","White"],
    defaultColor: "Black",
    youtube: 'https://www.youtube.com/@enpureindia1634',
    description: 'Advanced 8-Stage Purification System with RO, UV, UF and Alkaline Ionizer Technology. Perfect for Families of 4-6 members.',
    features: [
      '8-Stage Advanced Purification',
      'RO + UV + UF + Alkaline Ionizer Technology',
      'Auto TDS Controller',
      'Up to 1700 PPB of Hydrogen Generation ',
      '7L of Inbuilt Storage Tank',
      'UV inside the Storage Tank',
      'Touch Screen Display (2.8inch) with 6 Different Types(different pH) of Water',
      'App-controlled - both iOS and Android supported',
      'Electronic Water Level Control Switch',
      'Automatic Dry Run Protection',
      'Auto Cleaning Technology',
      'Digital Display Indications',
      'TDS, ORP, pH Display',
      'Self-Serviceable Filters - Easy Maintenance',
      'Food Grade ABS Body',
      'RO Membrane - 400 GPD',
      'RO Booster Pump - 400 GPD',
      'High recovery rate of 70% - Water Saving Auto Revive Technology',
      'Smart Auto-Cleaning Machine',
      'Works without Electricity for Stored RO Water'
    ], 
    specifications: {
      'Purification Capacity': '50 L/hour',
      'Applications': 'Under the Sink with Touch-Screen Display Smart Faucet (without Pressure Tank or Pump)',
      'Filtration': ' 3-in-1 PPC Filter(Sediment + Carbon + Sediment) + RO Membrane + UV Inside the Tank + UF + 7 Platinum Coated Titanium Plates',
      'Number of Plates': '7 Platinum Coated Titanium Plates',
      'Storage Tank': '7 Liters',
      'Alkaline pH Range': '8-11 pH',
      'Acidic pH Range': '3-6.5 pH',
      'Hydrogen Generation': 'Upto 1700 PPB',
      'ORP Level': 'Upto -900',
      'ORP at 9pH': 'Upto -550', 
      'Input Water Pressure': '10-40 PSI',
      'Power Consumption for RO': '60 Watts',
      'Power Consumption for Ionizer': '150 Watts',
      'Operating Voltage':'230V (AC)',
      'Dimensions': '15.5" × 8" × 15.5" ',
      'Weight': '8.5 kg',
      'Warranty': '5 Years'
    },
    warranty: '5 Years Comprehensive Warranty',
    installation: true,
  },
  {
    id: '7',
    name: 'pHydrafyt Prime',
    category: 'alkaline-ionizer',
    price: 215000,
    originalPrice: 225000,
    image: prime,
    gallery:[
      pro_hot,
      prime_pro_counter,
      prime_pro_wall
    ],
    colors: ["Black","White"],
    defaultColor: "Black",
    youtube: 'https://www.youtube.com/@enpureindia1634',
    description: 'Advanced 8-Stage Purification System with RO, UV, UF and Alkaline Ionizer Technology. Perfect for Families of 4-6 members.',
    features: [
      '8-Stage Advanced Purification',
      'RO + UV + UF + Alkaline Ionizer Technology',
      'Auto TDS Controller',
      'Up to 1700 PPB of Hydrogen Generation ',
      '7L of Inbuilt Storage Tank',
      'UV inside the Storage Tank',
      'Touch Screen Display (2.8inch) with 6 Different Types(different pH) of Water',
      'App-controlled - both iOS and Android supported',
      'Electronic Water Level Control Switch',
      'Automatic Dry Run Protection',
      'Auto Cleaning Technology',
      'Digital Display Indications',
      'TDS, ORP, pH Display',
      'Self-Serviceable Filters - Easy Maintenance',
      'Food Grade ABS Body',
      'RO Membrane - 400 GPD',
      'RO Booster Pump - 400 GPD',
      'High recovery rate of 70% - Water Saving Auto Revive Technology',
      'Smart Auto-Cleaning Machine',
      'Works without Electricity for Stored RO Water'
    ],
    specifications: {
      'Purification Capacity': '50 L/hour',
      'Applications': 'Table Top/ Wall Mounting/ Cabinet Fit',
      'Filtration': ' 3-in-1 PPC Filter(Sediment + Carbon + Sediment) + RO Membrane + UV Inside the Tank + UF + 5 Platinum Coated Titanium Plates',
      'Number of Plates': '5 Platinum Coated Titanium Plates',
      'Storage Tank': '7 Liters',
      'Alkaline pH Range': '8-11 pH',
      'Acidic pH Range': '3-6.5 pH',
      'Hydrogen Generation': 'Upto 1700 PPB',
      'ORP Level': 'Upto -900',
      'ORP at 9pH': 'Upto -550', 
      'Input Water Pressure': '10-40 PSI',
      'Power Consumption for RO': '60 Watts',
      'Power Consumption for Ionizer': '150 Watts',
      'Operating Voltage':'230V (AC)',
      'Dimensions': '15.5" × 8" × 15.5" ',
      'Weight': '8.5 kg',
      'Warranty': '5 Years'
    },
    warranty: '5 Years Comprehensive Warranty (0% Maintenance Cost Upto 5 Years)',
    installation: true,
  },
  {
    id: '8',
    name: 'EN-S-100',
    category: 'ro-uv-uf-alkaline',
    price: 20900,
    originalPrice: 20900,
    image: s100,
    gallery:[
      xs_s_Wall
    ],
    colors: ["Black","White"],
    defaultColor: "Black",
    youtube: 'https://www.youtube.com/@enpureindia1634',
    description: '7-Stage Purification with Advanced Alkaline Enhancement for Optimal pH Balance and Mineral Retention.',
    features: [
      '7-Stage Purification Process',
      'RO + UV + UF + Alkaline Enhancement',
      'Auto TDS Controller',
      'UV inside the Storage Tank',
      '7L storage capacity',
      'RO Membrane - 100 GPD',
      'RO Booster Pump - 100 GPD',
      'Self-Serviceable Filters - Easy Maintenance',
      'Electronic Water Level Control Switch',
      'Automatic Dry Run Protection',
      'Auto Flush Technology',
      'Digital Display Indications',
      'TDS Display',
      'Food Grade ABS Body',
      'High recovery rate of 70% - Water Saving Auto Revive Technology'
    ],
    specifications: {
      'Purification Capacity': '20 L/hour',
      'Applications': 'Table Top/ Wall Mounting/ Cabinet Fit',
      'Filtration':'3-in-1 PPC Filter(Sediment + Carbon + Sediment) + RO Membrane + UV Inside the Tank + UF(Optional) + Post Carbon (Optional) + Alkaline Cartridge (Optional)',
      'Storage Tank': '7 Liters',
      'Alkaline pH Range': '8.5-9 pH',
      'Input Water Pressure': '10-40 PSI',
      'Power Consumption': '60 Watts',
      'Dimensions': '15.5" × 8" × 15.5" ',
      'Weight': '7.5 kg',
      'Warranty': '1 Year'
    },
    warranty: '1 Year Comprehensive Warranty',
    installation: true,
  },
  {
    id: '9',
    name: 'EN-TNT-MAX',
    category: 'ro-uv-uf-alkaline',
    price: 28200,
    originalPrice: 29900,
    image: tntMax,
    gallery:[
      tntMax_Wall,
    ],
    colors: ["Black","White"],
    defaultColor: "Black",
    youtube: 'https://www.youtube.com/@enpureindia1634',
    description: '7-Stage Purification with Advanced Alkaline Enhancement for Optimal pH Balance and Mineral Retention.',
    features: [
      '7-Stage Purification Process',
      'RO + UV + UF + Alkaline Enhancement',
      'Auto TDS Controller',
      '3 Water Outlet Taps - Normal/Hot/Cold',
      'Normal Water Storage - 9L',
      'Hot Water Storage - 1L',
      'Cold Water Storage - 0.8L',
      'Vegetable Cleaner/ Ozone Detoxifier',
      'TDS and Temperature Display',
      'RO Membrane - 100 GPD',
      'RO Booster Pump - 100 GPD',
      'Digital Monitor Screen',
      'Food Grade ABS Body',
      'High recovery rate of 70% - Water Saving Auto Revive Technology'
    ],
    specifications: {
      'Purification Capacity': '20 L/hour',
      'Applications': 'Table Top/ Wall Mounting/ Cabinet Fit',
      'Storage Tank (Normal + Hot + Cold)': '9 Liters + 1 Liter + 0.8 Liter',
      'Alkaline pH Range': '8.5-9 pH',
      'Input Water Pressure': '10-40 PSI',
      'Power Consumption': '60 Watts',
      'Dimensions': '21" × 11" × 15" ',
      'Weight': '7.5 kg',
      'Warranty': '1 Year'
    },
    warranty: '1 Year Comprehensive Warranty',
    installation: true,
  },
  {
    id: '10',
    name: 'EN-TNT-PRO',
    category: 'ro-uv-uf-alkaline',
    price: 24900,
    originalPrice: 24900,
    image: tntPro,
    gallery:[
      tntMax_Wall
    ],
    colors: ["Black","White"],
    defaultColor: "Black",
    youtube: 'https://www.youtube.com/@enpureindia1634',
    description: '7-Stage Purification with Advanced Alkaline Enhancement for Optimal pH Balance and Mineral Retention.',
    features: [
      '7-Stage Purification Process',
      'RO + UV + UF + Alkaline Enhancement',
      'Manual TDS Controller',
      '2 Water Outlet Taps - Normal/Hot',
      'Normal Water Storage - 9L',
      'Hot Water Storage - 1L',
      'TDS and Temperature Display',
      'RO Membrane - 100 GPD',
      'RO Booster Pump - 100 GPD',
      'Digital Monitor Screen',
      'Food Grade ABS Body',
      'High recovery rate of 70% - Water Saving Auto Revive Technology'
    ],
    specifications: {
      'Purification Capacity': '20 L/hour',
      'Applications': 'Table Top/ Wall Mounting/ Cabinet Fit',
      'Storage Tank (Normal + Hot)': '9 Liters + 1 Liter',
      'Alkaline pH Range': '8.5-9 pH',
      'Input Water Pressure': '10-40 PSI',
      'Power Consumption': '60 Watts',
      'Dimensions': '21" × 11" × 15" ',
      'Weight': '7.5 kg',
      'Warranty': '1 Year'
    },
    warranty: '1 Year Comprehensive Warranty',
    installation: true,
  },
  {
    id: '11',
    name: 'EN-TNT',
    category: 'ro-uv-uf-alkaline',
    price: 18900,
    originalPrice: 20900,
    image: tnt,
    gallery:[
      tnt_Wall
    ],
    colors: ["Black","White"],
    defaultColor: "Black",
    youtube: 'https://www.youtube.com/@enpureindia1634',
    description: '7-Stage Purification with Advanced Alkaline Enhancement for Optimal pH Balance and Mineral Retention.',
    features: [
      '7-Stage Purification Process',
      'RO + UV + UF + Alkaline Enhancement',
      'Auto TDS Controller',
      'Storage Capacity - 9L',
      'TDS and Temperature Display',
      'RO Membrane - 100 GPD',
      'RO Booster Pump - 100 GPD',
      'Digital Monitor Screen',
      'Food Grade ABS Body',
      'High recovery rate of 70% - Water Saving Auto Revive Technology'
    ],
    specifications: {
      'Purification Capacity': '20 L/hour',
      'Applications': 'Table Top/ Wall Mounting/ Cabinet Fit',
      'Storage Tank': '9 Liters',
      'Alkaline pH Range': '8.5-9 pH',
      'Input Water Pressure': '10-40 PSI',
      'Power Consumption': '60 Watts',
      'Dimensions': '21" × 11" × 15" ',
      'Weight': '7.5 kg',
      'Warranty': '1 Year'
    },
    warranty: '1 Year Comprehensive Warranty',
    installation: true,
  },
  {
    id: '12',
    name: 'EN-TNT-100LPH',
    category: 'commercial',
    price: 49900,
    originalPrice: 49900,
    image: tnt100lph,
    gallery:[
      tnt100lphWall,
      tnt100lphChef
    ],
    colors: ["Black","White"],
    defaultColor: "Black",
    youtube: 'https://www.youtube.com/@enpureindia1634',
    description: 'High-Capacity Commercial Water Purification System Designed for Offices, Restaurants, and Small Businesses.',
    features: [
      '7-Stage Purification Process',
      'RO + UV + UF + Alkaline Enhancement',
      'Manual TDS Controller',
      'Storage Capacity - 9L',
      'TDS and Temperature Display',
      'RO Membrane - 400 GPD',
      'RO Booster Pump - 400 GPD',
      'Digital Monitor Screen',
      'Food Grade ABS Body',
      'High recovery rate of 70% - Water Saving Auto Revive Technology'
    ],
    specifications: {
      'Purification Capacity': '100 L/hour',
      'Applications': 'Table Top/ Wall Mounting/ Cabinet Fit',
      'Storage Tank': '9 Liters',
      'Alkaline pH Range': '8.5-9 pH',
      'Input Water Pressure': '10-40 PSI',
      'Power Consumption': '60 Watts',
      'Dimensions': '21" × 11" × 15" ',
      'Weight': '7.5 kg',
      'Warranty': '1 Year'
    },
    warranty: '1 Year Comprehensive Warranty',
    installation: true,
  },
  {
    id: '13',
    name: 'EN-TNT-50LPH',
    category: 'commercial',
    price: 39900,
    originalPrice: 39900,
    image: tnt50lph,
    gallery:[
      tnt50lphWall,
      tnt50lphChef
    ],
    colors: ["Black","White"],
    defaultColor: "Black",
    youtube: 'https://www.youtube.com/@enpureindia1634',
    description: 'High-Capacity Commercial Water Purification System Designed for Offices, Restaurants, and Small Businesses.',
    features: [
      '7-Stage Purification Process',
      'RO + UV + UF + Alkaline Enhancement',
      'Manual TDS Controller',
      'Storage Capacity - 9L',
      'TDS and Temperature Display',
      'RO Membrane - 400 GPD',
      'RO Booster Pump - 400 GPD',
      'Digital Monitor Screen',
      'Food Grade ABS Body',
      'High recovery rate of 70% - Water Saving Auto Revive Technology'
    ],
    specifications: {
      'Purification Capacity': '50 L/hour',
      'Applications': 'Table Top/ Wall Mounting/ Cabinet Fit',
      'Storage Tank': '9 Liters',
      'Alkaline pH Range': '8.5-9 pH',
      'Input Water Pressure': '10-40 PSI',
      'Power Consumption': '60 Watts',
      'Dimensions': '21" × 11" × 15" ',
      'Weight': '7.5 kg',
      'Warranty': '1 Year'
    },
    warranty: '1 Year Comprehensive Warranty',
    installation: true,
  }
];