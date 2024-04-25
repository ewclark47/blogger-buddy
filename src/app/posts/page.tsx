import GenerateKey from "@/components/GenerateKey";
import Link from "next/link";
import { db } from "@/db";

export default async function PostsPage(){

    const posts = await db.post.findMany()

    return(
        <>
            <h1> Posts </h1>
            <div>
                <Link key={GenerateKey()} href={"/posts/new"}>New Post</Link>
            </div>
            <div>
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <h4>{post.title}</h4>
                            <div>
                                {post.post}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}