import { PostDTO } from "@/types/post/post.type";

const POST_API_URL = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async (): Promise<PostDTO[]> => {
    const response = await fetch(POST_API_URL);
    if (!response.ok) {
        throw new Error("getPosts fetching failed");
    }
    return response.json();
}
