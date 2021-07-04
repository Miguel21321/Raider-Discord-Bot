module.exports = ({
name: "server-name",
code: `
$log[✅  He cambiado el nombre del servidor a "$message".]
$sendMessage[✅  He cambiado el nombre del servidor a "$message";no]
$setGuildName[$message]
$argsCheck[>1;:x: ¡Debes indicar el nuevo nombre del servidor después del trigger!]
$suppressErrors[:x: Error, el nombre del servidor debe contener más caracteres]
`
})