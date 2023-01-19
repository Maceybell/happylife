const { User } = require("../util/models");
const bcrypt = require ('bcryptjs')


module.exports = {
  register: async (req, res) => {
    try {
        const {email, password, planId, f_name, l_name, spouse_name, anniversary, spouse_bday, address} = req.body
        console.log(req.body)
        const checkUser = await User.findOne({
            where: {email}
        })
        if(checkUser){
            return res.status(400).send('Email is already in use.')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const newUser = await User.create({
            email: email,
            password: hash,
            admin: false,
            f_name: f_name,
            l_name: l_name,
            spouse_name: spouse_name,
            anniversary: anniversary,
            spouse_bday,
            address: address,
            planId: planId

          
        })
        return res.status(200).send(newUser)

    } catch (err) {
      return res.status(400).send(err);
    }
  },

login: async (req, res) => {
  const {email, password} = req.body 
  const checkUser = await User.findOne({
    where: {email}
  })
  if(checkUser){
    let authenticated = bcrypt.compareSync(password, checkUser.password)
    if(authenticated) {
      delete checkUser.password
      return res.status(200).send(checkUser)
    }
    return res.status(400).send('Password is incorrect')
  }
  return res.status(400).send('Email does not exist')
}

};
