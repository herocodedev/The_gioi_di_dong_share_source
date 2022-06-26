// SMARTPHONE
export const filterPriceSmartphone = {
  name: "Giá",
  field: "price",
  filters: [
    {
      field: "price",
      name: "Dưới 2 triệu",
      idFilter: "price-smartphone-1",
      value: {
        gt: 0,
        lte: 2000000,
      },
    },
    {
      field: "price",
      name: "Từ 2 - 4 triệu",
      idFilter: "price-smartphone-2",
      value: {
        gt: 2000000,
        lte: 4000000,
      },
    },
    {
      field: "price",
      name: "Từ 4 - 7 triệu",
      idFilter: "price-smartphone-3",
      value: {
        gt: 4000000,
        lte: 7000000,
      },
    },
    {
      field: "price",
      name: "Từ 7 - 13 triệu",
      idFilter: "price-smartphone-4",
      value: {
        gt: 7000000,
        lte: 13000000,
      },
    },
    {
      field: "price",
      name: "Từ 13 - 20 triệu",
      idFilter: "price-smartphone-5",
      value: {
        gt: 13000000,
        lte: 20000000,
      },
    },
    {
      field: "price",
      name: "Từ 20 - 60 triệu",
      idFilter: "price-smartphone-6",
      value: {
        gt: 20000000,
        lte: 60000000,
      },
    },
  ],
};

export const filterTypeSmartphone = {
  field: "type",
  name: "Loại điện thoại",
  filters: [
    {
      field: "type",
      name: "Android",
      value: "android",
      idFilter: "type-smartphone-1",
    },
    {
      field: "type",
      name: "Iphone (iOS)",
      value: "iphone",
      idFilter: "type-smartphone-2",
    },
    {
      field: "type",
      name: "Điện thoại phổ thông",
      value: "normal",
      idFilter: "type-smartphone-3",
    },
  ],
};

export const filterPerformanceSmartphone = {
  field: "performance",
  name: "Hiệu năng & pin",
  filters: [
    {
      field: "performance",
      name: "Chơi game / Cấu hình cao",
      value: "playGame",
      idFilter: "performance-smartphone-1",
    },
    {
      field: "performance",
      name: "Pin Khủng",
      value: "hotPin",
      idFilter: "performance-smartphone-2",
    },
    {
      field: "performance",
      name: "Sạc pin nhanh",
      value: "speedPin",
      idFilter: "performance-smartphone-3",
    },
  ],
};

export const filterStorageSmartphone = {
  name: "Bộ nhớ trong",
  field: "storage",
  filters: [
    {
      field: "storage",
      name: "8 GB",
      value: 8,
      idFilter: "storage-smartphone-1",
    },
    {
      field: "storage",
      name: "16 GB",
      value: 16,
      idFilter: "storage-smartphone-2",
    },
    {
      field: "storage",
      name: "32 GB",
      value: 32,
      idFilter: "storage-smartphone-3",
    },
    {
      field: "storage",
      name: "64 GB",
      value: 64,
      idFilter: "storage-smartphone-4",
    },
    {
      field: "storage",
      name: "128 GB",
      value: 128,
      idFilter: "storage-smartphone-5",
    },
    {
      field: "storage",
      name: "256 GB",
      value: 256,
      idFilter: "storage-smartphone-6",
    },
  ],
};

export const filterRamSmartphone = {
  name: "Ram",
  field: "ram",
  filters: [
    { field: "ram", name: "2 GB", value: 2, idFilter: "ram-smartphone-1" },
    { field: "ram", name: "3 GB", value: 3, idFilter: "ram-smartphone-2" },
    { field: "ram", name: "4 GB", value: 4, idFilter: "ram-smartphone-3" },
    { field: "ram", name: "6 GB", value: 6, idFilter: "ram-smartphone-4" },
    { field: "ram", name: "8 GB", value: 8, idFilter: "ram-smartphone-5" },
    { field: "ram", name: "12 GB", value: 12, idFilter: "ram-smartphone-6" },
  ],
};

