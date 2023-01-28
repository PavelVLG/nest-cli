export class SourceModel {
  public parent: string | undefined;
  public prev: SourceModel | undefined;
  public next: SourceModel | undefined;
  public link: string;
  public calculatedRating: number;
  public createdAt: Date;
  public description: string;
  public tags: string[];
  public categories: string[];
  public sources: unknown;
}
