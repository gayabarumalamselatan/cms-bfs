export const isEditor = ({ req }: any) => {
  return req.user?.role === 'editor'
}
export const isAdmin = ({ req }: any) => {
  return req.user?.role === 'admin'
}

export const isHiddenFromEditor = ({ user }: any) => user?.role !== 'editor'
export const isHiddenFromAdmin = ({ user }: any) => user?.role !== 'admin'
