"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = `
    type Profile {
        user: User!
        topics: [Topic]
        levels: [Level]
    }
    type createProfileResponse {
        ok: Boolean!
        errors: [Error!]
    }
    type Query {
        getProfileTopics(levelId: Int!): [Topic]
    }
    type Mutation {
        createProfile(topicId: Int, levelId: Int): createProfileResponse!
      }
`;