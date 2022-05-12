const repositories = require('../auth/getAuthSheets')

const testeSheet = "15exppXaXFROHqAc0X3yHc7GRtP9KqGUcZloR0LScU7M"
const tab = 'base'

exports.getMetadata = async function() {
    const { googleSheets, auth, spreadsheetId } = await repositories.getAuthSheets(testeSheet)
    const metadata = await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId,
    })

    return metadata
}

exports.getDataAll = async function() {
    const { googleSheets, auth, spreadsheetId } = await repositories.getAuthSheets(testeSheet)
    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: tab,
        valueRenderOption: "UNFORMATTED_VALUE",
        dateTimeRenderOption: "FORMATTED_STRING",
    })

    return getRows
}

exports.postRow = async function(values) {
    const { googleSheets, auth, spreadsheetId } = await repositories.getAuthSheets(testeSheet)
    const row = await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: tab,
        valueInputOption: "USER_ENTERED",
        resource: {
            values: values,
        },
    });

    return row
}

exports.updateRow = async function(values) {
    const { googleSheets, auth, spreadsheetId } = repositories.getAuthSheets(testeSheet)
    const updateValue = await googleSheets.spreadsheets.values.update({
        auth,
        spreadsheetId,
        range: tab,
        valueInputOption: "USER_ENTERED",
        resource: {
            values: values,
        },
    });
    return updateValue
}