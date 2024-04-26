import { createPost } from "@/actions/server-actions";

export default function CreatePost(){
    return(
        <form action={createPost}>
            <h3>Create a Post</h3>
            <div>
                <div>
                    <label htmlFor="title">Title</label>
                    <input name="title" id="title" />
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor="post">Post</label>
                    <textarea name="post" id="post" />
                </div>
            </div>
            <button type="submit">
                Publish
            </button>
        </form>
    )
}