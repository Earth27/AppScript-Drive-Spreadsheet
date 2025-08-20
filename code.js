function doGet() {
  return HtmlService.createHtmlOutputFromFile('selection');
}

function loadPage(pageName) {
  const template = HtmlService.createTemplateFromFile(pageName);
  return template.evaluate().getContent();
}

function logData(data) {
  const sheet = SpreadsheetApp.openById("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx").getSheetByName("Sheet1"); 
  sheet.appendRow([
    data.name,
    data.email,
    data.phone,
    data.datetime,
    data.ipv4,
    data.ipv6,
    data.isp,
    data.latitude,
    data.longitude
  ]);
  return "✅ Data Saved Successfully!";
}

function uploadToDrive(filename, base64Data) {
  try {
    const folder = DriveApp.getFolderById("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"); // replace FOLDER_ID with your Drive folder ID
    const blob = Utilities.newBlob(Utilities.base64Decode(base64Data)).setName(filename);
    const file = folder.createFile(blob);

    return `✅ ${file.getName()} uploaded successfully!`;
  } catch (e) {
    return `❌ Error: ${e.message}`;
  }
}

