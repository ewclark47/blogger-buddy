import GenerateKey from "@/components/GenerateKey";
import Link from "next/link";
import { db } from "@/db";

export default async function PostsPage(){

    const posts = await db.post.findMany()

    const rendered_posts = posts.map( (post) => {
        return(
            <Link key={GenerateKey()} href={`/posts/${post.id}`}>
                <div>
                    {post.title}
                </div>
                <div>
                    View
                </div>
            </Link>
        )
    })

    return(
        <div>
            <h1>Posts</h1>
            <div>
                <Link href={'/posts/new'}>New Post</Link>
            </div>
            <div>
                {rendered_posts}
            </div>
        </div>
    )
}