export class UserClass {
  id: string;
  name: string;
  room: string;

  constructor(name: string, room?: string, id?: string) {
    this.name = name;
    this.name = room;
    this.id = id;
  }
}
