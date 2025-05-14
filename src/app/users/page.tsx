import { Metadata } from 'next';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Role } from '../../types/rolePermissions';

export const metadata: Metadata = {
  title: 'User Management',
  description: 'Manage system users and their roles',
};

export default function UsersPage() {
  const { data: session } = useSession();

  // Check if user has admin role
  if (!session || session.user?.role !== Role.ADMIN) {
    redirect('/');
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">User Management</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-6">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => redirect('/users/new')}
          >
            New User
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Name</th>
                <th className="text-left py-2">Email</th>
                <th className="text-left py-2">Role</th>
                <th className="text-left py-2">Systems</th>
                <th className="text-left py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Users will be loaded here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
