const handleProfileGet = (req, res, db) => {
  console.log('masuk');
  const { id } = req.params;
  console.log(id)
  db.select('*').from('users').where({id})
    .then(user => {
      console.log(user)
      if (user.length) {
        console.log('sukses')
        res.json(user[0])
      } else {
        console.log('gagal')
        res.status(400).json('Not found')
      }
    })
    .catch(err => res.status(400).json('error getting user'))
}

const handleProfileUpdate = (req, res, db) => {
  const { id } = req.params;
  const { name, age, pet } = req.body.formInput;
  db('users').where({id}).update({name})
    .then(resp => {
      if (resp) {
        res.json('success')
      }else {
        res.status(400).json('Unable to update')
      }
    })
    .catch(err => res.status(400).json('error updating user'))
}

module.exports = {
  handleProfileGet,
  handleProfileUpdate
}