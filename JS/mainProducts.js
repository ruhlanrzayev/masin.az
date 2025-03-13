const products = [
  {
    id: 0,
    brand: "Abarth",
    model: "Seltos",
    banType: "Offroader / SUV",
    odometer: 30000,
    odometerUnit: "km",
    price: 44000,
    currency: "AZN",
    year: "2005",
    engine: 1.5,
    credit: false,
    barter: false,
    category: "processed",
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F11%2F11%2F19%2F41%2F5f34c8eb-5138-4d0c-b78e-8c817d98aa5f%2F52522_Mu2ZZs1LqQkRDJpgK-R_xw.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: 1,
    brand: "Audi",
    model: "A5",
    banType: "Sedan",
    odometer: 165000,
    odometerUnit: "km",
    price: 16000,
    currency: "USD",
    year: "2013",
    barter: false,
    engine: 1.5,
    credit: true,
    category: "processed",
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2022%2F08%2F31%2F23%2F10%2F15%2F729c8b30-ea56-45d3-bdf7-f8a7b0e9e950%2F3015_eyJujDX3UzCcNboINLPl_g.jpg",
    ],
    city: "Masallı",
    dates: "Bu gün  14:30",
  },
  {
    id: 2,
    brand: "Toyota",
    model: "Camry",
    banType: "Sedan",
    odometer: 191000,
    odometerUnit: "km",
    price: 17300,
    currency: "AZN",
    year: "2007",
    barter: false,
    credit: false,
    category: "processed",
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2022%2F12%2F22%2F10%2F26%2F59%2F9f754715-d306-49f2-b2e2-60ab36f771e6%2F80870_wrsWRRQ-A4ySXmcF4jOpXg.jpg",
    ],
    city: "Ağdam",
    dates: "Bu gün  14:30",
  },
  {
    id: 3,
    brand: "Ford",
    model: "Transit",
    banType: "Karvan",
    odometer: 11000,
    odometerUnit: "km",
    price: 44500,
    currency: "USD",
    year: "2008",
    barter: false,
    credit: true,
    category: "processed",
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2022%2F09%2F02%2F17%2F28%2F48%2Fa0bc3142-1854-48f9-9c81-ff7d7010c1ae%2F59959_CCv7BAr0Tlz1x7lQiFAsQA.jpg",
    ],
    city: "Naftalan",
    dates: "Bu gün  14:30",
  },
  {
    id: 4,
    brand: "Bestune",
    model: "T77",
    banType: "Offroader / SUV",
    odometer: 0,
    odometerUnit: "km",
    price: 45900,
    currency: "AZN",
    year: "2022",
    barter: false,
    credit: false,
    category: "processed",
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2022%2F09%2F19%2F17%2F33%2F45%2F027df0e9-c5df-46a1-8428-2a356ee17d45%2F44832_yspkMx-Q-VQPULaAOI_MSw.jpg",
    ],
    city: "Oğuz",
    dates: "Bu gün  14:30",
  },
  {
    id: 5,
    brand: "Honggi",
    model: "H9",
    banType: "Sedan",
    odometer: 0,
    odometerUnit: "km",
    price: 94000,
    currency: "AZN",
    year: "2005",
    credit: false,
    barter: true,
    category: "new",
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2022%2F04%2F19%2F15%2F59%2F38%2F716b705f-e564-4d55-995a-7762e6881f4c%2F5883_vLXDlraa-zAkIkuXUdl05w.jpg",
    ],
    city: "Qax",
    dates: "Bu gün  14:30",
  },
  {
    id: 6,
    brand: "Ford",
    model: "Fusion",
    banType: "Sedan",
    odometer: 141622,
    odometerUnit: "km",
    price: 19500,
    currency: "AZN",
    year: "2015",
    credit: false,
    barter: true,
    category: "processed",
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F29%2F15%2F18%2F37%2F46fbb03a-0cd9-4409-bbc6-03023e588329%2F67200_jmTFoB8S36kCqexBERvuhA.jpg",
    ],
    city: "Gədəbəy",
    dates: "Bu gün  14:30",
  },
  {
    id: 7,
    brand: "Ford",
    model: "Fusion",
    banType: "Sedan",
    odometer: 129000,
    odometerUnit: "km",
    price: 25900,
    currency: "AZN",
    year: "2017",
    barter: false,
    credit: false,
    category: "processed",
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F29%2F18%2F08%2F03%2F20fc5e31-1f10-4b83-ade8-2d513db1c746%2F67209_O84rpgQMDkok2-nwStiHpg.jpg",
    ],
    city: "Gəncə",
    dates: "Bu gün  14:30",
  },
  {
    id: 8,
    brand: "Ford",
    model: "Fusion",
    banType: "Sedan",
    odometer: 46000,
    odometerUnit: "km",
    price: 21200,
    currency: "USD",
    year: "2020",
    credit: false,
    barter: true,
    category: "processed",
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2022%2F11%2F11%2F19%2F52%2F19%2F56291fd3-453f-426f-a911-3ca4f2e26362%2F17663_stveq78AA4WtPo3oyvVbHA.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: 9,
    brand: "Ford",
    model: "Fusion",
    banType: "Sedan",
    odometer: 0,
    odometerUnit: "km",
    price: 18500,
    currency: "AZN",
    year: "2015",
    barter: false,
    credit: true,
    category: "new",
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F19%2F14%2F59%2F27%2F530eae46-d07d-4abc-bacb-de36d3088f0f%2F64922_Iu72BGd2C_OFe3WxVk-qGQ.jpg",
    ],
    city: "Ağcabədi",
    dates: "Bu gün  14:30",
  },
  {
    id: 10,
    brand: "Kia",
    model: "Seltos",
    banType: "Offroader / SUV",
    odometer: 30000,
    odometerUnit: "km",
    price: 40000,
    currency: "AZN",
    year: "2005",
    barter: false,
    credit: false,
    category: "processed",
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2022%2F10%2F20%2F20%2F19%2F37%2Ff0d40936-67d4-47b2-8f88-39e95c546ae3%2F57379_yzPNLn7TAwj6RDByWKgvOA.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: 11,
    brand: "Ford",
    model: "Fusion",
    banType: "Sedan",
    odometer: 192000,
    odometerUnit: "km",
    price: 23500,
    currency: "AZN",
    year: "2014",
    credit: false,
    category: "processed",
    engine: 1.5,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F30%2F15%2F48%2F00%2F097e698b-cbe7-4539-ab25-9a13a2a753fd%2F75247_xWTTEaAst4sLzUzIUkthPg.jpg",
    ],
    city: "Ağdaş",
    dates: "Bu gün  14:30",
  },
  {
    id: 12,
    brand: "Ford",
    model: "Fusion",
    banType: "Sedan",
    odometer: 20500,
    odometerUnit: "km",
    price: 42000,
    currency: "AZN",
    year: "2015",
    credit: true,
    engine: 1.5,
    category: "processed",
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F22%2F20%2F08%2F29%2F52caefc7-1570-4c7c-a077-fd1f816203cb%2F64916_MHdPUxu1eQ3kLAtY4hEzYg.jpg",
    ],
    city: "Ağsu",
    dates: "Bu gün  14:30",
  },
  {
    id: 13,
    brand: "Fusion",
    model: "Ford",
    banType: "Sedan",
    odometer: 30000,
    odometerUnit: "km",
    price: 40000,
    currency: "AZN",
    year: "2005",
    credit: true,
    category: "processed",
    engine: 1.5,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F06%2F18%2F51%2F58%2Fc79abd63-a69c-48eb-b071-37506b868231%2F57686_CzbKH3fGBbBdGyq3D-qstQ.jpg",
    ],
    city: "Ağdaş",
    dates: "Bu gün  14:30",
  },
  {
    id: 14,
    brand: "Ford",
    model: "Sedan",
    banType: "Sedan",
    odometer: 0,
    odometerUnit: "km",
    price: 40000,
    currency: "AZN",
    engine: 1.5,
    year: "2015",
    credit: false,
    category: "new",
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F28%2F22%2F00%2F43%2F37fc61b4-f0e5-46c2-af9d-80f0b15b12c1%2F67189_ktr5R2gTZl44Bt3WKDgx2w.jpg",
    ],
    city: "Bərdə",
    dates: "Bu gün  14:30",
  },
  {
    id: 15,
    brand: "Ford",
    model: "Sedan",
    banType: "Sedan",
    odometer: 122000,
    odometerUnit: "km",
    price: 40000,
    currency: "AZN",
    engine: 1.5,
    year: "2015",
    credit: false,
    category: "processed",
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F28%2F22%2F00%2F43%2F37fc61b4-f0e5-46c2-af9d-80f0b15b12c1%2F67189_ktr5R2gTZl44Bt3WKDgx2w.jpg",
    ],
    city: "Bərdə",
    dates: "Bu gün  14:30",
  },
  {
    id: 16,
    brand: "Ford",
    model: "Sedan",
    banType: "Sedan",
    odometer: 0,
    odometerUnit: "km",
    price: 40000,
    currency: "EUR",
    year: "2015",
    credit: true,
    engine: 1.5,
    category: "new",
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F22%2F15%2F32%2F14%2F772966ba-5666-475a-a372-f12bf29a6393%2F78864_UB3_bVH_R5hoI0WN_uPsDQ.jpg",
    ],
    city: "Bərdə",
    dates: "Bu gün  14:30",
  },
  {
    id: 17,
    brand: "Ford",
    model: "Fusion",
    banType: "Sedan",
    odometer: 10000,
    odometerUnit: "km",
    price: 33000,
    currency: "AZN",
    year: "2005",
    engine: 1.5,
    credit: true,
    category: "processed",
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F22%2F21%2F06%2F21%2F7fc2989d-5606-4bba-84d5-91a7c1e3c11b%2F86601_iBRqpWaL3FFHzWvi-4ZGNQ.jpg",
    ],
    city: "Yevlax",
    dates: "Bu gün  14:30",
  },
  {
    id: 18,
    brand: "Ford",
    model: "Fusion",
    banType: "Sedan",
    odometer: 30000,
    odometerUnit: "km",
    price: 40000,
    currency: "EUR",
    year: "2005",
    engine: 1.5,
    credit: false,
    barter: true,
    category: "processed",
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F12%2F19%2F55%2F07%2F9e2ccf81-d944-4b2f-8e63-a63bb368dfeb%2F8520_gtkNyAHKA6hUsNhuKMZOxw.jpg",
    ],
    city: "Göyçay",
    dates: "Bu gün  14:30",
  },
  {
    id: 19,
    brand: "Ford",
    model: "Fusion",
    banType: "Sedan",
    odometer: 50000,
    odometerUnit: "km",
    price: 12000,
    currency: "USD",
    year: "2005",
    engine: 1.5,
    credit: true,
    category: "processed",
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F06%2F13%2F55%2F32%2Facf4c052-5a2e-4bd0-a0df-e28ecc595151%2F11719_z5jP8sffJjJ_qsKGBXbQsw.jpg",
    ],
    city: "İmişli",
    dates: "Bu gün  14:30",
  },
  {
    id: 20,
    brand: "Mercedes",
    model: "A 140",
    banType: "Hetçbek",
    odometer: 50000,
    odometerUnit: "km",
    price: 12000,
    currency: "USD",
    category: "processed",
    engine: 1.5,
    year: "2005",
    credit: true,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F29%2F19%2F39%2F48%2Fbae4dd1b-0f4e-4894-9e9b-7d4ed873ab27%2F67204_3_Uie01KEoSx4Ki0QWYwnA.jpg",
    ],
    city: "Bərdə",
    dates: "Bu gün  14:30",
  },
  {
    id: 21,
    brand: "Chevrolet",
    model: "Gatsby",
    banType: "Kabriolet",
    odometer: 0,
    odometerUnit: "km",
    price: 126000,
    currency: "USD",
    year: "1986",
    engine: 1.5,
    barter: false,
    credit: false,
    category: "new",
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2022%2F09%2F16%2F12%2F50%2F42%2Febf8e8a9-4b9e-42d1-bb0c-725555a056e1%2F54915_qtOrHDVrjjW3-GNgDyN8vg.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: 22,
    brand: "Jaguar",
    model: "F-Type R",
    banType: "Kupe",
    odometer: 0,
    odometerUnit: "km",
    price: 53000,
    currency: "USD",
    year: "2014",
    credit: true,
    engine: 1.5,
    category: "new",
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2022%2F07%2F08%2F11%2F07%2F31%2Fd5fce961-38e1-47dd-8cf2-0eafc47ddb85%2F48187_u9isVaR_H7KHZwjuTS97bA.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: 23,
    brand: "Mercedes",
    model: "E 430",
    banType: "Kupe",
    odometer: 20200,
    odometerUnit: "km",
    price: 22000,
    currency: "AZN",
    year: "2000",
    barter: false,
    credit: false,
    category: "processed",
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F30%2F18%2F47%2F06%2F92202a2f-1f27-453f-a37e-c03b988d1187%2F49755_qZklKVXHkSfjWtrA_iHn_A.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: 24,
    brand: "C.Moto",
    model: "CM250R- HY",
    banType: "Motosiklet",
    odometer: 0,
    odometerUnit: "km",
    price: 5400,
    currency: "AZN",
    year: "2023",
    barter: false,
    credit: false,
    category: "new",
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F31%2F16%2F42%2F46%2Fb60abf3c-aff7-450d-b793-bf93ceff3a06%2F15660_QvgVQpBtt9j4-9bpnj5N8Q.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: 25,
    brand: "Tayota",
    model: "Sienna",
    banType: "Minivan",
    odometer: 22000,
    odometerUnit: "km",
    price: 51400,
    currency: "USD",
    year: "2020",
    engine: 1.5,
    credit: false,
    category: "processed",
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2022%2F12%2F29%2F00%2F03%2F08%2F2ac930d3-3d5a-4b19-94fb-b63850ff5693%2F15334_aQbJ3Ea3Oz_WMOo_hHKCAg.jpg",
    ],
    city: "Horadiz",
    dates: "Bu gün  14:30",
  },
  {
    id: 26,
    brand: "Tayota",
    model: "Prius",
    banType: "Liftbek",
    odometer: 0,
    odometerUnit: "km",
    price: 13900,
    currency: "EUR",
    year: "2020",
    credit: false,
    engine: 1.5,
    category: "new",
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F24%2F14%2F33%2F40%2F0f9b3be6-4ae5-417a-bcf1-db0f39927d4e%2F33485_P0YBt9TmP9pEv29rCuhWLg.jpg",
    ],
    city: "İsmayıllı",
    dates: "Bu gün  14:30",
  },
  {
    id: 27,
    brand: "Porsche",
    model: "Panamera GTS",
    banType: "Liftbek",
    odometer: 188293,
    odometerUnit: "km",
    price: 55000,
    currency: "EUR",
    year: "2020",
    credit: false,
    engine: 1.5,
    category: "processed",
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F02%2F01%2F01%2F26%2F17%2Ffb77794e-9d37-424e-944d-3b233bc03467%2F12003_RjupQqZAh9kZFu-IaHqJ7g.jpg",
    ],
    city: "Şahbuz",
    dates: "Bu gün  14:30",
  },
  {
    id: 28,
    brand: "Paz",
    model: "672",
    banType: "Avtobus",
    odometer: 50000,
    odometerUnit: "km",
    price: 12000,
    currency: "USD",
    year: "2005",
    credit: true,
    engine: 1.5,
    category: "processed",
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F23%2F21%2F49%2F47%2F18227380-ca87-4ecc-8497-3c972bce2db1%2F42127_wKRyc3J6-wogJe-WZMY-ug.jpg",
    ],
    city: "İmişli",
    dates: "Bu gün  14:30",
  },
  {
    id: 29,
    brand: "Ferrari",
    model: "California",
    banType: "Rodster",
    odometer: 0,
    odometerUnit: "km",
    price: 135000,
    currency: "USD",
    year: "2017",
    barter: false,
    credit: true,
    category: "new",
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2022%2F12%2F28%2F15%2F40%2F48%2Fb18d5c9e-58d7-4e2e-9bba-1c29cbce9940%2F61425_r8Og48iy5Jr9GvOTtAnnyQ.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: 30,
    brand: "Mercedes",
    model: "E 280",
    banType: "Sedan",
    odometer: 129000,
    odometerUnit: "km",
    price: 19700,
    currency: "AZN",
    year: "2009",
    barter: false,
    credit: false,
    category: "processed",
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F31%2F21%2F26%2F41%2Fa8168d7c-d02e-495f-8f01-69fcdc5e3e03%2F11997_tG1Qr36Aqkf171mt0oZG7Q.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: 31,
    brand: "Mercedes",
    model: "E 200",
    banType: "Sedan",
    odometer: 0,
    odometerUnit: "km",
    price: 14000,
    currency: "AZN",
    year: "2001",
    barter: false,
    credit: false,
    category: "new",
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2023%2F02%2F01%2F00%2F51%2F52%2F5638fb6b-7249-4f46-abd0-aa1efc451203%2F15643_AMLCTJrCWlvBJ6SXlF8fpg.jpg",
    ],
    city: "Sumqayıt",
    dates: "Bu gün  14:30",
  },
  {
    id: 32,
    brand: "Mercedes",
    model: "C 240",
    banType: "Sedan",
    odometer: 451000,
    odometerUnit: "km",
    price: 9500,
    currency: "AZN",
    year: "1997",
    barter: false,
    credit: false,
    category: "processed",
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2023%2F02%2F01%2F00%2F50%2F33%2Fd092e0d3-04c1-4af7-a730-c240c35f5f7d%2F15649_bymZBq9rqL0M4TLjYtXR4A.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: 33,
    brand: "Mercedes",
    model: "A 170",
    banType: "Hetçbek",
    odometer: 0,
    odometerUnit: "km",
    price: 10200,
    currency: "AZN",
    year: "2006",
    barter: false,
    credit: false,
    category: "new",
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F30%2F20%2F06%2F23%2F76cef983-6b3b-47b8-a58d-dfb3cf469b5d%2F75221_xUr0C4Z--56j6RIijVBWVA.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: 34,
    brand: "Mercedes",
    model: "Actros 1841",
    banType: "Dartqı",
    odometer: 1300000,
    odometerUnit: "km",
    price: 67500,
    currency: "AZN",
    year: "2008",
    engine: 1.5,
    barter: false,
    credit: false,
    category: "processed",
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2022%2F11%2F09%2F08%2F03%2F05%2Fcabbc910-8026-456f-a642-62ab99fc313e%2F10369_bNrqvfrJMy63hz0DwhXPcg.jpg",
    ],
    city: "Lənkəran",
    dates: "Bu gün  14:30",
  },
  {
    id: 35,
    brand: "Mercedes",
    model: "G 63 AMG",
    banType: "Offroader / SUV",
    odometer: 0,
    odometerUnit: "km",
    price: 90200,
    currency: "AZN",
    year: "2016",
    barter: false,
    credit: true,
    category: "new",
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F31%2F20%2F36%2F16%2Ffb49abb0-fdf6-4595-87b0-27bdd3c3d226%2F12009_q1FoKTnpPA3uE3dtRcZZUA.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: 36,
    brand: "Mercedes",
    model: "200 D",
    banType: "Sedan",
    odometer: 552000,
    odometerUnit: "km",
    price: 5200,
    currency: "AZN",
    year: "1990",
    engine: 1.5,
    barter: false,
    credit: false,
    category: "processed",
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F31%2F19%2F25%2F15%2F3aa9741d-4cc3-4ea0-9c3f-66ae5de0516b%2F6316_s0p7GRbRLVyaXdPugbuHeA.jpg",
    ],
    city: "Saatlı",
    dates: "Bu gün  14:30",
  },
  {
    id: 37,
    brand: "Mercedes",
    model: "0403",
    banType: "Avtobus",
    odometer: 700000,
    odometerUnit: "km",
    price: 110000,
    currency: "AZN",
    year: "2000",
    barter: false,
    credit: true,
    category: "processed",
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F21%2F15%2F25%2F13%2F02798cb4-1129-4629-93af-b6dccb089966%2F78886_JqpeH6a5xab8QHW6E7dXKg.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: 38,
    brand: "Mercedes",
    model: "GLC 300 Coupe",
    banType: "Kupe",
    odometer: 0,
    odometerUnit: "km",
    price: 72000,
    currency: "USD",
    year: "2021",
    engine: 1.5,
    credit: true,
    barter: true,
    category: "new",
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F12%2F12%2F32%2F34%2Fef66aacc-979f-4824-9c38-4151faad457e%2F45824__18habOQ883XXQctAU0TAg.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: 39,
    brand: "Mercedes",
    model: "AMG GT 53",
    banType: "Sedan",
    odometer: 0,
    odometerUnit: "km",
    price: 210000,
    currency: "EUR",
    year: "2023",
    barter: false,
    credit: true,
    engine: 1.5,
    category: "new",
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2022%2F11%2F24%2F15%2F43%2F27%2Ff071d240-bc97-412c-a94a-bd3d676a51b2%2F23828_xAXUnAgmfcF8tuCOsfkz8Q.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: 40,
    brand: "Mercedes",
    model: "170 V",
    banType: "Kupe",
    odometer: 82000,
    odometerUnit: "km",
    price: 500000,
    currency: "AZN",
    year: "1938",
    barter: false,
    credit: false,
    category: "processed",
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2022%2F10%2F27%2F14%2F39%2F36%2F923ef17d-e1f9-4149-9e94-f925cf7661b7%2F42871_umKrn-lPv1BfkzuD5arziA.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: 41,
    brand: "Jaguar",
    model: "XF",
    banType: "Sedan",
    odometer: 0,
    odometerUnit: "km",
    price: 35000,
    currency: "AZN",
    year: "2014",
    credit: false,
    category: "new",
    engine: 1.5,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F28%2F12%2F48%2F02%2Fe5c1b65a-c97f-4f94-ab4d-fcac497b20b6%2F67186_iILaSiss0FC-yQLMTjYR9A.jpg",
    ],
    city: "Sumqayıt",
    dates: "Bu gün  14:30",
  },
  {
    id: 42,
    brand: "Jaguar",
    model: "S-Type",
    banType: "Sedan",
    odometer: 190000,
    odometerUnit: "km",
    price: 17000,
    currency: "AZN",
    year: "2007",
    barter: false,
    credit: false,
    category: "processed",
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F30%2F20%2F01%2F36%2Fb8325e8f-b0b1-4423-8163-59ab513c0445%2F49759_qjtKYlmSfvuA_6JFNFa8AQ.jpg",
    ],
    city: "Gəncə",
    dates: "Bu gün  14:30",
  },
  {
    id: 43,
    brand: "Jaguar",
    model: "XF",
    banType: "Sedan",
    odometer: 0,
    odometerUnit: "km",
    price: 58000,
    currency: "USD",
    year: "2019",
    barter: false,
    credit: true,
    category: "new",
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2021%2F02%2F04%2F11%2F55%2F52%2Ff3ddd4c9-1600-4d6d-b34f-5853f3c1ff71%2F19864_8RtK5APm1te6PSMZ3o2MLg.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: 44,
    brand: "Jaguar",
    model: "F-Type R,",
    banType: "Sedan",
    odometer: 0,
    odometerUnit: "km",
    price: 60000,
    currency: "EUR",
    year: "2020",
    barter: false,
    credit: true,
    category: "new",
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2022%2F12%2F31%2F11%2F03%2F22%2Fb774f69d-3dc8-45d8-bf74-7fe3b1e68012%2F16508_ZEyGXYpx-MxvNSzE3M3s7A.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: 45,
    brand: "Acura",
    model: "MDX",
    banType: "Offroader / SUV",
    odometer: 500,
    odometerUnit: "km",
    price: 60000,
    currency: "EUR",
    year: "2020",
    barter: false,
    credit: false,
    category: "processed",
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F31%2F13%2F41%2F14%2F30be4e7e-c9ac-455d-8616-616f096d6da7%2F71593_f9yNl7lW4FO-spgOift6dw.jpg",
    ],
    city: "Mingecevir",
    dates: " Bu gün  14:30",
  },
]

