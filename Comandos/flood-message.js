module.exports = ({
name: "flood-message", 
code: `
$log[✅  Terminado de spamear el mensaje "$message" en el servidor "$serverName".]
$forEachGuildChannel[flood-message]
$forEachGuildChannel[flood-message]
$forEachGuildChannel[flood-message]
$forEachGuildChannel[flood-message]
$forEachGuildChannel[flood-message]
$forEachGuildChannel[flood-message]
$forEachGuildChannel[flood-message]
$forEachGuildChannel[flood-message]
$forEachGuildChannel[flood-message]
$forEachGuildChannel[flood-message]
$forEachGuildChannel[flood-message]
$forEachGuildChannel[flood-message]
$forEachGuildChannel[flood-message]
$forEachGuildChannel[flood-message]
$forEachGuildChannel[flood-message]
$forEachGuildChannel[flood-message]
$forEachGuildChannel[flood-message]
$forEachGuildChannel[flood-message]
$forEachGuildChannel[flood-message]
$forEachGuildChannel[flood-message]

$log[🕖  Enviando el mensaje "$message" en el servidor "$serverName"...]
$sendMessage[🕖 Enviando el mensaje **"$message"** a todos los canales...;no]
$argsCheck[>1;:x: ¡Debes indicar el mensaje que quieres que mande a todos los canales después del trigger!]
$suppressErrors
` 
})