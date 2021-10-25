import axios from "axios"
import { response } from "express"


class AuthenticateUserService {
    async execute(code: string) {

        const url = "https://github/login/oauth/access_token"

        const response = await axios.post(url,null,{
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHU_CLIENT_SECRET,
                code,
            },
            headers: {
                "Accept":"aplication/json"

            }
            
        })
        return response.data
    }
}

export {AuthenticateUserService}