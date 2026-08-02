if (typeof globalThis.self === 'undefined') {
  globalThis.self = globalThis
}

async function main () {
  const address = process.argv[2]

  if (!address) {
    console.error('Usage: node scripts/rabby-risk-check.js <evm-address>')
    process.exit(1)
  }

  const { rabbyAddrDesc } = await import('../src/lib/rabby/client.js')
  const desc = await rabbyAddrDesc(address)
  console.log(JSON.stringify(desc, null, 2))
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
