import { Tracker } from 'meteor/tracker'

FolioSchema = new SimpleSchema({
    'name': {
      'type': String,
      'min': 2,
      'required': true
    }
  },
  {
    'requiredByDefault': false,
    'clean': {
      'filter': true,
      'autoconvert': true,
      'removeEmptyStrings': true,
      'trimStrings': true,
      'getAutoValues': true,
      'removeNullsFromArrays': true
    },
    tracker: Tracker // this line is important
  })

