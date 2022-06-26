import { BaseService } from "./BaseServices";

export class PageServices extends BaseService {
  constructor() {
    return super();
  }

  getDataPageApi = (type) => {
    return this.get(`${type}`);
  };
  addDataPageApi = (type, data) => {
    return this.post(`${type}`, data);
  };

  editDataPageApi = (type, data) => {
    return this.put(`${type}/${data._id}`, data);
  };

  getDataHomePageApi = () => {
    return this.get("homepage");
  };

  addDataHomePageApi = (data) => {
    return this.post("homepage", data);
  };

  editDataHomePageApi = (data) => {
    return this.put(`homepage/${data._id}`, data);
  };

  getDataSmartphonePageApi = () => {
    return this.get("smartphonepage");
  };

  addSmartphonePageApi = (data) => {
    return this.post("smartphonepage", data);
  };

  editSmartphonePageApi = (data) => {
    return this.put(`smartphonepage/${data._id}`, data);
  };
}

export const pageServices = new PageServices();
