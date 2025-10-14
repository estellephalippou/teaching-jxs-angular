export class Pokemon {
  constructor(
    public id: string,
    public name: string,
    public imageUrl: string = '',
    public types: string[] = [],
    public abilities: string[] = [],
    public stats: { name: string; value: number }[] = [],

    public baseExperience?: number
  ) {}
}
