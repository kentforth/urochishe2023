export function useValidateName(name: string) {
  if (name === '') {
    return 'Введите имя'
  }

  return true
}

export function useValidateLastName(lastName: string) {
  if (lastName === '') {
    return 'Введите фамилию'
  }

  return true
}

export function useValidateAge(age: string) {
  if (age === '') {
    return 'Введите возраст'
  }

  if (age === '0') {
    return 'Возраст должен быть больше 0'
  }

  return true
}

export function useValidateCity(city: string) {
  if (city === '') {
    return 'Введите город'
  }

  return true
}
