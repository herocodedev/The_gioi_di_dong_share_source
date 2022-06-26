import {
  filterCameraSmartphone,
  filterPerformanceSmartphone,
  filterPerformanceTablet,
  filterPriceAccessory,
  filterPriceLaptop,
  filterPricePC,
  filterPriceSmartphone,
  filterPriceSwatch,
  filterPriceTablet,
  filterRamLaptop,
  filterRamPC,
  filterRamSmartphone,
  filterRamTablet,
  filterScreenLaptop,
  filterScreenPC,
  filterStorageLaptop,
  filterStoragePC,
  filterStorageSmartphone,
  filterStorageTablet,
  filterTypeAccessory,
  filterTypeLaptop,
  filterTypeSmartphone,
  filterTypeTablet,
} from "../../pages/DetailPage/global/dataFilter";

export const getMin = (a, b) => {
  if (a > b) return b;
  return a;
};
export const getMax = (a, b) => {
  if (a > b) return a;
  return b;
};

export const getQueryParams = (filters, queryString) => {
  let urlArr = [];
  // Handle field  !== price
  filters.forEach((item, index) => {
    let obj;
    if (item.field !== "price") {
      obj = {
        [item.field]: item.value,
      };
      urlArr.push(queryString.stringify(obj));
    }
  });

  // Handle field price
  let priceQuery = "";
  filters.forEach((item, index) => {
    if (item.field === "price") {
      let key1 = `${item.field}[gt]`;
      let key2 = `${item.field}[lte]`;
      // Field price
      let stringParams =
        key1 + "=" + item.value.gt + "&" + key2 + "=" + item.value.lte;

      priceQuery = stringParams;
    }
  });
  if (priceQuery) urlArr.push(priceQuery);
  return urlArr.join("&");
};

const handleGetData = (data, field, values) => {
  if (field === "brand") {
    for (let i = 0; i < data.length; i++) {
      if (data[i].value === values.value) return data[i];
    }
  } else if (field === "price") {
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].value.gt === Number(values.gt) &&
        data[i].value.lte === Number(values.lte)
      )
        return data[i];
    }
  } else {
    for (let i = 0; i < data.length; i++) {
      // Convert number to string
      if (typeof data[i].value === "number")
        data[i].value = data[i].value.toString();
      if (data[i].value === values.value) return data[i];
    }
  }
};

const getDataParams = (category, filterBrand, field, values) => {
  // SMARTPHONE
  if (category === "smartphone") {
    if (field === "brand") {
      return handleGetData(filterBrand, "brand", values);
    } else if (field === "price") {
      return handleGetData(filterPriceSmartphone.filters, "price", values);
    } else if (field === "type") {
      return handleGetData(filterTypeSmartphone.filters, "type", values);
    } else if (field === "performance") {
      return handleGetData(
        filterPerformanceSmartphone.filters,
        "performance",
        values
      );
    } else if (field === "storage") {
      return handleGetData(filterStorageSmartphone.filters, "storage", values);
    } else if (field === "ram") {
      return handleGetData(filterRamSmartphone.filters, "ram", values);
    } else if (field === "camera") {
      return handleGetData(filterCameraSmartphone.filters, "camera", values);
    }
  }
  // TABLET
  else if (category === "tablet") {
    if (field === "brand") {
      return handleGetData(filterBrand, "brand", values);
    } else if (field === "price") {
      return handleGetData(filterPriceTablet.filters, "price", values);
    } else if (field === "type") {
      return handleGetData(filterTypeTablet.filters, "type", values);
    } else if (field === "performance") {
      return handleGetData(
        filterPerformanceTablet.filters,
        "performance",
        values
      );
    } else if (field === "storage") {
      return handleGetData(filterStorageTablet.filters, "storage", values);
    } else if (field === "ram") {
      return handleGetData(filterRamTablet.filters, "ram", values);
    }
  }
  // PC
  else if (category === "pc") {
    if (field === "brand") {
      return handleGetData(filterBrand, "brand", values);
    } else if (field === "price") {
      return handleGetData(filterPricePC.filters, "price", values);
    } else if (field === "screen") {
      return handleGetData(filterScreenPC.filters, "screen", values);
    } else if (field === "storage") {
      return handleGetData(filterStoragePC.filters, "storage", values);
    } else if (field === "ram") {
      return handleGetData(filterRamPC.filters, "ram", values);
    }
  }

  // LAPTOP
  else if (category === "laptop") {
    if (field === "brand") {
      return handleGetData(filterBrand, "brand", values);
    } else if (field === "price") {
      return handleGetData(filterPriceLaptop.filters, "price", values);
    } else if (field === "type") {
      return handleGetData(filterTypeLaptop.filters, "type", values);
    } else if (field === "screen") {
      return handleGetData(filterScreenLaptop.filters, "screen", values);
    } else if (field === "storage") {
      return handleGetData(filterStorageLaptop.filters, "storage", values);
    } else if (field === "ram") {
      return handleGetData(filterRamLaptop.filters, "ram", values);
    }
  }

  // ACCESSORY
  else if (category === "accessory") {
    if (field === "price") {
      return handleGetData(filterPriceAccessory.filters, "price", values);
    } else if (field === "type") {
      return handleGetData(filterTypeAccessory.filters, "type", values);
    }
  }

  // SWATCH
  else if (category === "swatch") {
    if (field === "brand") {
      return handleGetData(filterBrand, "brand", values);
    } else if (field === "price") {
      return handleGetData(filterPriceSwatch.filters, "price", values);
    }
  }
};

