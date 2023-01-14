function isValidName(value) {
  return value && value.trim().length > 0 && value.trim().length <= 30
}

function isValidLastName(value) {
  return value && value.trim().length > 0 && value.trim().length <= 30
}

function isValidNumber(value) {
  return value && value.trim().length > 0 && value.trim().length <= 30
}

function isValidAddress(value) {
  return value && value.trim().length > 0 && value.trim().length <= 40
}

function isValidMessage(value) {
  return value && value.trim().length > 0 && value.trim().length <= 600
}

export function validateLeadInput(input) {
  let validationErrors = {}

  if (!isValidName(input.firstName)) {
    validationErrors.firtsName =
      'Invalid, first name must be at most 30 characters long.'
  }
  if (!isValidLastName(input.lastName)) {
    validationErrors.lastName =
      'Invalid, last name Must be at most 30 characters long.'
  }
  if (!isValidNumber(input.number)) {
    validationErrors.lastName =
      'Invalid, number must be at most 30 characters long.'
  }

  if (!isValidAddress(input.address)) {
    validationErrors.lastName =
      'Invalid, address be at most 30 characters long.'
  }
  if (!isValidMessage(input.message)) {
    validationErrors.lastName =
      'Invalid, message must be at most 600 characters long.'
  }

  if (Object.keys(validationErrors).length > 0) {
    throw validationErrors
  }
}
