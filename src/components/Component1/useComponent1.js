// @flow

import {useState, useCallback, useEffect} from 'react'

export const useComponent1 = (fetchUsers: () => void) => {
  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    age: '',
  })

  const handleFieldChange = useCallback(
    (e: SyntheticEvent<HTMLInputElement>) => {
      const {name, value} = e.currentTarget

      setUser({
        ...user,
        [name]: value,
      })
    },
    [user],
  )

  return {user, handleFieldChange}
}
