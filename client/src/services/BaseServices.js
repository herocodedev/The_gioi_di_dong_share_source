import axios from "axios";
import { DOMAIN, TOKEN } from "../utils/Settings/global";

export class BaseService {
  get = (url) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "GET",
      headers: {
        Authorization: localStorage.getItem(TOKEN)
          ? "Bearer " + localStorage.getItem(TOKEN)
          : null,
      },
    });
  };

  post = (url, model) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      data: model,
      method: "POST",
      headers: {
        Authorization: localStorage.getItem(TOKEN)
          ? "Bearer " + localStorage.getItem(TOKEN)
          : null,
      },
    });
  };

  put = (url, model) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      data: model,
      method: "PUT",
      headers: {
        Authorization: localStorage.getItem(TOKEN)
          ? "Bearer " + localStorage.getItem(TOKEN)
          : null,
      },
    });
  };

  delete = (url) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem(TOKEN)
          ? "Bearer " + localStorage.getItem(TOKEN)
          : null,
      },
    });
  };
}
