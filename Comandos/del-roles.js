module.exports = ({
name: "del-roles", 
code: `
$log[✅  He eliminado $roleCount roles en el servidor "$serverName".]
$sendMessage[✅ He eliminado **$roleCount** roles.;no]

$textSplitMap[del-roles]
$textSplit[$guildRoles[id];, ]

$sendMessage[🕖 Eliminando **$roleCount** roles...;no]
$log[🕖  Eliminando $roleCount roles en el servidor "$serverName"...]
$suppressErrors
` 
})