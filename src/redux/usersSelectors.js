import {createSelector} from "reselect";

const getUsersSelector = state => {
  return state.usersPage.users;
};

// Example of using Reselect library
export const getUsers = createSelector(getUsersSelector, users => users.filter(() => true));

export const getUsersCount = state => {
  return state.usersPage.usersCount;
};

export const getUsersPage = state => {
  return state.usersPage.usersPage;
};

export const getUsersTotal = state => {
  return state.usersPage.usersTotal;
};

export const getIsFetching = state => {
  return state.usersPage.isFetching;
};

export const getUsersFollowingInProgressFor = state => {
  return state.usersPage.usersFollowingInProgressFor;
};