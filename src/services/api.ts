import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

api.interceptors.request.use(
    (config) => {
        const access_token = localStorage.getItem('access_token');
        if (access_token) {
            config.headers.Authorization = 'Bearer ' + access_token;
        }
        return config
    },
    (error) => { console.log(error); }
)

async function refreshToken() {
    try {
        const refresh = localStorage.getItem('refresh_token')
        const response = await api.post('/auth/login/refresh', {
            refresh
        })
        const data = response.data;
        if (data && data.access) {
            localStorage.setItem('access_token', data.access)
            localStorage.setItem('refresh_token', data.refresh)
        }
        return data.access
    } catch (error) {
        console.log(error);
        return new Error('Ошибка обновления токена')
    }
}

api.interceptors.response.use((response) => response,
    async (error) => {
        console.dir(error);
        const originConfig = error.config;
        const access_token = localStorage.getItem('access_token')
        if (error.status == 401 && access_token) {
            const accessToken = await refreshToken()
            if (typeof accessToken == 'string') {
                api.defaults.headers.common.Authorization = 'Bearer ' + accessToken;
                return api(originConfig)
            } else {
                return Promise.reject(accessToken)
            }
        } else {
            return Promise.reject(error)
        }
    })

export default api;

