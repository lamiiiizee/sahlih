var SPREADSHEET_ID = '1WprPM8ISDUOrWVTxx9HGKUf_JIbQiP2j_Xvo0ZUiiJg';

// Replace 'YOUR_FOLDER_ID' with the ID of the folder in Google Drive where you want to store the files
var FOLDER_ID = '1zghzOeIoPD8YZgn9eSRdEM8m_bAq_A9V';

function doPost(e) {
    var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
    var rowData = [];

    // Assuming the form fields are in the same order as the columns in your Google Sheet
    rowData.push(e.parameter['your-name']);
    rowData.push(e.parameter['country']);
    rowData.push(e.parameter['your-phone']);
    rowData.push(e.parameter['your-job']);
    rowData.push(e.parameter['your-email']);
    rowData.push(e.parameter['your-subject']);
    rowData.push(e.parameter['your-message']);

    // File handling
    var fileBlob = e.parameter['formFile'];
    var fileName = fileBlob.getName();
    var fileUrl = uploadFileToDrive(fileBlob, fileName);
    rowData.push(fileUrl);

    // Add more fields as needed

    sheet.appendRow(rowData);

    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}

// Function to upload file to Google Drive
function uploadFileToDrive(fileBlob, fileName) {
    try {
        var folder = DriveApp.getFolderById(FOLDER_ID);
        var file = folder.createFile(fileBlob);
        file.setName(fileName);
        return file.getUrl();
    } catch (e) {
        return "Error uploading file: " + e.toString();
    }
}