renderProducts();

// Identify Values
const indexMarka = document.getElementById('indexMarka');
const indexModel = document.getElementById('indexModel');
const indexCity = document.getElementById('indexCity');
const indexBan = document.getElementById('indexBanType');
const indexYearMax = document.getElementById('indexYearMax');
const indexYearMin = document.getElementById('indexYearMin');
const priceMin = document.getElementById('priceMin');
const priceMax = document.getElementById('priceMax');

// Create Products Cart
function renderProducts(value = "all", selectedMaxYear, selectedMinYear) {
  const shuffledProducts = products.sort(() => Math.random() - 0.5);  
  const cardContainer = document.getElementById('cardContainer');
  let lockedId = [];
  let cardCode = '';
  cardContainer.innerHTML = "";
  
  for (const elm of products) {
    if (!lockedId.includes(elm.id)) {
      if (value == "all" || elm.category == value || elm.brand == value  || elm.currency == value
        || elm.model == value || elm.banType == value || elm.city == value || (value == "credit" && elm.credit) 
        || (value == "barter" && elm.barter) || (value == "both" && elm.credit && elm.barter)
        || elm.year >= selectedMinYear || elm.year <= selectedMaxYear) {
          cardCode += 
          ` 
          <div class="card" id="product-${elm.id}" onclick="getDetails(${elm.id})">
              <div class="image-content">
                  <div class="icons" id="icons">
                    <div class="icon">
                      ${elm.credit ? '<i class="fa-solid fa-percent percent"></i>' : ''}
                      ${elm.barter ? '<i class="fa-solid fa-arrows-spin arrow"></i>' : ''}
                    </div>
                    <i class="fa-regular fa-heart heart" onclick="event.stopPropagation(); addFavorite('${elm.id}')"></i>
                  </div>
                  <img src="${elm.images}" alt="car img">
              </div>
              <div class="text-content">
                  <h3>${elm.price} ${elm.currency}</h3>
                  <p>${elm.brand} ${elm.model}</p>
                  <p>${elm.year}, ${elm.engine}L, ${elm.odometer} ${elm.odometerUnit}</p>
                  <span>${elm.city} , ${elm.dates}</span>
              </div>
          </div>
          `;
        lockedId.push(elm.id);
      }
    }
  }
  cardContainer.innerHTML += cardCode;
}

