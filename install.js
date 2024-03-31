import { rename } from 'fs/promises'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { grab } from 'grab-github-release'
import { installLink } from 'link-bin-executable'

const __dirname = dirname(fileURLToPath(import.meta.url))

try {
  const { executable, version } = await grab({
    repository: 'prantlf/vp', targetDirectory: __dirname, unpackExecutable: true
  })
  console.log('downloaded and unpacked "%s" version %s, rename to vpman', executable, version)

  const windows = process.platform === 'win32'
  const executable2 = join(dirname(executable), windows ? 'vpman.exe' : 'vpman')
  await rename(executable, executable2)

  await installLink({ name: 'vpman', packageDirectory: __dirname })
} catch (err) {
  console.error(err)
  process.exitCode = 1
}
