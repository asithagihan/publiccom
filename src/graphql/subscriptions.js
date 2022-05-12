/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
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
          owner
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
          owner
        }
        nextToken
      }
      ratings {
        items {
          id
          value
          createdAt
          updatedAt
          postRatingsId
          owner
        }
        nextToken
      }
      media {
        items {
          id
          url
          createdAt
          updatedAt
          postMediaId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
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
          owner
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
          owner
        }
        nextToken
      }
      ratings {
        items {
          id
          value
          createdAt
          updatedAt
          postRatingsId
          owner
        }
        nextToken
      }
      media {
        items {
          id
          url
          createdAt
          updatedAt
          postMediaId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
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
          owner
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
          owner
        }
        nextToken
      }
      ratings {
        items {
          id
          value
          createdAt
          updatedAt
          postRatingsId
          owner
        }
        nextToken
      }
      media {
        items {
          id
          url
          createdAt
          updatedAt
          postMediaId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateMedia = /* GraphQL */ `
  subscription OnCreateMedia($owner: String) {
    onCreateMedia(owner: $owner) {
      id
      url
      createdAt
      updatedAt
      postMediaId
      owner
    }
  }
`;
export const onUpdateMedia = /* GraphQL */ `
  subscription OnUpdateMedia($owner: String) {
    onUpdateMedia(owner: $owner) {
      id
      url
      createdAt
      updatedAt
      postMediaId
      owner
    }
  }
`;
export const onDeleteMedia = /* GraphQL */ `
  subscription OnDeleteMedia($owner: String) {
    onDeleteMedia(owner: $owner) {
      id
      url
      createdAt
      updatedAt
      postMediaId
      owner
    }
  }
`;
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($owner: String) {
    onCreateTag(owner: $owner) {
      id
      label
      posts {
        items {
          id
          postID
          tagID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($owner: String) {
    onUpdateTag(owner: $owner) {
      id
      label
      posts {
        items {
          id
          postID
          tagID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($owner: String) {
    onDeleteTag(owner: $owner) {
      id
      label
      posts {
        items {
          id
          postID
          tagID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
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
        ratings {
          nextToken
        }
        media {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      content
      createdAt
      updatedAt
      postCommentsId
      owner
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
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
        ratings {
          nextToken
        }
        media {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      content
      createdAt
      updatedAt
      postCommentsId
      owner
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
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
        ratings {
          nextToken
        }
        media {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      content
      createdAt
      updatedAt
      postCommentsId
      owner
    }
  }
`;
export const onCreateRating = /* GraphQL */ `
  subscription OnCreateRating($owner: String) {
    onCreateRating(owner: $owner) {
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
        ratings {
          nextToken
        }
        media {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      value
      createdAt
      updatedAt
      postRatingsId
      owner
    }
  }
`;
export const onUpdateRating = /* GraphQL */ `
  subscription OnUpdateRating($owner: String) {
    onUpdateRating(owner: $owner) {
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
        ratings {
          nextToken
        }
        media {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      value
      createdAt
      updatedAt
      postRatingsId
      owner
    }
  }
`;
export const onDeleteRating = /* GraphQL */ `
  subscription OnDeleteRating($owner: String) {
    onDeleteRating(owner: $owner) {
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
        ratings {
          nextToken
        }
        media {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      value
      createdAt
      updatedAt
      postRatingsId
      owner
    }
  }
`;
export const onCreatePostTags = /* GraphQL */ `
  subscription OnCreatePostTags($owner: String) {
    onCreatePostTags(owner: $owner) {
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
        ratings {
          nextToken
        }
        media {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      tag {
        id
        label
        posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePostTags = /* GraphQL */ `
  subscription OnUpdatePostTags($owner: String) {
    onUpdatePostTags(owner: $owner) {
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
        ratings {
          nextToken
        }
        media {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      tag {
        id
        label
        posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePostTags = /* GraphQL */ `
  subscription OnDeletePostTags($owner: String) {
    onDeletePostTags(owner: $owner) {
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
        ratings {
          nextToken
        }
        media {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      tag {
        id
        label
        posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
