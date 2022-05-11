/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      mediaId
      media {
        id
        url
        createdAt
        updatedAt
      }
      verified
      posts {
        items {
          id
          title
          description
          createdAt
          updatedAt
          userPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      mediaId
      media {
        id
        url
        createdAt
        updatedAt
      }
      verified
      posts {
        items {
          id
          title
          description
          createdAt
          updatedAt
          userPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      mediaId
      media {
        id
        url
        createdAt
        updatedAt
      }
      verified
      posts {
        items {
          id
          title
          description
          createdAt
          updatedAt
          userPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      description
      tags {
        items {
          id
          postID
          tagID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          content
          userId
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      userPostsId
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      description
      tags {
        items {
          id
          postID
          tagID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          content
          userId
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      userPostsId
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      description
      tags {
        items {
          id
          postID
          tagID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          content
          userId
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      userPostsId
    }
  }
`;
export const createMedia = /* GraphQL */ `
  mutation CreateMedia(
    $input: CreateMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    createMedia(input: $input, condition: $condition) {
      id
      url
      createdAt
      updatedAt
    }
  }
`;
export const updateMedia = /* GraphQL */ `
  mutation UpdateMedia(
    $input: UpdateMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    updateMedia(input: $input, condition: $condition) {
      id
      url
      createdAt
      updatedAt
    }
  }
`;
export const deleteMedia = /* GraphQL */ `
  mutation DeleteMedia(
    $input: DeleteMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    deleteMedia(input: $input, condition: $condition) {
      id
      url
      createdAt
      updatedAt
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      label
      posts {
        items {
          id
          postID
          tagID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      label
      posts {
        items {
          id
          postID
          tagID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      label
      posts {
        items {
          id
          postID
          tagID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      post {
        id
        title
        description
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
      }
      content
      userId
      user {
        id
        username
        mediaId
        media {
          id
          url
          createdAt
          updatedAt
        }
        verified
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      post {
        id
        title
        description
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
      }
      content
      userId
      user {
        id
        username
        mediaId
        media {
          id
          url
          createdAt
          updatedAt
        }
        verified
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      post {
        id
        title
        description
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
      }
      content
      userId
      user {
        id
        username
        mediaId
        media {
          id
          url
          createdAt
          updatedAt
        }
        verified
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const createPostTags = /* GraphQL */ `
  mutation CreatePostTags(
    $input: CreatePostTagsInput!
    $condition: ModelPostTagsConditionInput
  ) {
    createPostTags(input: $input, condition: $condition) {
      id
      postID
      tagID
      post {
        id
        title
        description
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
      }
      tag {
        id
        label
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePostTags = /* GraphQL */ `
  mutation UpdatePostTags(
    $input: UpdatePostTagsInput!
    $condition: ModelPostTagsConditionInput
  ) {
    updatePostTags(input: $input, condition: $condition) {
      id
      postID
      tagID
      post {
        id
        title
        description
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
      }
      tag {
        id
        label
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePostTags = /* GraphQL */ `
  mutation DeletePostTags(
    $input: DeletePostTagsInput!
    $condition: ModelPostTagsConditionInput
  ) {
    deletePostTags(input: $input, condition: $condition) {
      id
      postID
      tagID
      post {
        id
        title
        description
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
      }
      tag {
        id
        label
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
