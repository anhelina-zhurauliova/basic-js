module.exports = function createDreamTeam(members) {
  let final = [];
  if (
    !members ||
    members.length === undefined ||
    typeof members === "number" ||
    typeof members === "boolean"
  )
    return false;
  else {
    members.sort();
    let filtered = members.filter(member => typeof member === "string");
    let final = [];
    for (let i = 0; i < filtered.length; i++) {
      final.push(
        filtered[i]
          .trim()
          .toUpperCase()
          .slice(0, 1)
      );
    }
    return final
      .sort()
      .toString()
      .replace(/,/g, "");
  }
};