// Filter Products
function filterProducts(value) {
  renderProducts(value);
}

// Identify max and min year on input
let years = []
for(let i = 2025; i >= 1905; i--) years.push(i);

for (const elm of years) {
  indexYearMax.innerHTML += `<option value="${elm}">${elm}</option>`
  indexYearMin.innerHTML += `<option value="${elm}" >${elm}</option>`
}

// // Filter max and min year
// indexYearMax.addEventListener('change', (event) => {
//   selectedMaxYear = event.target.value;
//   renderProducts(selectedMaxYear)
// })

// indexYearMin.addEventListener('change', (event) => {
//   selectedMinYear = event.target.value;
//   renderProducts(selectedMinYear)
// })

// Identify brand and model
let brands = [];
for (const elm of products) if(!brands.includes(elm.brand)) brands.push(elm.brand)
brands.sort();
for(const elm of brands) indexMarka.innerHTML += `<option value="${elm}">${elm}</option>`

let selectedBrand = "all";

// Change brand
indexMarka.addEventListener('change', (event) => {
  selectedBrand = event.target.value;
  let brand = event.target
  renderProducts(selectedBrand)
  renderModel(brand);
});

// Filter Max and Min price
priceMin.addEventListener('input', (event) => {
  const minPrice = event.target.value;
  renderProductsByPrice(minPrice, priceMax.value);
});

