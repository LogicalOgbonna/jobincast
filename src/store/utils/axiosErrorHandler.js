export const errorHandler = (e) => ({
    success: false,
    message: e.response ? e.response.data.message : e.message
});