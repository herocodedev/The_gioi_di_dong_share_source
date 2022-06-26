import { BaseService } from "./BaseServices";

export class AuthServices extends BaseService {
  constructor() {
    return super();
  }

  loginApi = (data) => {
    // {email:'',password:''}
    return this.post("auth/login", data);
  };

  checkLoginApi = () => {
    return this.get("auth");
  };

  logoutApi = () => {
    return this.post("auth/logout");
  };

  registerApi = (data) => {
    //{"firstName":"","lastName":"","email":"","password":""}
    return this.post("auth/register", data);
  };
}

export const authServices = new AuthServices();
