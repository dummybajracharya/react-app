import { useEffect, useState } from "react";


interface Props{
    id: number,
    type: string,
    price: number
}

export const AxiosTest = () => {
  const [posts, setPosts] = useState<Props[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://eq7xvi7b01.execute-api.ap-southeast-2.amazonaws.com/test/pets"
      );
      console.log(response);
     
    
      const data = await response.json();
      console.log(data);

      setPosts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //   const useEffect = () => {
  //     const url = "https://my-api-gateway-endpoint.com/users";
  //     getUsers(url).then((users) => {
  //       // Do something with the users data.
  //       console.log(users);
  //     });
  //   };

  //   const users = getUsers();

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.type}</li>
        ))}
      </ul>
    </div>
  );
};
