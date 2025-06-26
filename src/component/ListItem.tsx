export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

interface Props {
  users: User[];
}

export default function ListItem({ users }: Props) {
  return (
    <>
      <div className="container mt-4">
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover align-middle shadow-sm">
            <thead className="table-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Full Name</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
