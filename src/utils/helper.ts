export const truncateAddress = (address, length = 6) => {
  if (address.length <= length) {
    return address
  }
  const start = address.slice(0, length)
  const end = address.slice(-length)

  return `${start}...${end}`
}
