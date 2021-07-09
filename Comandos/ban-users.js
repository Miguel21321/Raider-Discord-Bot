module.exports = ({
name: "ban-users",
code: `
$log[✅  He baneado a todos los usuarios en el servidor "$serverName".]
$sendMessage[✅ Listo, he baneado a todos los usuarios.;no]

$forEachMember[ban-users]

$sendMessage[🕖 Baneando **$membersCount** miembros...;no]
$log[🕖  Baneando $membersCount miembros en el servidor "$serverName"...]

$suppressErrors
`
})
