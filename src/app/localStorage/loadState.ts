export function loadState() {
  const persistedSeedString = localStorage.getItem('seed')
  const persistedUsersString = localStorage.getItem('users')

  if (persistedSeedString && persistedUsersString) {
    return {
      seed: JSON.parse(persistedSeedString),
      users: JSON.parse(persistedUsersString),
    }
  }

  return undefined
}
