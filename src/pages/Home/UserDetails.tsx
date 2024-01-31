import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  // Add more fields if necessary
}

type UserDetailParams = {
  id?: string;
};

function UserDetails(): JSX.Element {
  const { id } = useParams<UserDetailParams>();
  const { isLoading, error, data } = useQuery<User>(["user", id], () =>
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch user");
      }
      return res.json();
    })
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div>
      <h2>User Details</h2>
      <p>
        <strong>Name:</strong> {data?.name}
      </p>
      <p>
        <strong>Email:</strong> {data?.email}
      </p>
      <p>
        <strong>Phone:</strong> {data?.phone}
      </p>
      {/* Add more details as needed */}
    </div>
  );
}

export default UserDetails;
