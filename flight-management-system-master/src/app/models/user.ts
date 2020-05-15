import {Role} from "./role.enum";

export class User {
  userId: number
  fullName: string;
  userName: string;
  email: string;
  token: string;
  type: string;
  userPhone: string;
  roles: Role[];
  userPassword: string;

  constructor(user) {
    if (user.hasOwnProperty('userId'))
      this.userId = user.userId
    this.fullName = user.fullName;
    this.userName = user.userName;
    this.email = user.email;
    if (user.hasOwnProperty('passwordGroup')) {
      this.userPassword = user.passwordGroup.password;
    }
    this.userPhone = user.userPhone;
    if (user.hasOwnProperty('token')) {
      this.token = user.token;
    }
    if (user.hasOwnProperty('roles')) {
      this.roles = user.roles;
    }
  }
}
