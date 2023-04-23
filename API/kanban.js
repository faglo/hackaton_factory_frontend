import API from '.'

const prefix = '/kanban'

const handleResp = (resp) => {
    console.log(resp.data)
    return resp.data
}

const handleErr = (err) => {
    console.log(err)
    // return err
}

export const getFunnels = () => API
    .get(`${prefix}`)
    .then(handleResp)
    .catch(handleErr)

export const createFunnel = (name) => API
    .post(`${prefix}`, {name})
    .then(handleResp)
    .catch(handleErr)

export const getFunnelByID = (id) => API
    .get(`${prefix}/${id}`)
    .then(handleResp)
    .catch(handleErr)

export const getColumnsByFunnelId = (id) => API
    .get(`${prefix}/${id}/columns`)
    .then(handleResp)
    .catch(handleErr)

export const getTasksByColumnId = (id) => API
    .get(`${prefix}/columns/${id}/tasks`)
    .then(handleResp)
    .catch(handleErr)

export const moveTask = (id, columnId) => API
    .get(`${prefix}/columns/${columnId}/tasks/${id}`)
    .then(handleResp)
    .catch(handleErr)