module.exports = ({
    name: "del-roles",
    type: "awaitedCommand",
    code: `$deleteRoles[$message[1]]
    $suppressErrors` 
})