export const filterCameraSmartphone = {
  name: "Camera",
  field: "camera",
  filters: [
    {
      field: "camera",
      name: "Chụp cận cảnh",
      value: "cameraCloseUpShot",
      idFilter: "camera-smartphone-1",
    },
    {
      field: "camera",
      name: "Chụp xóa phong",
      value: "cameraRemoveFonts",
      idFilter: "camera-smartphone-2",
    },
    {
      field: "camera",
      name: "Chụp zoom",
      value: "cameraZoom",
      idFilter: "camera-smartphone-3",
    },
    {
      field: "camera",
      name: "Chụp góc rộng",
      value: "cameraWideShot",
      idFilter: "camera-smartphone-4",
    },
  ],
};

// TABLET
export const filterPriceTablet = {
  name: "Giá",
  field: "price",
  filters: [
    {
      field: "price",
      name: "Dưới 2 triệu",
      idFilter: "price-tablet-1",
      value: {
        gt: 0,
        lte: 2000000,
      },
    },
    {
      field: "price",
      name: "Từ 2 - 4 triệu",
      idFilter: "price-tablet-2",
      value: {
        gt: 2000000,
        lte: 4000000,
      },
    },
    {
      field: "price",
      name: "Từ 4 - 7 triệu",
      idFilter: "price-tablet-3",
      value: {
        gt: 4000000,
        lte: 7000000,
      },
    },
    {
      field: "price",
      name: "Từ 7 - 13 triệu",
      idFilter: "price-tablet-4",
      value: {
        gt: 7000000,
        lte: 13000000,
      },
    },
    {
      field: "price",
      name: "Từ 13 - 20 triệu",
      idFilter: "price-tablet-5",
      value: {
        gt: 13000000,
        lte: 20000000,
      },
    },
    {
      field: "price",
      name: "Từ 20 - 60 triệu",
      idFilter: "price-tablet-6",
      value: {
        gt: 20000000,
        lte: 60000000,
      },
    },
  ],
};

export const filterTypeTablet = {
  name: "Loại tablet",
  field: "type",
  filters: [
    {
      field: "type",
      name: "Ipad",
      value: "ipad",
      idFilter: "type-tablet-1",
    },
    {
      field: "type",
      name: "Android",
      value: "android",
      idFilter: "type-tablet-2",
    },
  ],
};

export const filterPerformanceTablet = {
  field: "performance",
  name: "Hiệu năng & pin",
  filters: [
    {
      field: "performance",
      name: "Chơi game / Cấu hình cao",
      value: "playGame",
      idFilter: "performance-tablet-1",
    },
    {
      field: "performance",
      name: "Pin Khủng",
      value: "hotPin",
      idFilter: "performance-tablet-2",
    },
    {
      field: "performance",
      name: "Sạc pin nhanh",
      value: "speedPin",
      idFilter: "performance-tablet-3",
    },
  ],
};

export const filterStorageTablet = {
  name: "Bộ nhớ trong",
  field: "storage",
  filters: [
    {
      field: "storage",
      name: "8 GB",
      value: 8,
      idFilter: "storage-tablet-1",
    },
    {
      field: "storage",
      name: "16 GB",
      value: 16,
      idFilter: "storage-tablet-2",
    },
    {
      field: "storage",
      name: "32 GB",
      value: 32,
      idFilter: "storage-tablet-3",
    },
    {
      field: "storage",
      name: "64 GB",
      value: 64,
      idFilter: "storage-tablet-4",
    },
    {
      field: "storage",
      name: "128 GB",
      value: 128,
      idFilter: "storage-tablet-5",
    },
    {
      field: "storage",
      name: "256 GB",
      value: 256,
      idFilter: "storage-tablet-6",
    },
    {
      field: "storage",
      name: "512 GB",
      value: 512,
      idFilter: "storage-tablet-7",
    },
    {
      field: "storage",
      name: "1024 GB",
      value: 1024,
      idFilter: "storage-tablet-8",
    },
    {
      field: "storage",
      name: "2048 GB",
      value: 2018,
      idFilter: "storage-tablet-9",
    },
  ],
};

