module.exports = ({
name: "ban-users",
type: "awaitedCommand",
code: `
$ban[$authorID]
$suppressErrors
` 
})