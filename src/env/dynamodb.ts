import { Example } from "models/example";
import { ExamplePatch } from "models/example-patch";
import { Storage } from "env/storage";
import { DynamoDbWrapper } from "wrapper/dynamodb";

export class ExamplesDynamoDb implements Storage<Example, ExamplePatch> {

    constructor(private client: DynamoDbWrapper) {}
    
    insert(t: Example): Promise<Example> {
        throw new Error("Method not implemented.");
    }
    fetch(id: string, indexedProperty: string): Promise<Example> {
        throw new Error("Method not implemented.");
    }
    fetchMany(limit: number, cursor: string): Promise<Example[]> {
        throw new Error("Method not implemented.");
    }
    patch(p: ExamplePatch): Promise<Example> {
        throw new Error("Method not implemented.");
    }
}