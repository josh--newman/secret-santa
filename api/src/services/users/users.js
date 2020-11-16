import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const User = {
  groups: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).groups(),
}

export const createUser = ({ input }) => {
  return db.user.create({ data: input })
}
