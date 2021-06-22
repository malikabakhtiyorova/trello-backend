const jwt = require("jsonwebtoken")
const SECRET_KEY = 'bismillah'

const { fetchOne } =  require("../Library/database/postgres")

module.exports = {
    POST: ('/', async (req, res) => {
        try {
            const { user_name, user_password } = req.body
            const user = await fetchOne(`select * from users where user_name = $1 and user_password = $2`, user_name, user_password)
            if(user) {
                res.send(
                    { token : jwt.sign(user, SECRET_KEY) }
                )
            }
            else {
                res.send("Error")
            }
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    })
}

module.exports.SECRET_KEY = SECRET_KEY