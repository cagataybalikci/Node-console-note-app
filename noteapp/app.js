const notes = require("./notes.js");
const yargs = require("yargs");
const chalk = require("chalk");

// Add Note

yargs.command({
  command: "add",
  describe: "Add note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// Create remove command

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

// Read the note

yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.readNotes(argv.title);
  }
});

// List the notes
yargs.command({
  command: "list",
  describe: "Listing all the notes",
  handler(argv) {
    notes.listNotes(argv);
  }
});

// Add, remove , read , list
yargs.parse();
