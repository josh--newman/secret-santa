import { db } from 'src/lib/db'

export const groups = () => {
  return db.group.findMany()
}

export const Group = {
  members: (_obj, { root }) =>
    db.group.findOne({ where: { id: root.id } }).members(),
}

export const createGroup = ({ input }) => {
  return db.group.create({ data: input })
}