priceMax.addEventListener('input', (event) => {
  const maxPrice = event.target.value;
  renderProductsByPrice(priceMin.value, maxPrice);
});

function renderProductsByPrice(minPrice, maxPrice) {
  const cardContainer = document.getElementById('cardContainer');
  let lockedId = [];
  let cardCode = '';
  cardContainer.innerHTML = "";

  for (const elm of products) {
    if (!lockedId.includes(elm.id)) {
      if ((minPrice === "" || elm.price >= minPrice) && (maxPrice === "" || elm.price <= maxPrice)) {
        cardCode += 
        ` 
          <div class="card" id="${elm.id}" onclick="getDetails(${elm.id})">
              <div class="image-content">
                  <div class="icons" id="icons">
                    <div class="icon">
                      ${elm.credit ? '<i class="fa-solid fa-percent percent"></i>' : ''}
                      ${elm.barter ? '<i class="fa-solid fa-arrows-spin arrow"></i>' : ''}
                    </div>
                    <i class="fa-regular fa-heart heart" onclick="event.stopPropagation(); addFavorite('${elm.id}')"></i>
                  </div>
                  <img src="${elm.images}" alt="car img">
              </div>
              <div class="text-content">
                  <h3>${elm.price} ${elm.currency}</h3>
                  <p>${elm.brand} ${elm.model}</p>
                  <p>${elm.year}, ${elm.engine}L, ${elm.odometer} ${elm.odometerUnit}</p>
                  <span>${elm.city} , ${elm.dates}</span>
              </div>
          </div>
        `;
        lockedId.push(elm.id);
      }
    }
  }
  cardContainer.innerHTML += cardCode;
}


