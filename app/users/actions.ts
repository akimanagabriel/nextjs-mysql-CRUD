"use server";

import { redirect } from "next/navigation";
import db from "../db/connection";
import { revalidatePath } from "next/cache";

export type UserType = { id: string; username: string; password: string };

// insert
export async function insertUsers(formData: FormData) {
  const sql = "INSERT INTO `users`(`username`, `password`) VALUES (?,?)";
  await db.query(sql, [formData.get("username"), formData.get("password")]);
  redirect("/users/display");
}
// display all users from db
export const getAllUsers = async () => {
  const sql = "SELECT * FROM users";
  const [data] = await db.query(sql);
  return Array.from(data as UserType[]);
};

export async function getUserById(id: string) {
  const [data] = await db.query("SELECT * FROM users WHERE id = ? ", [id]);
  const [user] = Array.from(data as UserType[]);
  return user;
}

// delete user
export const deleteUserById = async (id: string) => {
  await db.query("DELETE FROM users where id = ?", [id]);
  revalidatePath("/users/display");
};

export const updateUserById = async (fd: FormData) => {
  const user = {
    id: fd.get("id") as string,
    username: fd.get("username") as string,
    password: fd.get("password") as string,
  };

  await db.query("UPDATE users SET username = ?, password = ? WHERE id = ?", [
    user.username,
    user.password,
    user.id,
  ]);
  redirect("/users/display");
};
