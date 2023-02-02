module.exports.getByFlag = (flag) => {
    const indexOfFlag = process.argv.indexOf(flag)
    if (indexOfFlag < 0) return null
    return process.argv[indexOfFlag + 1]
}