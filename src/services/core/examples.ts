import { Example } from 'models/example';
import { ExamplePatch } from 'models/example-patch';
import { Env } from 'services/env'

export interface ReadManyParams {
    id: string;
    index?: string;
}

export interface DeleteParams {
    id: string;
}

export class ExamplesSvc {

    constructor(private _: Env) {}

    public create(_example: Example): Promise<void> {
        throw new Error('Not implemented');
    }

    public readMany(_params: ReadManyParams): Promise<Example[]> {
        throw new Error('Not implemented');
    }

    public update(_examplePatch: ExamplePatch): Promise<void> {
        throw new Error('Not implemented');
    }

    public delete(_params: DeleteParams): Promise<void> {
        throw new Error('Not implemented');
    }

}