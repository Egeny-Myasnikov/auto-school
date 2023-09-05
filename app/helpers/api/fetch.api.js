import { getTokenFromLocalStorage } from "../localstorage.helper"

const BASE_URL = 'http://localhost:3001/api'
// _response
const _response = async (res) => {
    const resJson = await res.json()
    return {
        resStatus: res.status,
        resJson
    }
}
// _fetchPost
const _fetchPost = async (url, data) => {

    const res = await fetch(`${BASE_URL}/${url}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await _response(res)
}


// createUser
export const createUser = async (data) => {

    return await _fetchPost('user', data)
}
// loginUser
export const loginUser = async (data) => {
    return await _fetchPost('auth/login', data)
}
// profileUser
export const profileUser = async () => {

    const res = await fetch(`${BASE_URL}/auth/profile`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ` + getTokenFromLocalStorage() || '',
            "Content-Type": "application/json"
        }
    }
    )
    return res.json()
}

// createCardLesson
export const createCardLesson = async (data) => {
    const res = await fetch(`${BASE_URL}/lessons`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ` + getTokenFromLocalStorage() || '',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    )
    return await _response(res)
}
// getAllCardLesson
export const getAllCardLesson = async () => {
    try {
        const res = await fetch(`${BASE_URL}/lessons`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ` + getTokenFromLocalStorage() || '',
                "Content-Type": "application/json"
            }
        }
        )
        if (res.status === 500) {
            return res
        }
        if (res.status === 401) {
            return res.statusText
        }
        return res.json()
    } catch (error) {
        return console.log('Ошибка---> ' + error);
    }


}
// getAllCardLesson
export const removeCardLesson = async (id) => {
    try {
        const res = await fetch(`${BASE_URL}/lessons/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ` + getTokenFromLocalStorage() || '',
                "Content-Type": "application/json"
            }
        }
        )
        return await _response(res)

    } catch (error) {
        return error
    }
}