// Identify model
function renderModel(brand) {
  let modelCode = ''
  let models = products.filter(product => product.brand === brand.value).map(product => product.model);
  models = [...new Set(models)];
  indexModel.disabled = false;
  for (const model of models) {
    modelCode += `<option value="${model}">${model}</option>`;
  }
  indexModel.innerHTML += modelCode;
}

// Change Model
indexModel.addEventListener('change', (event) => {
  selectedModel = event.target.value;
  renderProducts(selectedModel);
})

// City
let cityCode = '';
const cities = [];
for(const elm of products) if(!cities.includes(elm.city)) cities.push(elm.city);
cities.sort()
for(const city of cities) {
  cityCode += `<option value="${city}">${city}</option>`
}
indexCity.innerHTML += cityCode;

// Filter City
indexCity.addEventListener('change', (event) => {
  selectedCity = event.target.value;
  renderProducts(selectedCity)
})

// Clear Inputs

function clearInputs() {
  indexMarka.value = "DefaultMarka";
  indexModel.value = "DefaultModel";
  indexCity.value = "DefaultCity";
  indexBan.value = "DefaultBanType";
  indexYearMin.value = "DefaultMax";
  indexYearMax.value = "DefaultMin";
  priceMax.value = '';
  priceMin.value = '';
  indexModel.disabled = true;
  if(barterFilterActive == true) barterFilterActive == false
  if(kreditFilterActive == true) kreditFilterActive == false
  kredit.checked = false;
  barter.checked = false;
  allP.checked = true;
  newP.checked = false;
  processed.checked = false;
  azn.selected = true;
  applyFilters();
  renderProducts();
}

