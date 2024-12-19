import {db} from '@/lib/db'

export const getUserByEmail = async (email: string) => {
  try {
    return await db.user.findUnique({
      where: {
        email,
      },
    });
  } catch {
    return null;
  }
}

export async function getUserByUsername(username: string) {
  try {
    return await db.user.findUnique({
      where: {
        username
      },
    });
  } catch {
    return null;
  }
}

export const getUserById = async (id: string) => {
  try {
    return await db.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  } catch{
    return null;
  }
}