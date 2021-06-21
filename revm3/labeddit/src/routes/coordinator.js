export const goToLogin = (history) => {
    history.push('/')
}
export const goToPost = (history, id) => {
    history.push(`/post/${id}`)
}
export const goToSign = (history) => {
    history.push('/signup')
}
export const goToFeed = (history) => {
    history.push('/feed')
}