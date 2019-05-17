export class User {
  public id: number;
  public username: string;
  public password: string;
  public active: boolean;
  public userRoleId: number;

  constructor(id: number, username: string, password: string, active: boolean, userRoleId: number) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.active = active;
    this.userRoleId = userRoleId;
  }
}
