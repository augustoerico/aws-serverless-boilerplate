/**
 * T is the template object and P is it's patch version
 */
export interface Storage<T, P> {
    insert(t: T): Promise<T>
    fetch(id: string, indexedProperty: string): Promise<T>;
    fetchMany(limit: number, cursor: string): Promise<T[]>;
    patch(p: P): Promise<T>;
}