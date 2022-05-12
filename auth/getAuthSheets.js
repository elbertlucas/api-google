const { google } = require("googleapis");
const path = require('path')

exports.getAuthSheets = async function(spreadsheetId) {
    const auth = new google.auth.GoogleAuth({
        keyFile: path.join(__dirname, "credentials.json"),
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    });
    const client = await auth.getClient();
    const googleSheets = google.sheets({
        version: "v4",
        auth: client,
    });
    return {
        auth,
        client,
        googleSheets,
        spreadsheetId,
    };
}