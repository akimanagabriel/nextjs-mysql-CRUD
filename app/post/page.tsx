import React from "react";

async function page() {
  interface Post {
    id: string,
    firstname: string,
    lastname: string,
    email: string,
  }

  const res = await fetch("https://jsonplaceholder.org/users");
  const posts: Post[] = await res.json();

  return (
    <div className="grid place-items-center my-10">
      <div>
        <h1 className="text-4xl uppercase underline mb-5">All users</h1>
        <ol>{posts.map((post, index) => (
          <li key={index} className="bg-gray-900 p-5 mb-5 rounded shadow">
            <span className="font-bold">{post.firstname}-{post.lastname}</span>
            <br />
            {post.email}
          </li>
        ))}</ol>
      </div>
    </div>
  );
}

export default page;
