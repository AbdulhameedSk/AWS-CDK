import * as cdk from "aws-cdk-lib";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new dynamodb.Table(this, "Table", {
      partitionKey: {
        name: "userId",
        type: dynamodb.AttributeType.STRING,
      },
      sortKey: {
        name: "noteId",
        type: dynamodb.AttributeType.STRING,
      },
    });
  }
}
