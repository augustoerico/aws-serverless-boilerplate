/* istanbul ignore file */
import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { config } from 'aws-sdk';
import { Config } from 'config'

export class DynamoDbWrapper extends DocumentClient {
    constructor(configOpt: Config) {
        const { region } = configOpt;
        config.update({ region })
        super();
    }
}