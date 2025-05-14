export enum Role {
  REPORTER = 'REPORTER',
  APPROVER = 'APPROVER',
  VIEWER = 'VIEWER',
  ADMIN = 'ADMIN'
}

export type Permission = {
  name: string;
  description: string;
  permission: string;
}

export const rolePermissions: Record<Role, Permission[]> = {
  [Role.REPORTER]: [
    {
      name: 'manage_kpi_data',
      description: 'Can create, update, delete and view KPI data',
      permission: 'FULL'
    },
    {
      name: 'manage_incidents',
      description: 'Can create, update, delete and view incidents',
      permission: 'FULL'
    }
  ],
  [Role.APPROVER]: [
    {
      name: 'view_kpi_data',
      description: 'Can view KPI data',
      permission: 'READ'
    },
    {
      name: 'approve_kpi_data',
      description: 'Can approve KPI data',
      permission: 'APPROVE'
    },
    {
      name: 'view_incidents',
      description: 'Can view incidents',
      permission: 'READ'
    },
    {
      name: 'approve_incidents',
      description: 'Can approve incidents',
      permission: 'APPROVE'
    }
  ],
  [Role.VIEWER]: [
    {
      name: 'view_kpi_data',
      description: 'Can view KPI data',
      permission: 'READ'
    },
    {
      name: 'view_incidents',
      description: 'Can view incidents',
      permission: 'READ'
    }
  ],
  [Role.ADMIN]: [
    {
      name: 'manage_kpi_data',
      description: 'Can manage all KPI data',
      permission: 'FULL'
    },
    {
      name: 'manage_incidents',
      description: 'Can manage all incidents',
      permission: 'FULL'
    },
    {
      name: 'manage_users',
      description: 'Can manage users and roles',
      permission: 'FULL'
    },
    {
      name: 'manage_system',
      description: 'Can manage system settings',
      permission: 'FULL'
    }
  ]
}
