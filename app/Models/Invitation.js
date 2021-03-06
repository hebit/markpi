"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Invitation extends Model {
  user() {
    return this.belongsTo("App/Models/User");
  }
  author() {
    return this.belongsTo("App/Models/User", "id", "author_id");
  }
  team() {
    return this.belongsTo("App/Models/Team");
  }
}

module.exports = Invitation;
