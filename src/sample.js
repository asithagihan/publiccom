import { Amplify, API, graphqlOperation } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

import { API } from "aws-amplify";
import { createPost, listPosts } from "./graphql/post";
