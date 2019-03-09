/**
 * Kryptx model events
 */

'use strict';

import {EventEmitter} from 'events';
import Kryptx from './kryptx.model';
var KryptxEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
KryptxEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Kryptx.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    KryptxEvents.emit(event + ':' + doc._id, doc);
    KryptxEvents.emit(event, doc);
  }
}

export default KryptxEvents;
