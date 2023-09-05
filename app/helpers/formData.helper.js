export const formData = async (e, ref) => {
    e.preventDefault()
    const formData = new FormData(ref.current)
    const data = {}

    formData.forEach((value, key) => {
        data[key] = value
    })
    ref.current.reset()

    return data
}