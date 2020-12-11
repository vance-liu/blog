import { types } from 'mobx-state-tree';

export const OptionalBooleanType = types.optional(types.union(types.boolean, types.null), false);

export const OptionalNumberStringNullUndefinedType = types.optional(
  types.union(types.number, types.string, types.null, types.undefined),
  undefined,
);

export const userPlanStore = types.model('userPlan', {
  name: OptionalNumberStringNullUndefinedType,
  space: OptionalNumberStringNullUndefinedType,
  private_repos: OptionalNumberStringNullUndefinedType,
  collaborators: OptionalNumberStringNullUndefinedType,
});

export const userStore = types.model('user', {
  login: OptionalNumberStringNullUndefinedType,
  id: OptionalNumberStringNullUndefinedType,
  node_id: OptionalNumberStringNullUndefinedType,
  avatar_url: OptionalNumberStringNullUndefinedType,
  gravatar_id: OptionalNumberStringNullUndefinedType,
  url: OptionalNumberStringNullUndefinedType,
  html_url: OptionalNumberStringNullUndefinedType,
  followers_url: OptionalNumberStringNullUndefinedType,
  following_url: OptionalNumberStringNullUndefinedType,
  gists_url: OptionalNumberStringNullUndefinedType,
  starred_url: OptionalNumberStringNullUndefinedType,
  subscriptions_url: OptionalNumberStringNullUndefinedType,
  organizations_url: OptionalNumberStringNullUndefinedType,
  repos_url: OptionalNumberStringNullUndefinedType,
  events_url: OptionalNumberStringNullUndefinedType,
  received_events_url: OptionalNumberStringNullUndefinedType,
  type: OptionalNumberStringNullUndefinedType,
  site_admin: OptionalBooleanType,
  name: OptionalNumberStringNullUndefinedType,
  company: OptionalNumberStringNullUndefinedType,
  blog: OptionalNumberStringNullUndefinedType,
  location: OptionalNumberStringNullUndefinedType,
  email: OptionalNumberStringNullUndefinedType,
  hireable: OptionalBooleanType,
  bio: OptionalNumberStringNullUndefinedType,
  twitter_username: OptionalNumberStringNullUndefinedType,
  public_repos: OptionalNumberStringNullUndefinedType,
  public_gists: OptionalNumberStringNullUndefinedType,
  followers: OptionalNumberStringNullUndefinedType,
  following: OptionalNumberStringNullUndefinedType,
  created_at: OptionalNumberStringNullUndefinedType,
  updated_at: OptionalNumberStringNullUndefinedType,
  private_gists: OptionalNumberStringNullUndefinedType,
  total_private_repos: OptionalNumberStringNullUndefinedType,
  owned_private_repos: OptionalNumberStringNullUndefinedType,
  disk_usage: OptionalNumberStringNullUndefinedType,
  collaborators: OptionalNumberStringNullUndefinedType,
  two_factor_authentication: OptionalBooleanType,
  plan: types.optional(types.maybeNull(userPlanStore), null),
});
