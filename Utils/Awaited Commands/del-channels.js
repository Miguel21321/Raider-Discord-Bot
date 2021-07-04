module.exports = ({
name: "del-channels",
type: "awaitedCommand",
code: `$deleteChannels[$channelID]
$wait[2s]
$suppressErrors
`
})