export const filterRamTablet = {
  name: "Ram",
  field: "ram",
  filters: [
    { field: "ram", name: "2 GB", value: 2, idFilter: "ram-tablet-1" },
    { field: "ram", name: "3 GB", value: 3, idFilter: "ram-tablet-2" },
    { field: "ram", name: "4 GB", value: 4, idFilter: "ram-tablet-3" },
    { field: "ram", name: "6 GB", value: 6, idFilter: "ram-tablet-4" },
    { field: "ram", name: "8 GB", value: 8, idFilter: "ram-tablet-5" },
    { field: "ram", name: "12 GB", value: 12, idFilter: "ram-tablet-6" },
  ],
};

// PC
export const filterPricePC = {
  name: "Giá",
  field: "price",
  filters: [
    {
      field: "price",
      name: "Từ 13 - 20 triệu",
      idFilter: "price-pc-1",
      value: {
        gt: 13000000,
        lte: 20000000,
      },
    },
    {
      field: "price",
      name: "Từ 20 - 25 triệu",
      idFilter: "price-pc-2",
      value: {
        gt: 20000000,
        lte: 25000000,
      },
    },
    {
      field: "price",
      name: "Từ 25 - 70 triệu",
      idFilter: "price-pc-3",
      value: {
        gt: 25000000,
        lte: 70000000,
      },
    },
  ],
};

export const filterScreenPC = {
  name: "Màn hình",
  field: "screen",
  filters: [
    {
      field: "screen",
      name: "18.6 inch",
      idFilter: "screen-pc-1",
      value: 18.6,
    },
    {
      field: "screen",
      name: "21.5 inch",
      idFilter: "screen-pc-2",
      value: 21.5,
    },
    {
      field: "screen",
      name: "22.5 inch",
      idFilter: "screen-pc-3",
      value: 22.5,
    },
  ],
};

export const filterRamPC = {
  name: "Ram",
  field: "ram",
  filters: [
    { field: "ram", name: "8 GB", value: 8, idFilter: "ram-pc-1" },
    { field: "ram", name: "16 GB", value: 16, idFilter: "ram-pc-2" },
    { field: "ram", name: "32 GB", value: 32, idFilter: "ram-pc-3" },
  ],
};

export const filterStoragePC = {
  name: "Bộ nhớ trong",
  field: "storage",
  filters: [
    {
      field: "storage",
      name: "256 GB",
      value: 256,
      idFilter: "storage-pc-1",
    },
    {
      field: "storage",
      name: "512 GB",
      value: 512,
      idFilter: "storage-pc-2",
    },
    {
      field: "storage",
      name: "1024 GB",
      value: 1024,
      idFilter: "storage-pc-3",
    },
  ],
};

// LAPTOP
export const filterPriceLaptop = {
  name: "Giá",
  field: "price",
  filters: [
    {
      field: "price",
      name: "Từ 13 - 20 triệu",
      idFilter: "price-laptop-1",
      value: {
        gt: 13000000,
        lte: 20000000,
      },
    },
    {
      field: "price",
      name: "Từ 20 - 25 triệu",
      idFilter: "price-laptop-2",
      value: {
        gt: 20000000,
        lte: 25000000,
      },
    },
    {
      field: "price",
      name: "Từ 25 - 70 triệu",
      idFilter: "price-laptop-3",
      value: {
        gt: 25000000,
        lte: 70000000,
      },
    },
  ],
};

export const filterTypeLaptop = {
  name: "Loại laptop",
  field: "type",
  filters: [
    {
      field: "type",
      name: "Deal sốc",
      value: "hotDeal",
      idFilter: "type-laptop-1",
    },
    {
      field: "type",
      name: "Gamming",
      value: "gamming",
      idFilter: "type-laptop-2",
    },
    {
      field: "type",
      name: "Macbook",
      value: "macbook",
      idFilter: "type-laptop-3",
    },
    {
      field: "type",
      name: "Văn phòng",
      value: "office",
      idFilter: "type-laptop-4",
    },
    {
      field: "type",
      name: "Code",
      value: "code",
      idFilter: "type-laptop-5",
    },
    {
      field: "type",
      name: "Mỏng nhẹ",
      value: "thin",
      idFilter: "type-laptop-6",
    },
    {
      field: "type",
      name: "Sang trọng",
      value: "luxurious",
      idFilter: "type-laptop-7",
    },
  ],
};