// Kredit Filter
// Barter Filter
let kreditFilterActive = false;
let barterFilterActive = false;

function filterKredit() {
  kreditFilterActive = !kreditFilterActive;
  applyFilters();
}

function filterBarter() {
  barterFilterActive = !barterFilterActive;
  applyFilters();
}

function applyFilters() {
  if (kreditFilterActive && barterFilterActive) renderProducts("both");
  else if (kreditFilterActive) renderProducts("credit");
  else if (barterFilterActive) renderProducts("barter");
  else renderProducts("all");
}

// Identify Ban Type
const banType = document.getElementById('indexBanType');
let banCode = '';
let bans = []
for(const ban of products) if(!bans.includes(ban.banType)) bans.push(ban.banType);
bans.sort()
for(const ban of bans) banCode += `<option value="${ban}">${ban}</option>`
banType.innerHTML += banCode;

// Change BanType
let selectedBanType;
indexBan.addEventListener('change', (event) => {
  selectedBanType = event.target.value;
  renderProducts(selectedBanType);
})

// Change Currency
let selectedCurrency;
indexCurrency.addEventListener('change' , (event) => {
  selectedCurrency = event.target.value;
  renderProducts(selectedCurrency)
})

// sort data's
function sortProducts() {
  let sortType = document.getElementById("sortProducts").value;

  switch (sortType) {
      case "all":
          renderProducts();
          break;
      case "sortStr":
          sortByNameAscending();
          break;
      case "sortReverseStr":
          sortByNameDescending();
          break;
      case "sortChp":
          sortByPriceAscending();
          break;
      case "sortExp":
          sortByPriceDescending();
          break;
      default: 
          console.log('error404')
  }
}

