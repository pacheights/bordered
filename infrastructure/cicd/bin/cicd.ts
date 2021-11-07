#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import * as WebCicdStack from '../lib/web-cicd/web-cicd';

const app = new cdk.App();
WebCicdStack.init(app);
