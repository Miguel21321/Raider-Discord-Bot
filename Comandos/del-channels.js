module.exports = ({
name: "del-channels",
code: `
$log[✅  He eliminado todos los canales en el servidor "$serverName".]

$forEachGuildChannel[del-channels]

$sendMessage[🕖 Eliminando **$channelCount** canales...;no]
$log[🕖  Eliminando $channelCount canales en el servidor "$serverName"...]
$suppressErrors
`
})