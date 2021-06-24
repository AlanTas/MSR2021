const config = {
  ss: null,
  mb_sheet: null,
  users_sheet: null,
  comments_sheet: null,
  mb_rows: null,
  users_rows: null,
  comments_rows: null,
};

function initAll_() {
  config.ss = SpreadsheetApp.openById(SPREAD_SHEET_ID);
  [config.mb_sheet, config.users_sheet, config.comments_sheet] = [
    MESSAGE_BOARD,
    USERS,
    COMMENT_VOTES,
  ].map(name => config.ss.getSheetByName(name));
  [config.mb_rows, config.users_rows, config.comments_rows] = [
    config.mb_sheet,
    config.users_sheet,
    config.comments_sheet,
  ].map(sheet => sheet.getDataRange().getValues());
}


function GetMessageBoardChildren(message_id) {
  /*Initialize everything once and only once*/initAll_();
  console.time('Gettingcomments'); 
  //Removed var ss = SpreadsheetApp.openById(SPREAD_SHEET_ID);
  // var sheet = ss.getSheetByName(MESSAGE_BOARD);
  var rows = /*Modified*/ config.mb_rows;
  /*stuff*/
}

function GetUserNameByUserId(ID) {
  // var ss = SpreadsheetApp.openById(SPREAD_SHEET_ID);
  // var sheet = ss.getSheetByName(USERS);
  var rows = config.users_rows
  /*stuff*/
}

function GetVotesByCommentId(comment_id) {
  // var ss = SpreadsheetApp.openById(SPREAD_SHEET_ID);
  // var sheet = ss.getSheetByName(COMMENT_VOTES);
  var rows = config.comments_rows;
  /*stuff*/
}

/**
 * A sheet configuration object containing class sheet and
 *   it's full datarange values
 * @typedef {Object} SheetConfig
 * @property {GoogleAppsScript.Spreadsheet.Sheet} sheet
 * @property {Object[][]} values
 */

/**
 * Global configuration object
 * @type {{
 * ss:GoogleAppsScript.Spreadsheet.Spreadsheet,
 * [x:string]:SheetConfig|GoogleAppsScript.Spreadsheet.Spreadsheet}}
 */
const config = {
  get ss() {
    delete this.ss;
    return (this.ss = SpreadsheetApp.getActive());
  },
};
(function addSheetGettersToConfig_() {
  /*Add 3 {SheetConfig}  to config object*/
  [MESSAGE_BOARD,USERS,COMMENT_VOTES,].forEach(name =>
    Object.defineProperty(config, name, {
      enumerable: true,
      configurable: true,
      get: function() {
        delete this[name];
        return (this[name] = {
          sheet: this.ss.getSheetByName(name),
          get values() {
            delete this.values;
            return (this.values = this.sheet.getDataRange().getValues());
          },
        });
      },
    })
  );
})();

console.log('config before');
console.log(config);

function test_lazyLoading() {
  console.log(config['Sheet1'].values);
  console.log('config after');
  console.log(config);
}
