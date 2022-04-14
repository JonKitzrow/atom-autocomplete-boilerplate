'use babel';

import advancedProvider from './advanced-provider';

export default {
    getProvider() {
        // return a single provider, or an array of providers to use together
        return [advancedProvider];
    },

    syncAPI() {
      const fs = require('fs');
      const readline = require('readline');

      // update advanced.json with latest code documentation
      atom.project.getPaths().forEach(scanProject);
      var jsonFile = new File("../data/advanced.json");
      const jsonData = require("../data/advanced.json");

      function scanProject(path) {
        new Directory(path).getEntriesSync().forEach(scanEntry);
      }

      function scanEntry(entry) {
        if (entry.isFile()) {// path is cs file
          if (entry.getPath().endsWith(".cs")) {
            scanFile(entry);
          }
        } else if (entry.isDirectory()) { // path is a folder
          entry.getEntriesSync().forEach(scanEntry);
        }
      }

      function scanFile(file) {

        const fileStream = file.createReadStream();

        const rl = readline.createInterface({
          input: fileStream,
          crlfDelay: Infinity
        });

        for await (const line of rl) {
          // Each line in input.txt will be successively available here as `line`.

        }
      }

      function readJSON(file) {


      }

      function writeJSON(file) {

      }
    }
};
