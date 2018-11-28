var antispam = require("anti-spam");


antispam(client, {
  warnBuffer: 3,
  interval: 1000,
  warningMessage: "Lütfen yavaşla yoksa susturulacaksın! 19/20",
  member_hasPermission: "KICK_MEMBERS",
  roleMessage: "Kes sesini demiştim sana amk cocugu mute yedin al",
  roleName: "Palemix-Bot-Susturuldun",
  maxDuplicatesWarning: 7,
  maxDuplicatesBan: 10,
  time: 10,
});