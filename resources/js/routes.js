const EmployeeList = () => import('./components/employee/EmployeeList.vue')
const EmployeeCreate = () => import('./components/employee/AddEmployee.vue')
const EmployeeEdit = () => import('./components/employee/EditEmployee.vue')

const CompaniesList = () => import('./components/company/CompaniesList.vue')
const CompanyCreate = () => import('./components/company/AddCompany.vue')
const CompanyEdit = () => import('./components/company/EditCompany.vue')

const Welcome = () => import('./components/Welcome.vue')

export const routes = [
    {
        name: 'welcome',
        path: '/',
        component: Welcome
    },
    {
        name: 'employeeList',
        path: '/employees',
        component: EmployeeList
    },
    {
        name: 'employeeEdit',
        path: '/employee/:id/edit',
        component: EmployeeEdit
    },
    {
        name: 'employeeAdd',
        path: '/employee/add',
        component: EmployeeCreate
    },
    {
        name: 'companiesList',
        path: '/companies',
        component: CompaniesList
    },
    {
        name: 'companyEdit',
        path: '/company/:id/edit',
        component: CompanyEdit
    },
    {
        name: 'companyAdd',
        path: '/company/add',
        component: CompanyCreate
    }
]