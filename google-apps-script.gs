/**
 * Anna Mithra — Sponsorship form → Google Sheets logger
 *
 * SETUP (one time, ~5 minutes):
 * 1. Create a new Google Sheet (e.g. "Anna Mithra Sponsorships").
 * 2. In the sheet: Extensions → Apps Script.
 * 3. Delete any code there and paste this entire file. Save (Ctrl+S).
 * 4. Click "Deploy" → "New deployment" → gear icon → "Web app".
 *      - Description:  Anna Mithra form logger
 *      - Execute as:   Me
 *      - Who has access:  Anyone
 *    Click "Deploy" and authorize when prompted.
 * 5. Copy the Web app URL (looks like
 *    https://script.google.com/macros/s/AKfycb.../exec)
 * 6. Paste that URL into SHEETS_WEBHOOK_URL in
 *    components/SponsorForm.tsx — then rebuild/redeploy the site.
 *
 * NOTE: If you later edit this script, you must "Deploy" →
 * "Manage deployments" → edit → "New version" for changes to go live.
 */

var SHEET_NAME = 'Sponsorships';

/**
 * Sheets interprets cell values starting with =, +, - or @ as formulas
 * (e.g. a phone number like "+91 90000 00001" becomes #ERROR!).
 * Prefix those with an apostrophe so they are stored as plain text.
 */
function safe(v) {
  if (typeof v === 'string' && /^[=+\-@]/.test(v)) return "'" + v;
  return v || '';
}

function doPost(e) {
  var data = JSON.parse(e.postData.contents);

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

  // Write the header row on first use.
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Timestamp', 'Name', 'Phone', 'Email', 'City',
      'Meal', 'Slot Time', 'Menu', 'Preferred Date',
      'Location', 'Area Preference', 'Campaign Type', 'Additional Notes',
    ]);
    sheet.setFrozenRows(1);
  }

  sheet.appendRow([
    new Date(),
    safe(data.name),
    safe(data.phone),
    safe(data.email),
    safe(data.city),
    safe(data.meal),
    safe(data.time),
    safe(data.menu),
    safe(data.date),
    'Vijayawada',
    safe(data.area),
    safe(data.campaignType),
    safe(data.dedication),
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