const getArrValid = (arr) => {
  let validArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]?.idFilter) {
      validArr.push(arr[i]);
    }
  }
  return validArr;
};

export const parseQueryParam = (category, queryParam, filterBrand) => {
  let minPrice = 999999999999;
  let maxPrice = -999999999999;
  let urlArr = [];
  // Handle Field !== price
  for (let key in queryParam) {
    let obj;
    if (!key.includes("price")) {
      if (typeof queryParam[key] === "string") {
        obj = {
          field: key,
          value: queryParam[key],
        };
        urlArr.push(obj);
      } else {
        for (let i = 0; i < queryParam[key]?.length; i++) {
          obj = {
            field: key,
            value: queryParam[key][i],
          };
          urlArr.push(obj);
        }
      }
    }
  }

  // Handle field price
  let isCheckedFieldPrice = false;
  for (let key in queryParam) {
    if (key.includes("price")) {
      isCheckedFieldPrice = true;
      if (key.includes("gt")) {
        minPrice = queryParam[key];
      } else {
        maxPrice = queryParam[key];
      }
    }
  }

  if (isCheckedFieldPrice)
    urlArr.push({
      field: "price",
      gt: minPrice,
      lte: maxPrice,
    });
  // console.log("urlArr (1): ", urlArr);

  urlArr = urlArr.map((item, index) =>
    getDataParams(category, filterBrand, item.field, item)
  );

  return getArrValid(urlArr);
};

export const checkIdExist = (arr, value) => {
  let isChecked = false;

  arr?.forEach((x, y) => {
    if (x) {
      if (x.idFilter === value) isChecked = true;
    }
  });

  return isChecked;
};

export const getDataByType = (arr, type) => {
  return arr.filter((item, index) => item.type === type);
};

export const formatDate = (dataStr) => {
  const date = new Date(dataStr); // dateStr you get from mongodb

  const d = date.getDate();
  const m = date.getMonth() + 1;
  const y = date.getFullYear();

  return {
    d,
    m,
    y,
  };
};

export const getDate = (dataStr, number) => {
  const day = new Date(dataStr); // dateStr you get from mongodb
  const nextDay = new Date(day);
  nextDay.setDate(day.getDate() + number);

  const d = nextDay.getDate();
  const m = nextDay.getMonth() + 1;
  const y = nextDay.getFullYear();

  return {
    d,
    m,
    y,
  };
};

export const compareDate = (dataStr, number) => {
  const day = new Date(dataStr); // dateStr you get from mongodb
  const nextDay = new Date(day);
  nextDay.setDate(day.getDate() + number);

  const today = new Date();
  return nextDay.getTime() < today.getTime();
};
