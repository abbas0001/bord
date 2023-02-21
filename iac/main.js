import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export class LambdaNodeCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_lambda-readme.html
    // Lambda function
    const postFunction = new lambda.Function(this, 'MyLambdaFunction', {
      code: lambda.Code.fromAsset('./src'),
      functionName: "lambdaNode",
      handler: 'index.handler',
      memorySize: 128,
      runtime: lambda.Runtime.NODEJS_18_X,
      timeout: cdk.Duration.seconds(5),
    });

    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_apigateway-readme.html
    // API Gateway
    const api = new apiGW.HttpApi(this, 'MyApiGateway');

    api.addRoutes({
      path: '/tasks',
      methods: [apiGW.HttpMethod.POST],
      integration: new apiGW.LambdaProxyIntegration({handler: postFunction})
    });

        // example of second route to a second function
//     api.addRoutes({
//       path: '/tasks',
//       methods: [apiGW.HttpMethod.GET],
//       integration: new apiGW.LambdaProxyIntegration({handler: getFunction})
//     });
    
    // dynamodb to be defined
    
    
    // print outputs
    const nothing = new cdk.CfnOutput(this, 'ApiUrl', {value: api.url!});

    
  }
}
