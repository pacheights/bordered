import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';
const ddb = new DynamoDB.DocumentClient({ region: 'us-west-2' });

const sharedResponse = {
  headers: {},
  isBase64Encoded: false,
};

interface Transaction {
  email: string;
}

exports.handler = async (event: APIGatewayProxyEvent, context: Context) => {
  const { awsRequestId: requestId } = context;
  try {
    const { body: bodyStr } = event;
    const body = JSON.parse(bodyStr as string);
    const { email } = body;
    await createTransaction(requestId, { email });
    const response = {
      ...sharedResponse,
      statusCode: 200,
      body: 'Success',
    };
    return response;
  } catch (error) {
    console.log('ERROR', error);
    return {
      ...sharedResponse,
      statusCode: 500,
      body: JSON.stringify({ error }),
    };
  }
};

const createTransaction = (requestId: string, { email }: Transaction) => {
  const created = new Date().toISOString();
  const params = {
    TableName: 'Transactions',
    Item: {
      email,
      created,
    },
  };

  return ddb.put(params).promise();
};
