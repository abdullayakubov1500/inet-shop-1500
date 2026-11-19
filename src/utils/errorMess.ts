export function errorMess(data: any) {
    const error = data.response.data
    let text = '';
    for (const key in error) {
        if (typeof error[key] == 'string') {
            text += ' ' + error[key]
        } else {
            text += ' ' + error[key][0]            
        }
    }
    return text
}