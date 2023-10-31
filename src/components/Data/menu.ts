export const menu: any[] = [
  {
    name: "Dashboard",
    routerLink: ["/dashboard/summary"],
    identifier: "dashboard",
    iconClass: "icofont-home fs-5",
    breadcrumbMessage: "Welcome to Analytics Dashboard.",
    isCategory: false,
    isApp: false,
    children: [],
    roles: ["manager", "superuser"]
  },
  {
    name: "Project Management",
    routerLink: ["/dashboard/projects"],
    identifier: "Projects",
    iconClass: "icofont-briefcase",
    breadcrumbMessage: "",
    isCategory: false,
    isApp: false,
    children: [],
    roles: ["manager", "superuser"]
  },
  {
    name: "Task Management",
    routerLink: ["/dashboard/tasks"],
    identifier: "Tasks",
    iconClass: "icofont-tasks-alt",
    breadcrumbMessage: "",
    isCategory: false,
    isApp: false,
    children: [],
    roles: ["manager", "superuser", "employee"]
  },
  // {
  //   name: "Enquires",
  //   routerLink: ["/dashboard/Enquires"],
  //   identifier: "Enquires",
  //   iconClass: "icofont-ticket",
  //   breadcrumbMessage: "",
  //   isCategory: false,
  //   isApp: true,
  //   children: [],
  // },
  {
    name: "Employees",
    routerLink: ["/dashboard/employees"],
    identifier: "Employees",
    iconClass: "icofont-users-alt-1",
    breadcrumbMessage: "",
    isCategory: false,
    isApp: true,
    children: [],
    roles: ["superuser"]
  },
  {
    name: "Managers",
    routerLink: ["/dashboard/managers"],
    identifier: "Managers",
    iconClass: "icofont-users-alt-2",
    breadcrumbMessage: "",
    isCategory: false,
    isApp: true,
    children: [],
    roles: ["superuser"]
  },
  {
    name: "Groups",
    routerLink: ["/dashboard/groups"],
    identifier: "Groups",
    iconClass: "icofont-users-alt-6",
    breadcrumbMessage: "",
    isCategory: false,
    isApp: true,
    children: [],
    roles: ["manager", "superuser"]
  },
  {
    name: "Chat",
    routerLink: ["/dashboard/chat"],
    identifier: "Employees",
    iconClass: "icofont-chat",
    breadcrumbMessage: "",
    isCategory: false,
    isApp: true,
    children: [],
    roles: ["manager", "superuser", 'employee']
  },
  {
    name: "Attendance",
    routerLink: ["/dashboard/attendance"],
    identifier: "Employees",
    iconClass: "icofont-file-spreadsheet",
    breadcrumbMessage: "",
    isCategory: false,
    isApp: true,
    children: [],
    roles: ["manager", "superuser", 'employee']
  },
  {
    name: "Calendar",
    routerLink: ["/dashboard/calendar"],
    identifier: "Employees",
    iconClass: "icofont-calendar",
    breadcrumbMessage: "",
    isCategory: false,
    isApp: true,
    children: [],
    roles: ["manager", "superuser", 'employee']
  },
  {
    name: "Departments",
    routerLink: ["/dashboard/departments"],
    identifier: "Departments",
    iconClass: "icofont-listine-dots",
    breadcrumbMessage: "",
    isCategory: false,
    isApp: true,
    children: [],
    roles: ["superuser"]
  },
];