function renderNewProducts() {
  const cardContainer = document.getElementById('cardContainer');
  let lockedId = [];
  let cardCode = '';
  cardContainer.innerHTML = "";

  for (const elm of products) {
    if (!lockedId.includes(elm.id)) { 
      {
          cardCode += 
          ` 
          <div class="card" id="product-${elm.id}" onclick="getDetails(${elm.id})">
              <div class="image-content">
                  <div class="icons" id="icons">
                    <div class="icon">
                      ${elm.credit ? '<i class="fa-solid fa-percent percent"></i>' : ''}
                      ${elm.barter ? '<i class="fa-solid fa-arrows-spin arrow"></i>' : ''}
                    </div>
                    <i class="fa-regular fa-heart heart" onclick="event.stopPropagation(); addFavorite('${elm.id}')"></i>
                  </div>
                  <img src="${elm.images}" alt="car img">
              </div>
              <div class="text-content">
                  <h3>${elm.price} ${elm.currency}</h3>
                  <p>${elm.brand} ${elm.model}</p>
                  <p>${elm.year}, ${elm.engine}L, ${elm.odometer} ${elm.odometerUnit}</p>
                  <span>${elm.city} , ${elm.dates}</span>
              </div>
          </div>
          `;
        lockedId.push(elm.id);
      }
    }
  }
  cardContainer.innerHTML += cardCode;
}

function sortByNameAscending() {
  products.sort((a, b) => a.brand.localeCompare(b.brand));
  renderNewProducts();
}

function sortByNameDescending() {
  products.sort((a, b) => b.brand.localeCompare(a.brand));
  renderNewProducts();
}

function sortByPriceAscending() {
  const exchangeRates = {
    USD: 1.7, 
    EUR: 1.9, 
    AZN: 1
  };

  products.sort((a, b) => {
    const priceA = a.price * exchangeRates[a.currency];
    const priceB = b.price * exchangeRates[b.currency];
    return priceA - priceB;
  });

  renderNewProducts();
}
function sortByPriceDescending() {
  const exchangeRates = {
    USD: 1.7, 
    EUR: 1.9, 
    AZN: 1
  };
  products.sort((a, b) => {
    const priceA = a.price * exchangeRates[a.currency];
    const priceB = b.price * exchangeRates[b.currency];
    return priceB - priceA;
  });
  renderNewProducts();
}

