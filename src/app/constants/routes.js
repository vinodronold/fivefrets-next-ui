export const home = {
  href: () => '/',
  as: () => '/'
}

export const play = {
  href: id => `/play?id=${id}`,
  as: id => `/p/${id}`
}

export const browse = {
  href: text => `/browse?text=${text}`,
  as: text => `/b/${text}`
}

export const login = {
  href: () => '/login',
  as: () => '/l'
}
