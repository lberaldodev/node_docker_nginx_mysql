type TPeople = {
  id: number;
  name: string;
};

class PeopleModel {
  readonly id: number;
  readonly name: string;

  constructor({ id, name }: TPeople) {
    this.id = id;
    this.name = name;
  }
}

export { PeopleModel, TPeople };
