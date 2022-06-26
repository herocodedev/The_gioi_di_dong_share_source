import { BaseService } from "../BaseServices";

export class ManagerUser extends BaseService {
  constructor() {
    return super();
  }
  getAllUserApi = () => {
    return this.get("user");
  };

  deleteUserApi = (id) => {
    return this.delete(`user/${id}`);
  };
}

export const managerUser = new ManagerUser();
