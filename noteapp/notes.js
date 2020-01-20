const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your Notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("New Note Added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

const removeNote = title => {
  const notes = loadNotes();
  const noteToKeep = notes.filter(note => note.title != title);

  if (notes.length > noteToKeep.length) {
    console.log(chalk.blue.inverse(title + " is removed!"));

    saveNotes(noteToKeep);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};
const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBugger = fs.readFileSync("notes.json");
    const dataJSON = dataBugger.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.magenta.inverse(getNotes()));

  notes.forEach(note => {
    console.log(note.title);
  });
};

const readNotes = title => {
  const notes = loadNotes();

  const searchedNote = notes.find(note => note.title === title);

  if (searchedNote) {
    console.log(chalk.yellow.inverse(searchedNote.title));
    console.log(searchedNote.body);
  } else {
    console.log(chalk.red.inverse(title + " cannot found!"));
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes
};
