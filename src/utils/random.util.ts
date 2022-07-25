export class RandomUtil {

  static randomFromCollection(collection: any[]): any {
    return collection[Math.floor(Math.random() * collection.length)];
  }
}