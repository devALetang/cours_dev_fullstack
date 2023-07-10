import {
    Admin, Resource
} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import CustomLoginAdminPage from './Admin/CustomLoginAdminPage';
import authProvider from './Admin/AuthProvider';
import UserList from './Admin/User/UserList';

const AdminPage = () => {

    const dataProvider = simpleRestProvider('http://localhost:3000/')

    return (
        <Admin
            basename="/admin"
            dataProvider={dataProvider}
            loginPage={CustomLoginAdminPage}
            authProvider={authProvider}
            requireAuth
        >
            <Resource name='users' options={{label: 'Users'}} list={UserList}/>
        </Admin>
    )
}

export default AdminPage;