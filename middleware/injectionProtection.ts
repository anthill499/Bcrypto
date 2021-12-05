interface Terms {
  drop: boolean;
  DROP: boolean;
  FROM: boolean;
  from: boolean;
  select: boolean;
  SELECT: boolean;
  ASCII: boolean;
  ascii: boolean;
  UNION: boolean;
  union: boolean;
  field: boolean;
  FIELD: boolean;
  COLLATE: boolean;
  collate: boolean;
  sql: boolean;
  SQL: boolean;
  admin: boolean;
  ADMIN: boolean;
  MD5: boolean;
  "GROUP BY": boolean;
  "group by": boolean;
  having: boolean;
  HAVING: boolean;
  table: boolean;
  TABLE: boolean;
  bypass: boolean;
  blacklisting: boolean;
  INSERT: boolean;
  insert: boolean;
  EXEC: boolean;
  exec: boolean;
  RECONFIGURE: boolean;
  reconfigure: boolean;
  ISNULL: boolean;
  isnull: boolean;
  SUBSTRING: boolean;
  substring: boolean;
  WHEN: boolean;
  SCHEMA: boolean;
  schema: boolean;
  VERSION: boolean;
  version: boolean;
  CONCAT: boolean;
  concat: boolean;
  delete: boolean;
  DELETE: boolean;
}

interface SpecialChars {
  "#": boolean;
  $: boolean;
  "%": boolean;
  "&": boolean;
  "'": boolean;
  "(": boolean;
  ")": boolean;
  "*": boolean;
  "+": boolean;
  ",": boolean;
  "-": boolean;
  ".": boolean;
  "/": boolean;
  ":": boolean;
  ";": boolean;
  "<": boolean;
  "=": boolean;
  ">": boolean;
  "?": boolean;
  "@": boolean;
  "[": boolean;
  "]": boolean;
  "^": boolean;
  _: boolean;
  "`": boolean;
  "{": boolean;
  "|": boolean;
  "}": boolean;
  "~": boolean;
  " ": boolean;
  '"': boolean;
}

const SIA_KEYWORDS: Terms = {
  drop: true,
  DROP: true,
  FROM: true,
  from: true,
  select: true,
  SELECT: true,
  ASCII: true,
  ascii: true,
  UNION: true,
  union: true,
  field: true,
  FIELD: true,
  COLLATE: true,
  collate: true,
  sql: true,
  SQL: true,
  admin: true,
  ADMIN: true,
  MD5: true,
  "GROUP BY": true,
  "group by": true,
  having: true,
  HAVING: true,
  table: true,
  TABLE: true,
  bypass: true,
  blacklisting: true,
  INSERT: true,
  insert: true,
  EXEC: true,
  exec: true,
  RECONFIGURE: true,
  reconfigure: true,
  ISNULL: true,
  isnull: true,
  SUBSTRING: true,
  substring: true,
  WHEN: true,
  SCHEMA: true,
  schema: true,
  VERSION: true,
  version: true,
  CONCAT: true,
  concat: true,
  delete: true,
  DELETE: true,
};

const specString = "#$%&'()*+,-./:;<=>?@[]^_`{|}~ ";

const specChar: SpecialChars = {
  "#": true,
  $: true,
  "%": true,
  "&": true,
  "'": true,
  "(": true,
  ")": true,
  "*": true,
  "+": true,
  ",": true,
  "-": true,
  ".": true,
  "/": true,
  ":": true,
  ";": true,
  "<": true,
  "=": true,
  ">": true,
  "?": true,
  "@": true,
  "[": true,
  "]": true,
  "^": true,
  _: true,
  "`": true,
  "{": true,
  "|": true,
  "}": true,
  "~": true,
  " ": true,
  '"': true,
};

const hasSpecChar = (string: string): boolean => {
  for (let i = 0; i < string.length; i++) {
    if (specChar[string[i]]) return true;
  }
  return false;
};

const hasSqlTerms = (string: string): boolean => {
  const filtered = Object.values(SIA_KEYWORDS).filter(
    (term: string): boolean => string.indexOf(term) !== -1
  );
  return filtered.length >= 2 ? true : false;
};

module.exports = {
  hasSpecChar,
  hasSqlTerms,
};

// Given these words and multiple inputs, find an efficient way to determine
// if input fields include SQL terms
