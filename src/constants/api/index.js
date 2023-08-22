export const BASE_API_URL = "http://localhost:3001/"


export const API_PRODUCTS = {
    create: "/inventory/product/create",
    deleteOne: "/inventory/product/deleteOne",
    update: "/inventory/product/update",
    getAll: "/inventory/product/getAll",
    getCategory: "/inventory/product/getAllCategory",
    getOne: (id) => `/inventory/product/getOne/${id}`,
    countProducts: "/inventory/product/countProducts",
    upload_CSV: "/inventory/product/uploadCSV",
    getDate: ({ start, end }) => `/inventory/product/getDate/${start}/${end}`
};

export const API_USERS = {
    create: "/inventory/user/create",
    update: "/inventory/user/update",
    getAll: "/inventory/user/getAll",
    getAllBatch: "/inventory/user/getAllBatch",
    getOne: "/inventory/user/getOne",
    countUsers: "/inventory/user/countUsers",
    upload_CSV: "/inventory/user/uploadCSV",
};

export const API_LOGS = {
    getAll: "/inventory/userlogs/getAll",
    getUserlogsDate: ({ start, end }) => `/inventory/userlogs/getUserlogsDate/${start}/${end}`,
};

