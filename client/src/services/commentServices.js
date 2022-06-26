import { BaseService } from "./BaseServices";

export class CommentServices extends BaseService {
  constructor() {
    return super();
  }

  getCommentApi = (data) => {
    return this.get(
      `comment?idProduct=${data.idProduct}&page=${data.page || 1}`
    );
  };

  postCommentApi = (data) => {
    return this.post("comment", data);
  };

  editCommentApi = (data) => {
    return this.put(`comment/${data.idComment}`, data);
  };

  deleteCommentApi = (data) => {
    return this.delete(`comment/${data.idComment}`);
  };
}

export const commentServices = new CommentServices();
