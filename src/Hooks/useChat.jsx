import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useChat = () => {
    const { isPending, refetch, data: loadedChat } = useQuery({
        queryKey: ['posts'],
        queryFn: async() =>{
            const res = await axios.get('chat.json')
            return res.data
        }
      })

    return { loadedChat, isPending, refetch }
};

export default useChat;