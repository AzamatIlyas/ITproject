import { request } from './api'

export function loginUser({ email, password }) {
  return request('/users/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  })
}

export function logoutUser() {
  return request('/users/logout', {
    method: 'POST',
  })
}

export function getUserProfile() {
  return request('/users/profile', {
    method: 'GET',
  })
}
