/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/registrations              ->  index
 * POST    /api/registrations              ->  create
 * GET     /api/registrations/:id          ->  show
 * PUT     /api/registrations/:id          ->  update
 * DELETE  /api/registrations/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Registration from './registration.model';
import User from '../user/user.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    if(entity) {
      var updated = _.merge(entity, updates);
      return updated.save()
        .then(updated => {
          return updated;
        });
    }
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Registrations
export function index(req, res) {
  return Registration.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Registration from the DB
export function show(req, res) {
  return Registration.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Registration in the DB
export function create(req, res) {
  User.findById(req.user.id).exec()
    .then(user => {
      user.events.push(req.body.event);
      user.save();
    });
  return Registration.create({event: req.body.event, userid: req.user.id})
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Registration in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Registration.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Registration from the DB
export function destroy(req, res) {
  return Registration.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
