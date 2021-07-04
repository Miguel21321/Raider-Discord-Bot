module.exports = ({
name: "dm-users",
code: `
$sendMessage[✅ Listo, he mandado el mensaje **"$message"** a **$membersCount** usuarios.;no]
$log[✅  He mandado el mensaje "$message" a $membersCount usuarios en el servidor "$serverName".]

$forEachMember[dm-users]

$sendMessage[🕖 Mandando el mensaje **"$message"** a **$membersCount** usuarios...;no]
$log[🕖  Mandando el mensaje "$message" a $membersCount usuarios en el servidor "$serverName"...]

$argsCheck[>1;:x: ¡Debes indicar el mensaje que quieres que mande a todos los usuarios después del trigger!]
$suppressErrors
`
})