
export const maskCPF = (value) => {
    const digits = value.replace(/\D/g, '');
    let result = '';

    if(digits.length > 0) result += digits.slice(0, 3);
    if(digits.length > 3) result += '.' + digits.slice(3, 6);
    if(digits.length > 6) result += '.' + digits.slice(6, 9);
    if(digits.length > 9) result += '-' + digits.slice(9, 11);

    return result;
}

export const maskRG = (value) => {
    const digits = value.replace(/\D/g, '');
    let result = '';

    if(digits.length > 0) result += digits.slice(0, 3);
    if(digits.length > 3) result += '.' + digits.slice(3, 6);
    if(digits.length > 6) result += '.' + digits.slice(6, 9);

    return result;
}

export const maskPhone = (value) => {
    const digits = value.replace(/\D/g, '');
    let result = '';

    if(digits.length > 0) result += '(' + digits.slice(0, 2);
    if(digits.length > 2) result += ') ' + digits.slice(2, 7);
    if(digits.length > 7) result += '-' + digits.slice(7, 11);

    return result;
}