// const inputsContainer = document.getElementById('inputsContainer')
// const inputsAltContainer = document.getElementById('inputsAltContainer')
// const productsContainer = document.getElementById('productsContainer')
// const favoriteContainer = document.getElementById('favoriteContainer');
// const favButton = document.getElementById('favoriteCont')
// const homeButton = document.getElementById('homeCont')
const detailsContainer = document.getElementById('detailsContainer');
const primaryContainer = document.getElementById('detailContainer')

function getDetails(id) {
  const product = products.find(product => product.id === id)
  let price = product.price
  inputsContainer.classList.add("closeHome")
  inputsAltContainer.classList.add("closeHome")
  productsContainer.classList.add("closeHome")
  favoriteContainer.classList.remove("showFav")
  detailsContainer.classList.add("showDetails");

  primaryContainer.innerHTML = 
  `
  <div class="top-text">
      <p><span>${product.brand}</span> ● <span>${product.model}</span> ● Elan №${product.id}</p>
  </div>
  <div class="info-text">
      <div class="left-content"><h2>${product.brand} ${product.model}, ${product.year} il, ${product.odometer} ${product.odometerUnit}</h2></div>
      <div class="right-content">
          <span onclick="addFavorite(${product.id}); getDetails(${product.id});"><i class="fa-${favoriteProducts.includes(product.id) ? 'solid' : 'regular'} fa-heart"></i> ${favoriteProducts.includes(product.id) ? 'Seçilmişdir' : 'Seçilmişlərdə Saxla'}</span>
          <span><i class="fa-regular fa-flag"></i> Şikayət Et</span>
      </div>
  </div>
  <div class="content">
      <div class="image-content">
          <img src="${product.images}" alt="${product.brand} ${product.model} image">
      </div>
      <div class="contact-content">
          <div class="price-content">
              <p>${product.price} ${product.currency}</p>
              <span>
                ${product.currency === "USD" ? `= ${(price * 1.7).toFixed(0)} AZN` : ''}
                ${product.currency === "EUR" ? `= ${(price * 1.85).toFixed(0)} AZN` : ''}
              </span>
          </div>
          <div class="text-content">
              <div class="left">
                  <p>Ruhlan</p>
                  <span>Bakı</span>
              </div>
              <div class="right">
                  <i class="fa-regular fa-user"></i>
              </div>
          </div>
          <div class="telph">
              <button><i class="fa-solid fa-phone"></i> (098) 765 43 21</button>
          </div>
      </div>
  </div>
  <div class="product-details">
      <div class="left">
          <p>Şəhər</p>
          <p>Marka</p>
          <p>Model</p>
          <p>Buraxılış İli</p>
          <p>Ban Növü</p>
          <p>Mühərrik</p>
          <p>Yürüş</p>
          <p>Yeni</p>
      </div>
      <div class="right">
          <p>${product.city}</p>
          <p>${product.brand}</p>
          <p>${product.model}</p>
          <p>${product.year}</p>
          <p>${product.banType}</p>
          <p>${product.engine}</p>
          <p>${product.odometer} ${product.odometerUnit}</p>
          <p>${product.category === "processed" ? "Xeyr" : "Bəli"}</p>
      </div>
  </div>
  `
}

let favoriteProducts = [];
function addFavorite(id) {
  const product = products.find(product => product.id === parseInt(id));
  const iconElement = document.querySelector(`#product-${id} .image-content .icons .heart`);
  
  if (favoriteProducts.includes(product.id)) {
    favoriteProducts = favoriteProducts.filter(favId => favId !== product.id);
    iconElement.classList.replace('fa-solid', 'fa-regular');
  } else {
    favoriteProducts.push(product.id);
    iconElement.classList.replace('fa-regular', 'fa-solid');
  }
  renderFavoriteProducts();
}
function renderFavoriteProducts() {
  const content = document.getElementById('productContent');
  let favoriteContent = '';

  for (const id of favoriteProducts) {
    const product = products.find(product => product.id === id);
    favoriteContent += 
    `
      <div class="card" id="favorite-${product.id}" onclick="getDetails(${product.id})">
        <div class="image-content">
          <div class="icons" id="icons">
            <div class="icon">
              ${product.credit ? '<i class="fa-solid fa-percent percent"></i>' : ''}
              ${product.barter ? '<i class="fa-solid fa-arrows-spin arrow"></i>' : ''}
            </div>
            <i class="fa-solid fa-heart heart" onclick="event.stopPropagation(); addFavorite(${product.id})"></i>
          </div>
          <img src="${product.images}" alt="car img">
        </div>
        <div class="text-content">
          <h3>${product.price} ${product.currency}</h3>
          <p>${product.brand} ${product.model}</p>
          <p>${product.year}, ${product.engine}L, ${product.odometer} ${product.odometerUnit}</p>
          <span>${product.city} , ${product.dates}</span>
        </div>
      </div>
    `
  }
  content.innerHTML = favoriteContent;
}
