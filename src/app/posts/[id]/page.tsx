import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ViewPostsProp{
    params: {
        id: string
    }
}

export default async function ViewPost(props: ViewPostsProp){

    const post = await db.post.findFirst({
        where: { id: parseInt(props.params.id)}
    })

    if(!post){
        return notFound();
    }

    // input delete post action for deleting a post

    return(
        <div>
            <div>
                <h1>{post.title}</h1>
                <div>
                    <Link href={`/posts/${post.id}/edit`}>Edit</Link>
                    <form> {/*add form action to delete post */}
                        <button>Delete</button>
                    </form>
                </div>
            </div>
            <pre>
                <textarea>
                    {post.post}
                </textarea>
            </pre>
        </div>
    )
}