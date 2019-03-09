/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/kryptxs              ->  index
 * POST    /api/kryptxs              ->  create
 * GET     /api/kryptxs/:id          ->  show
 * PUT     /api/kryptxs/:id          ->  update
 * DELETE  /api/kryptxs/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Kryptx from './kryptx.model';
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

// Gets a list of Kryptxs
export function index(req, res) {
  return Kryptx.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Kryptx from the DB
export function show(req, res) {
  return Kryptx.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Kryptx in the DB
export function create(req, res) {
  User.findById(req.user.id).exec()
    .then(user => {
      var flag = 1;
      for(var i=0; i<user.events.length; ++i) {
        if(req.user.id==user.events[i]) {
          flag = 0;
        }
      }
      if(flag==1) {
        user.events.push(req.body.id);
        user.save();
      }
    });
  return Kryptx.create({id: req.body.id, userid: req.user.id, answer: req.body.answer})
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Kryptx in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Kryptx.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Kryptx from the DB
export function destroy(req, res) {
  return Kryptx.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
