import * as uuid from "uuid";
import { Table } from "sst/node/table";
import handler from "@notes/core/handler";
import dynamoDb from "@notes/core/dynamodb";


export const main = handler(async (event) => {
    const data = JSON.parse(event.body);
    const params = {
        TableName: Table.Notes.tableName,
        Item: {
            // id that’s assigned to our user by our Cognito Identity Pool.
            userId: event.requestContext.authorizer.iam.cognitoIdentity.identityId,
            noteId: uuid.v1(), // A unique uuid
            content: data.content, // Parsed from request body
            attachment: data.attachment, // Parsed from request body
            createdAt: Date.now(), // Current Unix timestamp
        },
    };

    await dynamoDb.put(params);

    return params.Item;
});