export function useValidateName(name: any) {
  if (name === '') {
    return 'Введите имя'
  }

  return true
}

export function useValidateLastName(lastName: any) {
  if (lastName === '') {
    return 'Введите фамилию'
  }

  return true
}

export function useValidateAge(age: any) {
  if (age === '' || age === null) {
    return 'Введите возраст'
  }

  if (age === '0') {
    return 'Возраст должен быть больше 0'
  }

  return true
}

export function useValidateCity(city: any) {
  if (city === '') {
    return 'Введите город'
  }

  return true
}
