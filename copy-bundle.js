let copydir = require('copy-dir');

let originPath = __dirname + '/mat-range-datepicker/src';
let destinyPath = __dirname + '/dist';
let extenstionList = [
  '.scss'
];

let load = () => {

  // COPAR ARQUIVOS
  try {
    copydir.sync(originPath, destinyPath, null, (stat, filepath, filename) => {
      if (err) {
        console.log(err);
        return false;
      }
      else {
        if(stat === 'file' && extenstionList.filter(ext => ext === path.extname(filepath)).length > 0)
          return true;
          //if (stat === 'directory' && filename === '.svn') return false;
        return false;
      }
    });
  }
  catch(ex) { console.log('ERROR on copy: ' + ex); }

}

load();
