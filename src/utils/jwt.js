import jwt from 'jsonwebtoken';



export const accessToken = (payload) => {
    const token = jwt.sign(payload, process.env.ACCESSTOKEN_KEY, { expiresIn: '1d'});
    return token
}

export const refreshToken = (payload) => {
    const token = jwt.sign(payload, process.env.REFRESHTOKEN_KEY, {expiresIn: '30d'});
    return token 
}

export const refreshTokenVerify = (token) => {
    const decode = jwt.verify(token, process.env.REFRESHTOKEN_KEY);
    return decode
}

export const accessTokenVerify = (token) => {
    const decode = jwt.verify(token, process.env.ACCESSTOKEN_KEY);
    return decode
}