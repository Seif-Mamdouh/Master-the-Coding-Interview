function main() {
  // read the string filename
  let filename = readLine().trim();

  // Read the content of the log file
  const logContent = fs.readFileSync(filename, "utf-8");

  // Split the log content into individual records
  const logRecords = logContent.split("\n");

  // Initialize variables to count requests and sum of bytes
  let numRequests = 0;
  let totalBytes = 0;

  // Process each log record
  for (const record of logRecords) {
    // Split the record into fields
    const fields = record.split(" ");

    // Extract the response code and bytes sent
    const responseCode = parseInt(fields[fields.length - 2], 10);
    const bytesSent = parseInt(fields[fields.length - 1], 10);

    // Check if the response code is 200 and bytes sent is greater than 5000
    if (responseCode === 200 && bytesSent > 5000) {
      numRequests++;
      totalBytes += bytesSent;
    }
  }

  // Create the output filename
  const outputFilename = `bytes_${filename}`;

  // Write the results to the output file
  fs.writeFileSync(outputFilename, `${numRequests}\n${totalBytes}`, "utf-8");

  console.log(`Output written to ${outputFilename}`);
}
