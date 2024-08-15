import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const usePosts = () => {
    const { isPending, refetch, data: loadedPosts } = useQuery({
        queryKey: ['posts'],
        queryFn: async() =>{
            const res = await axios.get('https://blogy-server.vercel.app/posts')
            return res.data
        }
      })

    return { loadedPosts, isPending, refetch }
};

export default usePosts;