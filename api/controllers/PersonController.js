/**
 * PersonController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async function (req, res) {
      if (req.method == "GET") return res.view('person/create');
      var person = await Person.create(req.body).fetch();
      return res.status(201).json({id: person.id});
  },

  json: async function (req, res) {
    var everyones = await Person.find();
    return res.json(everyones);
  },

  list: async function (req, res) {

    var everyones = await Person.find();
    
    return res.view('person/list', { persons: everyones });
  },

  read: async function (req, res) {
    var thatPerson = await Person.findOne(req.params.id);
    if (!thatPerson) return res.notFound();
    return res.view('person/read', { person: thatPerson });
  }
};

