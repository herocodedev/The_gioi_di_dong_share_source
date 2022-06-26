import axios from "axios";
import { BaseService } from "./BaseServices";

export class GlobalServices extends BaseService {
  constructor() {
    return super();
  }

  uploadFileApi = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "upload_file_tgdd");
    return axios.post(
      "YOUR_API_IN_CLOUDINARY", // https://api.cloudinary.com/v1_1/CLOUNAME/.../...
      formData
    );
  };

  removeImgApi = (public_id) => {
    return this.post("destroyFile", {
      public_id,
    });
  };
}

export const globalService = new GlobalServices();