export const filterScreenLaptop = {
  name: "Màn hình",
  field: "screen",
  filters: [
    {
      field: "screen",
      name: "14 inch",
      idFilter: "screen-laptop-1",
      value: 14,
    },
    {
      field: "screen",
      name: "15 inch",
      idFilter: "screen-laptop-2",
      value: 15,
    },
    {
      field: "screen",
      name: "15.6 inch",
      idFilter: "screen-laptop-3",
      value: 15.6,
    },
    {
      field: "screen",
      name: "18.6 inch",
      idFilter: "screen-laptop-4",
      value: 18.6,
    },
  ],
};

export const filterRamLaptop = {
  name: "Ram",
  field: "ram",
  filters: [
    { field: "ram", name: "8 GB", value: 8, idFilter: "ram-laptop-1" },
    { field: "ram", name: "16 GB", value: 16, idFilter: "ram-laptop-2" },
    { field: "ram", name: "32 GB", value: 32, idFilter: "ram-laptop-3" },
  ],
};

export const filterStorageLaptop = {
  name: "Bộ nhớ trong",
  field: "storage",
  filters: [
    {
      field: "storage",
      name: "256 GB",
      value: 256,
      idFilter: "storage-laptop-1",
    },
    {
      field: "storage",
      name: "512 GB",
      value: 512,
      idFilter: "storage-laptop-2",
    },
    {
      field: "storage",
      name: "1024 GB",
      value: 1024,
      idFilter: "storage-laptop-3",
    },
  ],
};

// ACCESSORY
export const filterPriceAccessory = {
  name: "Giá",
  field: "price",
  filters: [
    {
      field: "price",
      name: "Dưới 1 triệu",
      idFilter: "price-accessory-1",
      value: {
        gt: 0,
        lte: 1000000,
      },
    },
    {
      field: "price",
      name: "Từ 1 - 5 triệu",
      idFilter: "price-accessory-2",
      value: {
        gt: 1000000,
        lte: 5000000,
      },
    },
    {
      field: "price",
      name: "Từ 5 - 20 triệu",
      idFilter: "price-accessory-3",
      value: {
        gt: 5000000,
        lte: 20000000,
      },
    },
  ],
};

export const filterTypeAccessory = {
  name: "Loại phụ kiện",
  field: "type",
  filters: [
    {
      field: "type",
      name: "Sạc dự phòng",
      value: "backupCharger",
      idFilter: "type-accessory-1",
    },
    {
      field: "type",
      name: "Cáp sạc",
      value: "chargingCable",
      idFilter: "type-accessory-2",
    },
    {
      field: "type",
      name: "Phụ kiện apple",
      value: "appleAccessory",
      idFilter: "type-accessory-3",
    },
    {
      field: "type",
      name: "Chuột",
      value: "mouse",
      idFilter: "type-accessory-4",
    },
    {
      field: "type",
      name: "Bàn phím",
      value: "keyboard",
      idFilter: "type-accessory-5",
    },
  ],
};

// ACCESSORY
export const filterPriceSwatch = {
  name: "Giá",
  field: "price",
  filters: [
    {
      field: "price",
      name: "Dưới 1 triệu",
      idFilter: "price-swatch-1",
      value: {
        gt: 0,
        lte: 1000000,
      },
    },
    {
      field: "price",
      name: "Từ 1 - 5 triệu",
      idFilter: "price-swatch-2",
      value: {
        gt: 1000000,
        lte: 5000000,
      },
    },
    {
      field: "price",
      name: "Từ 5 - 10 triệu",
      idFilter: "price-swatch-3",
      value: {
        gt: 5000000,
        lte: 10000000,
      },
    },
    {
      field: "price",
      name: "Từ 10 - 30 triệu",
      idFilter: "price-swatch-4",
      value: {
        gt: 10000000,
        lte: 30000000,
      },
    },
  ],
};
