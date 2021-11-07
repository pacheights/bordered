import * as cdk from '@aws-cdk/core';
// import * as sqs from '@aws-cdk/aws-sqs';

export class WebBuildStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // example resource
    // const queue = new sqs.Queue(this, 'CicdQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}

export class WebDeployStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // example resource
    // const queue = new sqs.Queue(this, 'CicdQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}

export const init = (app: cdk.App) => {
  new WebBuildStack(app, 'WebBuildStack', {
    // env: { account: '123456789012', region: 'us-east-1' },
  });

  new WebDeployStack(app, 'WebDeployStack', {
    // env: { account: '123456789012', region: 'us-east-1' },
  });
};
