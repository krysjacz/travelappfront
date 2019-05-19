export class Visit {
  public id: number;
  public date: Date;
  public visited: boolean;
  public visible: boolean;
  public userId: number;
  public placeId: number;

  constructor(id: number, date: string, visited: boolean, visible: boolean, userId: number, placeId: number) {
    this.id = id;
    this.date = new Date(date);
    this.visited = visited;
    this.visible = visible;
    this.userId = userId;
    this.placeId = placeId;
  }

}
