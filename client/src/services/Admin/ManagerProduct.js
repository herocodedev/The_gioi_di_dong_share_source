import { BaseService } from "../BaseServices";
export class ManagerProduct extends BaseService {
  constructor() {
    return super();
  }
  getQuantityApi = () => {
    return this.get("quantity");
  };

  getAllSmartphoneApi = (param) => {
    const page = param || 1;
    return this.get(`smartphone?page=${page}`);
  };
  getAllTabletApi = (param) => {
    const page = param || 1;
    return this.get(`tablet?page=${page}`);
  };
  getAllLaptopApi = (param) => {
    const page = param || 1;
    return this.get(`laptop?page=${page}`);
  };

  getAllAccessoryApi = (param) => {
    const page = param || 1;
    return this.get(`accessory?page=${page}`);
  };
  getAllSwatchApi = (param) => {
    const page = param || 1;
    return this.get(`swatch?page=${page}`);
  };
  getAllPCApi = (param) => {
    const page = param || 1;
    return this.get(`pc?page=${page}`);
  };

  addSmartPhoneApi = (data) => {
    return this.post("smartphone", data);
  };

  addLaptopApi = (data) => {
    return this.post("laptop", data);
  };

  addTabletApi = (data) => {
    return this.post("tablet", data);
  };

  addAccessoryApi = (data) => {
    return this.post("accessory", data);
  };

  addSwatchApi = (data) => {
    return this.post("swatch", data);
  };

  addPCApi = (data) => {
    return this.post("pc", data);
  };

  editSmartPhoneApi = (data) => {
    return this.put(`smartphone/${data._id}`, data);
  };

  editLaptopApi = (data) => {
    return this.put(`laptop/${data._id}`, data);
  };

  editTabletApi = (data) => {
    return this.put(`tablet/${data._id}`, data);
  };

  editAccessoryApi = (data) => {
    return this.put(`accessory/${data._id}`, data);
  };

  editSwatchApi = (data) => {
    return this.put(`pc/${data._id}`, data);
  };

  editPCApi = (data) => {
    return this.put(`pc/${data._id}`, data);
  };

  deleteSmartPhoneApi = (id) => {
    return this.delete(`smartphone/${id}`);
  };

  deleteLaptopApi = (id) => {
    return this.delete(`laptop/${id}`);
  };

  deleteTabletApi = (id) => {
    return this.delete(`tablet/${id}`);
  };

  deleteAccessorytApi = (id) => {
    return this.delete(`accessory/${id}`);
  };

  deleteSwatchApi = (id) => {
    return this.delete(`swatch/${id}`);
  };

  deletePCApi = (id) => {
    return this.delete(`pc/${id}`);
  };
}

export const managerProduct = new ManagerProduct();
