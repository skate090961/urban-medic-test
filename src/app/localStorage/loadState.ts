export function loadState() {
  const persistedSeedString = localStorage.getItem('seed')
  const persistedUsersString = localStorage.getItem('users')

  if (persistedSeedString && persistedUsersString) {
    return {
      isLoading: false,
      seed: JSON.parse(persistedSeedString),
      users: JSON.parse(persistedUsersString),
    }
  }

  return undefined
}
