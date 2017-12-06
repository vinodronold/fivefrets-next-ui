export const home = {
  href: () => '/',
  as: () => '/'
}

export const play = {
  href: id => `/play?id=${id}`,
  as: id => `/p/${id}`
}

export const browse = {
  href: start => `/browse?start=${start}`,
  as: start => `/b/${start}`
}

export const login = {
  href: () => '/login',
  as: () => '/l'
}
