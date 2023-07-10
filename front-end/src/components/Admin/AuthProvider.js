import axios from "axios"

const AuthProvider = {
    login: async ({ email, password }) => {
        await axios({
            method: "POST",
            url: `http://localhost:3000/user/auth`,
            data: {email, password}
        })
        .then( async (res) => {
            localStorage.setItem('adminToken', res.data.token)
            await AuthProvider.checkAuth(res.data.token)
            .then(() => Promise.resolve())
            .catch(() => Promise.reject())
        })
        .catch((e) => {
            console.log(e);
        })
    },

    checkAuth: async () => {
        const token = localStorage.getItem('adminToken');
        if(token != null) {
            await axios({
                method: "GET",
                url: `http://localhost:3000/user/me`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then((res) => {
                if(res.data.user != null && res.data.user.is_admin === true) return Promise.resolve();
                else return Promise.reject();
            })
            .catch((e) => {
                console.log(e);
            })
        }
    },

    checkError:  (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            return Promise.reject();
        }
        return Promise.resolve();
    },

    getPermissions: async () => await Promise.resolve(),
}

export default AuthProvider;
