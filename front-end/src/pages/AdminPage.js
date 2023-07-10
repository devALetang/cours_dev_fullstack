import {
    Admin, Resource
} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import CustomLoginAdminPage from '../components/Admin/CustomLoginAdminPage';
import authProvider from '../components/Admin/AuthProvider';
import UserList from '../components/Admin/User/UserList';
import UserEdits from '../components/Admin/User/UserEdits';
import UserShow from '../components/Admin/User/UserShow';
import UserCreate from '../components/Admin/User/UserCreate';
import PostList from '../components/Admin/Posts/PostsList';

const AdminPage = () => {

    const dataProvider = simpleRestProvider('http://localhost:3000/admin')

    return (
        <Admin
            basename="/admin"
            dataProvider={dataProvider}
            loginPage={CustomLoginAdminPage}
            authProvider={authProvider}
            requireAuth
        >
            <Resource name='users' options={{label: 'Users'}} list={UserList} edit={UserEdits} show={UserShow} create={UserCreate}/>
            <Resource name='posts' options={{label: 'Posts'}} list={PostList} />
        </Admin>
    )
}

export default AdminPage;